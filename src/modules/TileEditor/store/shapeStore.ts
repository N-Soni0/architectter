import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'
import { immer } from "zustand/middleware/immer";
import { IEditShape, ITile } from "../types/editShape";

 
interface State {
    shape: IEditShape;
    helperShapes: IEditShape[];
}

interface Actions {
    init: (shape: IEditShape, helperShapes?: IEditShape[]) => void;
   
    addTile: (newTile: ITile) => void;
    removeTile: (removeTileID: ID) => void;
    clearTiles: () => void;
    moveTile: (tileID: ID, newCoordinates: Coordinates<2>) => void;
}

export const useShapeStore = create(
    persist(
        immer<State & Actions>((set) => ({
            shape: {
                tiles: [],
                color: '#661ae6',
                connect: true,
                name: 'Editing shape'
            },
            helperShapes: [],

            init: (shape, helperShapes) => {
                set(store => { 
                    store.shape = shape 
                    store.helperShapes = helperShapes ?? []
                })
            },

            addTile: (newTile) => {
                set(store => { store.shape.tiles.push(newTile) })
            },

            removeTile: (removeTileID) => {
                set(store => { 
                    store.shape.tiles = store.shape.tiles.filter(tile => tile.id !== removeTileID) 
                })
            },

            clearTiles: () => {
                set(store => { 
                    store.shape.tiles = []
                })
            },

            moveTile: (tileID, newCoordinates) => {
                set(store => {
                    const tile = store.shape.tiles.find(tile => tile.id === tileID);

                    if (tile) {
                        tile.coordinates = newCoordinates
                    }
                })
            },

        })),
        {
            name: 'edited-tiles',
            storage: createJSONStorage(() => localStorage)
        }
    )
)