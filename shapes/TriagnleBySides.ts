import { Shape } from '../core/Shape';

export class TriangleBySides extends Shape {
  constructor(
    private a: number,
    private b: number,
    private c: number,
  ) {
    super();
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Сторони мають бути додатними числами');
    }
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Порушення нерівності трикутника');
    }
  }

  public get name(): string {
    return 'Трикутник (по сторонам)';
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
