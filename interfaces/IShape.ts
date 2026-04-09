export interface IShape {
  readonly name: string;
  getArea(): number;
  getPerimeter(): number;
}
