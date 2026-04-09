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
  static createTriangleByPoints(points: IPoint[], count: number): Triangle {
    return new Triangle(points, count);
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

  static createRectangle(points: IPoint[], count: number): Rectangle {
    return new Rectangle(points, count);
  }

  static createSquare(points: IPoint[], count: number, side: number): Square {
    return new Square(points, count, side);
  }

  static createParallelogram(points: IPoint[], count: number): Parallelogram {
    return new Parallelogram(points, count);
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

  static createPolygon(vertices: IPoint[], count: number): Polygon {
    return new Polygon(vertices, count);
  }
  static createSquareBySide(side: number): Square {
    return new Square([{ x: 0, y: 0 }], 1, side);
  }
  static createTrapezoidByPoints(points: IPoint[], count: number): Polygon {
    return new Polygon(points, count);
  }
  static createRhombusByPoints(points: IPoint[], count: number): Polygon {
    return new Polygon(points, count);
  }
  static createParallelogramByParams(
    base: number,
    side: number,
    height: number,
  ): ParallelogramBySides {
    return new ParallelogramBySides(base, side, height);
  }
}
