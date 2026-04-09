import { IPoint } from '../interfaces/IPoint';
import { Rectangle } from './Rectangle';

export class Square extends Rectangle {
  constructor(points: IPoint[], count: number, side?: number) {
    if (side !== undefined && points.length >= 1) {
      const topLeft = points[0]!;
      const bottomRight = { x: topLeft.x + side, y: topLeft.y - side };
      super([topLeft, bottomRight], 2);
    } else {
      super(points, count);
    }
  }

  public get name(): string {
    return `Квадрат`;
  }
}
