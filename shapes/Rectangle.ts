import { Polygon } from '../core/Polygon';
import { IPoint } from '../interfaces/IPoint';

export class Rectangle extends Polygon {
  protected width: number;
  protected height: number;

  constructor(points: IPoint[], count: number) {
    let finalPoints: IPoint[];
    let finalCount: number;

    if (count === 2 && points.length >= 2) {
      const p1 = points[0]!;
      const p2 = points[1]!;

      finalPoints = [p1, { x: p2.x, y: p1.y }, p2, { x: p1.x, y: p2.y }];
      finalCount = 4;
    } else {
      finalPoints = points;
      finalCount = count;
    }
    super(finalPoints, finalCount);

    const pTopLeft = this.vertices[0]!;
    const pBottomRight = this.vertices[2]!;

    this.width = Math.abs(pBottomRight.x - pTopLeft.x);
    this.height = Math.abs(pBottomRight.y - pTopLeft.y);
  }

  public override getArea(): number {
    return this.width * this.height;
  }

  public override getPerimeter(): number {
    return 2 * (this.width + this.height);
  }

  public get name(): string {
    return 'Прямокутник';
  }
}
