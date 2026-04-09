import { Polygon } from '../core/Polygon';
import { IPoint } from '../interfaces/IPoint';

export class Triangle extends Polygon {
  constructor(points: IPoint[], count: number) {
    const p1 = points[0]!;
    const p2 = points[1]!;
    const p3 = points[2]!;
    super([p1, p2, p3], 3);
  }
  public get name(): string {
    return 'Трикутник';
  }
  // Наследует getArea() и getPerimeter() от Polygon
}
