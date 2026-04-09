import { IPoint } from '../interfaces/IPoint';
import { IShape } from '../interfaces/IShape';

export abstract class Shape implements IShape {
  public center?: IPoint; // Центр масс / фокус
  public abstract get name(): string;
  abstract getArea(): number;
  abstract getPerimeter(): number;
}
