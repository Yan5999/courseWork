import { Shape } from '../core/Shape';

export class RhombusByDiagonales extends Shape {
  constructor(
    private d1: number,
    private d2: number,
  ) {
    super();
    if (d1 <= 0 || d2 <= 0)
      throw new Error('Діагоналі мають бути додатними числами');
  }

  public get name(): string {
    return 'Ромб';
  }

  public getArea(): number {
    return (this.d1 * this.d2) / 2;
  }

  public getPerimeter(): number {
    const side = Math.sqrt(Math.pow(this.d1, 2) + Math.pow(this.d2, 2)) / 2;
    return 4 * side;
  }
}
