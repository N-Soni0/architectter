import { api } from '@/../convex/_generated/api';
import { Id } from 'convex/_generated/dataModel';
import { useConvex } from 'convex/react';
import { useEffect, useState } from 'react';

interface UseUserModelsOptions {
	onlyPublic: boolean;
}

export const useUserModels = (
	userId?: Maybe<Id<'users'>>,
	options?: Partial<UseUserModelsOptions>
) => {
	const [models, setModels] = useState<ModelDoc[]>([]);
	const convex = useConvex();

	useEffect(() => {
		(async () => {
			if (!userId) return;

			const userModels = await convex.query(api.models.getUserModels, {
				userId,
				options: { onlyPublic: options?.onlyPublic },
			});
			if (!userModels.length) return;

			setModels(userModels);
		})();
	}, [userId, convex]);

	return models ?? [];
};
