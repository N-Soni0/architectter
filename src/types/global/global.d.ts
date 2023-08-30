
export {};

declare global {
	type ID = string;

	type ShapePoint = FloorDoc['shape'][number];


	type StraightShapePoint = Extract<ShapePoint, { connection: "STRAIGHT" }>;
	type RoundedShapePoint = Extract<ShapePoint, { connection: "ROUNDED" }>;
}
