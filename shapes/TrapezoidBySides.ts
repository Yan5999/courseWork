import { Shape } from '../core/Shape';

export class TrapezoidBySides extends Shape {
  constructor(
    private a: number,
    private b: number,
    private c: number,
    private h: number,
  ) {
    super();
  }

  public get name(): string {
    return 'Трапеція';
  }

  public getArea(): number {
    return ((this.a + this.b) / 2) * this.h;
  }

  public getPerimeter(): number {
    return this.a + this.b + 2 * this.c;
  }
}
