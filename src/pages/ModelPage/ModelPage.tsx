
import { AccessibilityIcon } from "@/components/AccessibilityIcon";
import { useTargetModel } from "@/hooks/useTargetModel";
import { Id } from "@convex/_generated/dataModel";
import { useParams } from "react-router-dom"

const ModelPage = () => {
    const { modelId } = useParams();

    const { data: model } = useTargetModel(modelId as Id<'models'>)
   

    return (
        <div className="container py-12">
            <div className="flex overflow-hidden rounded-sm w-1/3">
                <div className="bg-base-200 w-2/3 p-5">
                    <h2 className="text-2xl text-accent">{model?.name}</h2>
                        
                    <p className="text-sm mt-2 opacity-40 text-white">{model?.address}</p>
                </div>

                <div className="bg-base-300 w-1/3 p-5 flex items-center justify-center">
                    <AccessibilityIcon isPrivate={!!model?.private} size="2rem" className="text-accent" />
                </div>
            </div>

            <div>
                {/* floors list */}
            </div>
        </div>
    )
}

export default ModelPage