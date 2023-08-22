
import { AccessibilityIcon } from "@/components/AccessibilityIcon";
import { useModelFloors } from "@/hooks/useModelFloors";
import { useTargetModel } from "@/hooks/useTargetModel";
import { FloorsList } from "@/modules/FloorsList";
import { Id } from "@convex/_generated/dataModel";
import { useParams } from "react-router-dom"

const ModelPage = () => {
    const { modelId } = useParams();
    const { data: floors } = useModelFloors(modelId as Id<'models'>)
    const { data: model, isLoading } = useTargetModel(modelId as Id<'models'>)
   
    console.log(floors)

    return (
        <div className="container h-full py-12">
            <div className="w-1/3 gap-5 flex flex-col justify-between h-full">
                <div className="flex overflow-hidden rounded-sm ">
                    <div className="bg-base-200 w-2/3 p-5">
                        <h2 className="text-2xl text-accent">{model?.name}</h2>
                            
                        <p className="text-sm mt-2 opacity-40 text-white">{model?.address}</p>
                    </div>

                    <div className="bg-base-300 w-1/3 p-5 flex items-center justify-center">
                        <AccessibilityIcon isPrivate={!!model?.private} size="2rem" className="text-accent" />
                    </div>
                </div>

                <div className="flex-1 h-full">
                    <FloorsList floors={floors ?? []} isLoading={isLoading} itemOptions={{ delete: true, edit: true }} />
                </div>  
            </div>
        </div>
    )
}

export default ModelPage