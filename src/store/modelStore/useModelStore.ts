import { convex } from '@/main';
import { api } from '@convex/_generated/api';
import { Id } from '@convex/_generated/dataModel';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';


interface State {
    models: ModelDoc[];
}


interface Actions {
    getUserModels: (userId: Id<'users'>) => Promise<void>
    deleteModel: (modelId: Id<'models'>) => Promise<void>
}

export const useModelStore = create(
    immer<State & Actions>((set, get) => ({
        models: [],

        getUserModels: async (userId) => {
            const userModels = await convex.query(api.models.get.getAllUserModels, { userId });

            set((store) => {
                store.models = userModels;
            })
        },

        deleteModel: async (modelId) => {
            if (get().models.every(model => model._id !== modelId)) return;

            await convex.mutation(api.models.delete.deleteModelById, { id: modelId });

            set(store => {
                store.models = store.models.filter(model => model._id !== modelId);
            })
        }

    }))
)