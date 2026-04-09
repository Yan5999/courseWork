import { Shape } from '../core/Shape';

export class TriangleBySides extends Shape {
  constructor(
    private a: number,
    private b: number,
    private c: number,
  ) {
    super();
  }

  public get name(): string {
    return 'Треугольник (по сторонам)';
  }

  public getArea(): number {
    const p = this.getPerimeter() / 2;
    // Формула Герона
    return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
  }

  public getPerimeter(): number {
    return this.a + this.b + this.c;
  }
}
