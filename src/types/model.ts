import { IFloor } from "./floor";

export interface IModel {
    id: ID;
    name: string;
    floors: IFloor[];
}


