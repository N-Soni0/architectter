import { convex } from '@/main';
import { api } from '@convex/_generated/api';
import { Id } from '@convex/_generated/dataModel';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface State {
	cached: Maybe<ModelDoc>;
	targetModel: Maybe<ModelDoc>;

	isLoading: boolean;
	error: unknown;
}

interface Actions {
	cache: (modelDoc: ModelDoc) => void;
	setTarget: (modelDoc: ModelDoc) => void;
	fetchModel: (modelId: Id<'models'>) => Promise<Maybe<ModelDoc>>;

	clearCache: () => void;
	resetTarget: () => void;
}

export const useTargetModelStore = create(
	immer<State & Actions>((set) => ({
		cached: null,
		targetModel: null,
		isLoading: false,
		error: null,

		cache: (model) => {
			set((store) => {
				store.cached = model;
			});
		},

		clearCache: () => {
			set((store) => {
				store.cached = null;
			});
		},

		setTarget: (model) => {
			set((store) => {
				store.targetModel = model;
			});
		},

		fetchModel: async (modelId) => {
			try {
				set((store) => {
					store.isLoading = true;
				});
				const model = await convex.query(api.models.get.getModel, {
					modelId: modelId,
				});

				if (!model) return null;

				set((store) => {
					store.targetModel = model;
				});

				return model;
			} catch (error) {
				set((store) => {
					store.error = error;
				});
			} finally {
                set(store => { store.isLoading = false })
            }
            
			return null;
		},

		resetTarget: () => {
			set((store) => {
				store.targetModel = null;
			});
		},
	}))
);
