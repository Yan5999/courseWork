import { Shape } from '../core/Shape';
import { IPoint } from '../interfaces/IPoint';

export class Ellipse extends Shape {
  constructor(
    center: IPoint,
    public semiMajorAxis: number,
    public semiMinorAxis: number,
  ) {
    super();
    this.center = center;
  }

  public getArea(): number {
    return Math.PI * this.semiMajorAxis * this.semiMinorAxis;
  }

  public getPerimeter(): number {
    const a = this.semiMajorAxis;
    const b = this.semiMinorAxis;
    return Math.PI * (3 * (a + b) - Math.sqrt((3 * a + b) * (a + 3 * b)));
  }
  public get name(): string {
    return 'Еліпс';
  }
}
