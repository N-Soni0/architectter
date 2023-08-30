import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { RawDataSchemaType } from "../schemas/rawDataSchema";
import { PointsSchemaType } from "../schemas/pointsSchema";

type State = Partial<RawDataSchemaType & PointsSchemaType>;

type Actions = {
    initState: (defalutState: State) => void;
    update: (state: Partial<State>) => void;
    reset: () => void;
}

const DEFAULT_VALUES: State = {
    height: 3,
    points: []
}

export const useFormStore = create(
    immer<State & Actions>((set) => ({
        height: undefined,
        points: undefined,

        initState: (defaultState) => {
            set(store => {
                store.height = defaultState.height ?? DEFAULT_VALUES.height;
                store.points = defaultState.points ?? DEFAULT_VALUES.points;
            })
        },

        update: (updates) => {
            set(store => ({
                ...store,
                ...updates
            }))
        },

        reset: () => {
            set(() => DEFAULT_VALUES)
        }
    }))
)