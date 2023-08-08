import { ShapePointConnectionKind,  } from ".";
import { ITile } from "../tile";

export interface IStraightShapeTile extends ITile {
    connectionType: ShapePointConnectionKind.STRAIGHT;
}