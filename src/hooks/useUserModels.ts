import { getUserModels } from '@/api/models/queries';
import { QUERY_KEYWORDS } from '@/constants/queryKeywords';
import { Id } from '@convex/_generated/dataModel';
import { useQuery } from 'react-query';

export const useUserModels = (userId: Maybe<Id<'users'>>) => {
	return useQuery([QUERY_KEYWORDS.MODELS, userId], async () => {
        if (!userId) return;
        
		return await getUserModels(userId);
	});
};
