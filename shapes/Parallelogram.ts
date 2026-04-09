import { Polygon } from '../core/Polygon';
import { IPoint } from '../interfaces/IPoint';

export class Parallelogram extends Polygon {
  constructor(p1: IPoint, p2: IPoint, p3: IPoint) {
    const p4 = { x: p1.x + p3.x - p2.x, y: p1.y + p3.y - p2.y };
    super([p1, p2, p3, p4]);
  }
  public get name(): string {
    return 'Паралелорграм';
  }
}
