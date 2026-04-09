import { Polygon } from '../core/Polygon';
import { IPoint } from '../interfaces/IPoint';

export class RegularPolygon extends Polygon {
  constructor(
    center: IPoint,
    private circumradius: number,
    private sidesCount: number,
  ) {
    const vertices: IPoint[] = [];
    // Генерация вершин по кругу
    for (let i = 0; i < sidesCount; i++) {
      const angle = (i * 2 * Math.PI) / sidesCount;
      vertices.push({
        x: center.x + circumradius * Math.cos(angle),
        y: center.y + circumradius * Math.sin(angle),
      });
    }
    super(vertices, sidesCount);
    this.center = center;
  }

  public override getArea(): number {
    return (
      0.5 *
      this.sidesCount *
      Math.pow(this.circumradius, 2) *
      Math.sin((2 * Math.PI) / this.sidesCount)
    );
  }

  public override getPerimeter(): number {
    return (
      2 *
      this.sidesCount *
      this.circumradius *
      Math.sin(Math.PI / this.sidesCount)
    );
  }
  get name(): string {
    return 'Правильний многокутник';
  }
}
