import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'
import { immer } from "zustand/middleware/immer";
import { IEditShape } from "../types/editShape";
import { getTileId } from "../utils/getTileId";
import { ITile } from "@/types/tile";

 
interface State {
    shape: IEditShape;
    helperShapes: IEditShape[];
}

interface Actions {
    init: (shape: IEditShape, helperShapes?: IEditShape[]) => void;
   
    addTile: (newTile: ITile) => void;
    removeTile: (removeTile: ITile) => void;
    clearTiles: () => void;
    moveTile: (tile: ITile, newCoordinates: Coordinates<2>) => void;
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
                    store.shape.tiles = store.shape.tiles.filter(tile => getTileId(tile) !== getTileId(removeTileID)) 
                })
            },

            clearTiles: () => {
                set(store => { 
                    store.shape.tiles = []
                })
            },

            moveTile: (movedTile, newCoordinates) => {
                set(store => {
                    const tile = store.shape.tiles.find(tile => getTileId(tile) === getTileId(movedTile));

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