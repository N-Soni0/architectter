
export interface ITile {
    id: ID;
    coordinates: Coordinates<2>;
}

export interface IEditShape {
    tiles: ITile[];
    connect?: boolean;
    color?: string;
    name?: string;
}
