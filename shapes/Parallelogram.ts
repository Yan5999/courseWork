import { Polygon } from '../core/Polygon';
import { IPoint } from '../interfaces/IPoint';

export class Parallelogram extends Polygon {
  constructor(points: IPoint[], count: number) {
    const p1 = points[0]!;
    const p2 = points[1]!;
    const p3 = points[2]!;
    const p4 = { x: p1.x + p3.x - p2.x, y: p1.y + p3.y - p2.y };
    super([p1, p2, p3, p4], 4);
  }
  public get name(): string {
    return 'Паралелорграм';
  }
}
