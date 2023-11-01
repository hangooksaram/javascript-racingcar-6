import { Cars } from './Cars.js';
import { getGreatestNumber } from '../utils.js';
import { printResult } from '../output/result.js';

export class Race {
  #tryInput;
  #cars;

  constructor(carNames, tryInput) {
    this.#cars = new Cars(carNames);

    this.#tryInput = tryInput;
  }

  start() {
    let count = 0;
    while (count < this.#tryInput) {
      count += 1;
      this.#cars.move();
    }
  }

  end() {
    const winners = this.getWinners();

    printResult.final(winners.map((winner) => winner.getName()));
  }

  getWinners() {
    const greatestPosition = getGreatestNumber(this.#cars.getPositions());
    return this.#cars.getList().filter((car) => car.getPosition() === greatestPosition);
  }
}
