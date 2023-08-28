import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { RawDataSchemaType } from "../schemas/rawDataSchema";
import { PointsSchemaType } from "../schemas/pointsSchema";

type ZustandStep<T extends Record<string, unknown>> = {
    data: T,

    reset: () => void;
    update: (updates: Partial<T>) => void
}

interface State {
    rawDataStep: ZustandStep<RawDataSchemaType>;
    setPointsStep: ZustandStep<PointsSchemaType>;
}


export const useFormStore = create(
    immer<State>((set) => ({
        rawDataStep: {
            data: {
                height: 0
            },

            reset: () => {
                set(store => {
                    store.rawDataStep.data.height = 0;
                })
            },

            update: (updates) => {
                set((store) => {
                    store.rawDataStep.data = { ...store.rawDataStep.data, ...updates}
                })
            }
        },

        setPointsStep: {
            data: {
                points: []
            },

            reset: () => {
                set(store => {
                    store.setPointsStep.data.points = [];
                })
            },

            update: (updates) => {
                set((store) => {
                    store.setPointsStep.data = { ...store.setPointsStep.data, ...updates}
                })
            }
        }
    }))
)