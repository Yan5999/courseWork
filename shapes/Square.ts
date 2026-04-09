import { IPoint } from '../interfaces/IPoint';
import { Rectangle } from './Rectangle';

export class Square extends Rectangle {
  constructor(topLeft: IPoint, side: number) {
    const bottomRight = { x: topLeft.x + side, y: topLeft.y - side };
    super(topLeft, bottomRight);
  }
  public get name(): string {
    return `Квадрат за точками`;
  }
}
