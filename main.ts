import { ShapeFactory } from './factories/ShapeFactory';
import { IPoint } from './interfaces/IPoint';

const points: IPoint[] = [
  { x: 0, y: 0 }, // 1
  { x: 5, y: 0 }, // 2
  { x: 5, y: 5 }, // 3
  { x: 0, y: 5 }, // 4
  { x: 2, y: 8 }, // 5
  { x: -3, y: 4 }, // 6
  { x: 10, y: 10 }, // 7
  { x: 12, y: 0 }, // 8
  { x: 8, y: -2 }, // 9
  { x: 4, y: -5 }, // 10
  { x: -5, y: -5 }, // 11
  { x: 0, y: -10 }, // 12
  { x: 7, y: 3 }, // 13
  { x: 1, y: 1 }, // 14
  { x: 9, y: 9 }, // 15
  { x: 3, y: 6 }, // 16
  { x: 6, y: 2 }, // 17
  { x: 2, y: 4 }, // 18
  { x: 11, y: 5 }, // 19
  { x: 4, y: 1 }, // 20
];
const shapes = [
  // 1. Трикутники
  ShapeFactory.createTriangleByPoints(points, 3),
  ShapeFactory.createTriangleBySides(3, 4, 5),

  // 2. Коло та Еліпс
  ShapeFactory.createCircle({ x: 5, y: 5 }, 10),
  ShapeFactory.createEllipse({ x: 0, y: 0 }, 10, 5),

  // 3. Прямокутні та Квадрати
  ShapeFactory.createRectangle(points, 4), // По двох точках
  ShapeFactory.createSquare(points, 4, 5), // Квадрат з точкою прив'язки
  ShapeFactory.createSquareBySide(10), // "Уявний" квадрат тільки по стороні

  // 4. Паралелограми
  ShapeFactory.createParallelogram(points, 4), // Аналітичний (вираховує p4)
  ShapeFactory.createParallelogramByParams(10, 6, 5), // Параметричний (base, side, height)

  // 5. Ромби
  ShapeFactory.createRhombusByPoints(points, 4), // По точках
  ShapeFactory.createRhombusByDiagonales(10, 16), // По діагоналях

  // 6. Трапеції
  ShapeFactory.createTrapezoidByPoints(points, 4), // По точках
  ShapeFactory.createTrapezoidBySides(10, 6, 5, 4), // Параметрична (a, b, c, h)

  // 7. Складні багатокутники
  ShapeFactory.createRegularPolygon({ x: 0, y: 0 }, 5, 6), // Шестикутник
  ShapeFactory.createPolygon(points, 5),
];

shapes.forEach((shape, index) => {
  try {
    console.log('');
    console.log(`${index + 1}. [${shape.name}]`);
    console.log(`Площа: ${shape.getArea().toFixed(2)}`);
    console.log(`Периметр: ${shape.getPerimeter().toFixed(2)}`);
  } catch (error) {
    console.error(error);
  }
});

//конструктор для передачи масива точок
