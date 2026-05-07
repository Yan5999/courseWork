import { ShapeFactory } from './factories/ShapeFactory';
import { IPoint } from './interfaces/IPoint';
import { IShape } from './interfaces/IShape';

const points: IPoint[] = [
  { x: 0, y: 0 }, // 1. Лівий нижній кут
  { x: 5, y: 0 }, // 2. Правий нижній кут
  { x: 5, y: 5 }, // 3. Правий верхній кут квадрата
  { x: 2, y: 8 }, // 4. Пік
  { x: 0, y: 5 }, // 5. Лівий верхній кут
];

console.log('   ТЕСТУВАННЯ БІБЛІОТЕКИ 2D-ФІГУР');
const shapes: { label: string; shape: IShape }[] = [
  {
    label: 'Трикутник (по сторонах)',
    shape: ShapeFactory.createTriangleBySides(3, 4, 5),
  },
  {
    label: 'Трикутник (по точках)',
    shape: ShapeFactory.createTriangleByPoints(points, 3),
  },
  { label: 'Коло', shape: ShapeFactory.createCircle({ x: 0, y: 0 }, 10) },
  { label: 'Еліпс', shape: ShapeFactory.createEllipse({ x: 0, y: 0 }, 10, 5) },
  {
    label: 'Прямокутник (2 точки)',
    shape: ShapeFactory.createRectangle(
      [
        { x: 0, y: 0 },
        { x: 5, y: 4 },
      ],
      2,
    ),
  },
  {
    label: 'Прямокутник (4 точки)',
    shape: ShapeFactory.createRectangle(points, 4),
  },
  {
    label: 'Квадрат (точка + сторона)',
    shape: ShapeFactory.createSquare(points, 1, 5),
  },
  {
    label: 'Квадрат (тільки сторона)',
    shape: ShapeFactory.createSquareBySide(10),
  },
  {
    label: 'Паралелограм (точки)',
    shape: ShapeFactory.createParallelogram(
      [
        { x: 0, y: 0 },
        { x: 4, y: 0 },
        { x: 5, y: 3 },
      ],
      3,
    ),
  },
  {
    label: 'Паралелограм (параметри)',
    shape: ShapeFactory.createParallelogramByParams(10, 6, 5),
  },
  {
    label: 'Ромб (діагоналі)',
    shape: ShapeFactory.createRhombusByDiagonales(10, 16),
  },
  {
    label: 'Трапеція (параметри)',
    shape: ShapeFactory.createTrapezoidBySides(10, 6, 5, 4),
  },
  {
    label: 'Правильний шестикутник',
    shape: ShapeFactory.createRegularPolygon({ x: 0, y: 0 }, 5, 6),
  },
  {
    label: 'Довільний многокутник',
    shape: ShapeFactory.createPolygon(points, 5),
  },
];

console.log('Тестування коректних вхідних даних');
shapes.forEach(({ label, shape }, i) => {
  console.log(`  [${i + 1}] ${label}`);
  console.log(`       Площа:     ${shape.getArea().toFixed(2)}`);
  console.log(`       Периметр:  ${shape.getPerimeter().toFixed(2)}`);
  console.log('');
});

console.log('Тестування некоректних вхідних даних');

const invalidTests: { label: string; fn: () => void }[] = [
  {
    label: 'Polygon — менше 3 вершин',
    fn: () => ShapeFactory.createPolygon(points, 2),
  },
  {
    label: 'Polygon — count=5, передано 3 точки',
    fn: () =>
      ShapeFactory.createPolygon(
        [
          { x: 0, y: 0 },
          { x: 5, y: 4 },
          { x: 10, y: 8 },
        ],
        5,
      ),
  },
  {
    label: "TriangleBySides — від'ємна сторона (a=-1)",
    fn: () => ShapeFactory.createTriangleBySides(-1, 4, 5),
  },
  {
    label: 'TriangleBySides — порушення нерівності (1+2≤10)',
    fn: () => ShapeFactory.createTriangleBySides(1, 2, 10),
  },
  {
    label: "Circle — від'ємний радіус (r=-5)",
    fn: () => ShapeFactory.createCircle({ x: 0, y: 0 }, -5),
  },
  {
    label: 'RhombusByDiagonales — діагональ = 0',
    fn: () => ShapeFactory.createRhombusByDiagonales(0, 5),
  },
  {
    label: "Ellipse — від'ємна піввісь",
    fn: () => ShapeFactory.createEllipse({ x: 0, y: 0 }, -10, 5),
  },
  {
    label: "TrapezoidBySides — від'ємна висота",
    fn: () => ShapeFactory.createTrapezoidBySides(10, 6, 5, -4),
  },
];

invalidTests.forEach(({ label, fn }, i) => {
  try {
    fn();
    console.log(`  [${i + 1}] ${label}`);
  } catch (e: any) {
    console.log(`  [${i + 1}] ${label}`);
    console.log(`       Error:   ${e.message}`);
  }
  console.log('');
});
