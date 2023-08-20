export {}

declare global {
    export type Maybe<T> = T | null;
    
    export type Coordinates<TDimension extends 2 | 3> = TDimension extends 2 
        ? {
            x: number;
            y: number;
        }  
        : {
            x: number;
            y: number;
            z: number;
        }
}

