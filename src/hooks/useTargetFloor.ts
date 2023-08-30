import { getFloor } from '@/api/floors/queries';
import { QUERY_KEYWORDS } from '@/constants/queryKeywords';
import { Id } from '@convex/_generated/dataModel';
import { useQuery } from 'react-query';

export const useTargetFloor = (floorId: Id<'floors'>) => {
	return useQuery([QUERY_KEYWORDS.TARGET_FLOOR, floorId], async () => {
		if (!floorId) return null;
		return await getFloor({ floorId });
	});
};
