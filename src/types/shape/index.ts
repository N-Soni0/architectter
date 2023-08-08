import { IRoundedShapeTile } from "./roundedShapeTile";
import { IStraightShapeTile } from "./straightShapeTIle";

export type Shape = {
    tiles: ShapeTile[];
    color?: string; 
}

export enum ShapePointConnectionKind {
    STRAIGHT,
    ROUNDED
}

export type ShapeTile = IStraightShapeTile | IRoundedShapeTile;