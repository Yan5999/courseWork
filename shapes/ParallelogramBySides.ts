import { Shape } from '../core/Shape';

export class ParallelogramBySides extends Shape {
  constructor(
    private base: number,
    private side: number,
    private height: number,
  ) {
    super();
    if (base <= 0 || side <= 0 || height <= 0)
      throw new Error('Параметри мають бути додатними числами');
    this.center = { x: 0, y: 0 };
  }

  public get name(): string {
    return 'Паралелограм (за величинами)';
  }

  public getArea(): number {
    return this.base * this.height;
  }

  public getPerimeter(): number {
    return 2 * (this.base + this.side);
  }
}
