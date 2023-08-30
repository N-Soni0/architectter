import { getModel } from "@/api/models/queries";
import { QUERY_KEYWORDS } from "@/constants/queryKeywords";
import { Id } from "@convex/_generated/dataModel";
import { useQuery } from "react-query";

export const useTargetModel = (modelId: Id<'models'>) => {
    return useQuery([QUERY_KEYWORDS.TARGET_MODEL, modelId], async () => {
        if (!modelId) return null;
        return await getModel(modelId as Id<'models'>)
    })
}