import { Polygon } from '../core/Polygon';
import { IPoint } from '../interfaces/IPoint';
import { IShape } from '../interfaces/IShape';
import { Circle } from '../shapes/Circle';
import { Ellipse } from '../shapes/Ellipse';
import { Parallelogram } from '../shapes/Parallelogram';
import { ParallelogramBySides } from '../shapes/ParallelogramBySides';
import { Rectangle } from '../shapes/Rectangle';
import { RegularPolygon } from '../shapes/RegularPolygon';
import { RhombusByDiagonales } from '../shapes/RhombusByDiagonales';
import { Square } from '../shapes/Square';
import { TrapezoidBySides } from '../shapes/TrapezoidBySides';
import { Triangle } from '../shapes/Triagnle';
import { TriangleBySides } from '../shapes/TriagnleBySides';

export class ShapeFactory {
  static createTriangleByPoints(p1: IPoint, p2: IPoint, p3: IPoint): Triangle {
    return new Triangle(p1, p2, p3);
  }

  static createTriangleBySides(a: number, b: number, c: number): IShape {
    return new TriangleBySides(a, b, c);
  }

  static createCircle(center: IPoint, radius: number): Circle {
    return new Circle(center, radius);
  }

  static createEllipse(
    center: IPoint,
    semiMajorAxis: number,
    semiMinorAxis: number,
  ): Ellipse {
    return new Ellipse(center, semiMajorAxis, semiMinorAxis);
  }

  static createRegularPolygon(
    center: IPoint,
    circumradius: number,
    sidesCount: number,
  ): RegularPolygon {
    return new RegularPolygon(center, circumradius, sidesCount);
  }

  static createRectangle(topLeft: IPoint, bottomRight: IPoint): Rectangle {
    return new Rectangle(topLeft, bottomRight);
  }

  static createSquare(topLeft: IPoint, side: number): Square {
    return new Square(topLeft, side);
  }

  static createParallelogram(
    p1: IPoint,
    p2: IPoint,
    p3: IPoint,
  ): Parallelogram {
    return new Parallelogram(p1, p2, p3);
  }

  static createRhombusByDiagonales(
    d1: number,
    d2: number,
  ): RhombusByDiagonales {
    return new RhombusByDiagonales(d1, d2);
  }

  static createTrapezoidBySides(
    a: number,
    b: number,
    c: number,
    h: number,
  ): TrapezoidBySides {
    return new TrapezoidBySides(a, b, c, h);
  }

  static createPolygon(vertices: IPoint[]): Polygon {
    if (vertices.length < 3) {
      throw new Error('Многокутник повинен мати мінімум 3 вершини');
    }
    return new Polygon(vertices);
  }
  static createSquareBySide(side: number): Square {
    return new Square({ x: 0, y: 0 }, side);
  }
  static createTrapezoidByPoints(
    p1: IPoint,
    p2: IPoint,
    p3: IPoint,
    p4: IPoint,
  ): Polygon {
    return new Polygon([p1, p2, p3, p4]);
  }
  static createRhombusByPoints(
    p1: IPoint,
    p2: IPoint,
    p3: IPoint,
    p4: IPoint,
  ): Polygon {
    return new Polygon([p1, p2, p3, p4]);
  }
  static createParallelogramByParams(
    base: number,
    side: number,
    height: number,
  ): ParallelogramBySides {
    return new ParallelogramBySides(base, side, height);
  }
}
