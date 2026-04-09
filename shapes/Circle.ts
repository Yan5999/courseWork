import { Shape } from '../core/Shape';
import { IPoint } from '../interfaces/IPoint';

export class Circle extends Shape {
  constructor(
    center: IPoint,
    public radius: number,
  ) {
    super();
    this.center = center;
  }

  public getArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }

  public getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
  public get name(): string {
    return 'Коло';
  }
}
