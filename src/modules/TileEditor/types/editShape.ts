import { ITile } from "@/types/tile";

export interface IEditShape {
    tiles: ITile[];
    connect?: boolean;
    color?: string;
    name?: string;
}
