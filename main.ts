import { ShapeFactory } from './factories/ShapeFactory';
import { IPoint } from './interfaces/IPoint';

const p1: IPoint = { x: 0, y: 0 };
const p2: IPoint = { x: 4, y: 0 };
const p3: IPoint = { x: 4, y: 3 };
const p4: IPoint = { x: 0, y: 3 };

const shapes = [
  // 1. Трикутники
  ShapeFactory.createTriangleByPoints(p1, p2, p3),
  ShapeFactory.createTriangleBySides(3, 4, 5),

  // 2. Коло та Еліпс
  ShapeFactory.createCircle({ x: 5, y: 5 }, 10),
  ShapeFactory.createEllipse({ x: 0, y: 0 }, 10, 5),

  // 3. Прямокутні та Квадрати
  ShapeFactory.createRectangle(p1, p3), // По двох точках
  ShapeFactory.createSquare(p1, 5), // Квадрат з точкою прив'язки
  ShapeFactory.createSquareBySide(10), // "Уявний" квадрат тільки по стороні

  // 4. Паралелограми
  ShapeFactory.createParallelogram(p1, p2, p3), // Аналітичний (вираховує p4)
  ShapeFactory.createParallelogramByParams(10, 6, 5), // Параметричний (base, side, height)

  // 5. Ромби
  ShapeFactory.createRhombusByPoints(
    p1,
    { x: 2, y: -2 },
    { x: 4, y: 0 },
    { x: 2, y: 2 },
  ), // По точках
  ShapeFactory.createRhombusByDiagonales(10, 16), // По діагоналях

  // 6. Трапеції
  ShapeFactory.createTrapezoidByPoints(p1, p2, { x: 3, y: 2 }, { x: 1, y: 2 }), // По точках
  ShapeFactory.createTrapezoidBySides(10, 6, 5, 4), // Параметрична (a, b, c, h)

  // 7. Складні багатокутники
  ShapeFactory.createRegularPolygon({ x: 0, y: 0 }, 5, 6), // Шестикутник
  ShapeFactory.createPolygon([p1, p2, p3, { x: 2, y: 5 }, p4]),
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
