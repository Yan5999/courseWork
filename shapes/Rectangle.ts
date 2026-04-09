import { Polygon } from '../core/Polygon';
import { IPoint } from '../interfaces/IPoint';

export class Rectangle extends Polygon {
  protected width: number;
  protected height: number;

  constructor(topLeft: IPoint, bottomRight: IPoint) {
    super([
      topLeft,
      { x: bottomRight.x, y: topLeft.y },
      bottomRight,
      { x: topLeft.x, y: bottomRight.y },
    ]);
    this.width = Math.abs(bottomRight.x - topLeft.x);
    this.height = Math.abs(bottomRight.y - topLeft.y);
  }
  public override getArea(): number {
    return this.width * this.height;
  }

  public override getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
  public get name(): string {
    return 'Чотирикутник';
  }
}
