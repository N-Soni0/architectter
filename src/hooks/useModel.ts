import { useTargetModelStore } from "@/store/targetModelStore/useTargetModelStore";
import { Id } from "@convex/_generated/dataModel";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export const useModel = () => {
    const { modelId }: { modelId?: Id<'models'> } = useParams();
    const [model, setModel] = useState<Maybe<ModelDoc>>(null);
    const fetchModel = useTargetModelStore(state => state.fetchModel);
    const isLoading = useTargetModelStore(state => state.isLoading);
    const cachedModel = useTargetModelStore(state => state.cached);
    const cacheModel = useTargetModelStore(state => state.cache);

    useEffect(() => {
        if (modelId !== cachedModel?._id) return;

        setModel(cachedModel)
    }, [modelId])

    useEffect(() => {
        (async () => {
            if (!modelId) return;
    
            const model = await fetchModel(modelId)
            if (!model) return;

            setModel(model)
            cacheModel(model);
        })()
    }, [modelId])

    return { model, isLoading };
}