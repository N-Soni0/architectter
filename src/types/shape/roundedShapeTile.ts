import { ShapePointConnectionKind,  } from ".";
import { ITile } from "../tile";

export interface IRoundedShapeTile extends ITile {
    connectionType: ShapePointConnectionKind.ROUNDED;
    radius: number;
    isConvex?: boolean;
}