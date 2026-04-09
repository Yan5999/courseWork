import { IPoint } from '../interfaces/IPoint';
import { Shape } from './Shape';

export class Polygon extends Shape {
  constructor(
    protected vertices: IPoint[],
    private count: number,
    private customName?: string,
  ) {
    super();
    if (vertices.length < count) {
      throw new Error(
        `Потрібно було ${count} вершин, а отримано ${vertices.length}`,
      );
    } else if (this.vertices.length < 3) {
      throw new Error('Многокутник повинен мати мінімум 3 вершини');
    }

    this.vertices = vertices.slice(0, this.count);

    this.center = this.calculateCentroid();
  }

  public get name(): string {
    return this.customName || 'Багатокутник';
  }

  public getDistance(p1: IPoint, p2: IPoint): number {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
  }

  // формула Гаусса
  public getArea(): number {
    let area = 0;
    const n = this.vertices.length;
    if (n < 3) return 0;

    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n;
      area += this.vertices[i]!.x * this.vertices[j]!.y;
      area -= this.vertices[j]!.x * this.vertices[i]!.y;
    }

    return Math.abs(area) / 2;
  }

  // периметр по точкам
  public getPerimeter(): number {
    let perimeter = 0;
    const n = this.vertices.length;
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n;
      perimeter += this.getDistance(this.vertices[i]!, this.vertices[j]!);
    }
    return perimeter;
  }

  // среднее арифметическое координат
  protected calculateCentroid(): IPoint {
    const sum = this.vertices.reduce(
      (acc, val) => ({ x: acc.x + val.x, y: acc.y + val.y }),
      { x: 0, y: 0 },
    );
    return { x: sum.x / this.vertices.length, y: sum.y / this.vertices.length };
  }
}
