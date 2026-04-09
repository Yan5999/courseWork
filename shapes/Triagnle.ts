import { Polygon } from '../core/Polygon';
import { IPoint } from '../interfaces/IPoint';

export class Triangle extends Polygon {
  constructor(p1: IPoint, p2: IPoint, p3: IPoint) {
    super([p1, p2, p3]);
  }
  public get name(): string {
    return 'Трикутник';
  }
  // Наследует getArea() и getPerimeter() от Polygon
}
