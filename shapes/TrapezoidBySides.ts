import { Shape } from '../core/Shape';

export class TrapezoidBySides extends Shape {
  constructor(
    private a: number,
    private b: number,
    private c: number,
    private h: number,
  ) {
    super();
    if (a <= 0 || b <= 0 || c <= 0 || h <= 0)
      throw new Error('Параметри мають бути додатними числами');
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
