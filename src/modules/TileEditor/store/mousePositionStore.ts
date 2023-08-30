import { create } from "zustand";
import { immer } from "zustand/middleware/immer";


interface State {
    position: Coordinates<2>;
}

interface Actions {
    setPosition: (newPostion: Coordinates<2>) => void;
}

export const useMousePositionStore = create(
    immer<State & Actions>((set) => ({
        position: { x: 0, y : 0},

        setPosition: (newPosition) => {
            set(store => { store.position = newPosition })
        }
    }))
)