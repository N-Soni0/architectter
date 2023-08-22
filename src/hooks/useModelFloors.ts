import { getModelFloors } from "@/api/floors/queries"
import { QUERY_KEYWORDS } from "@/constants/queryKeywords"
import { Id } from "@convex/_generated/dataModel"
import {  useQuery } from "react-query"

export const useModelFloors = (modelId: Id<'models'>) => {
    return useQuery(
        [QUERY_KEYWORDS.FLOORS, modelId], 
        async () => {
            if (!modelId) return null

            return await getModelFloors({ modelId })
        }
    )
}