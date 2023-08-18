import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { ModelSchemaType } from "../schemas/modelSchema";



interface State  {
    fields: Maybe<ModelSchemaType>
}

interface Actions {
    saveFields: (fields: ModelSchemaType) => void;
    reset: () => void;
}

export const useFormStore = create(
    immer<State & Actions>((set) => ({
        fields: null,

        saveFields: (fields) => {
            set(store => {
                store.fields = fields
            })
        },

        reset: () => {
            set(store => {
                store.fields = null
            })
        }
    }))
)