import { RandomGenerator } from "../../../src/RandomGenerator.js";
import { Car } from "../../../src/game/Car.js";
import { Cars } from "../../../src/game/Cars.js";
import { Race } from "../../../src/game/Race.js";
import { printResult } from "../../../src/output/result.js";

const loserCar = new Car("loserCar", new RandomGenerator(0,3));
const winnerCarName="winnerCar"
const winnerCar = new Car(winnerCarName, new RandomGenerator(4,9));
const greatestPosition = 3;
const cars =  new Cars([loserCar, winnerCar]);
const race = new Race(cars);
const printFinalResultSpy = jest.spyOn(printResult, "final");

describe("우승 자동차 선별 및 최종 겲과 출력",()=>{
    test("getWinners", ()=>{
        for(let i=0; i<greatestPosition; i++){
            winnerCar.move();
        }

        const winners = race.getWinners(cars, greatestPosition);

        expect(winners).toEqual([winnerCarName]);
    })

    test("end", ()=>{
        race.end();
        
        expect(printFinalResultSpy).toHaveBeenCalledWith([winnerCarName]);
    })
})
