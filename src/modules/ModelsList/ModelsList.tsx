import ModelsListItem from "./components/ModelListItem";
import SkeletonModelListItem from "./components/SkeletonModelListItem";
import CreateModelButton from "./components/CreateModelButton";
import EmptyListItem from "./components/EmptyListItem";

interface ModelsListProps {
    models: ModelDoc[];
    isLoading?: boolean;
}


const ModelsList: React.FC<ModelsListProps> = ({ models, isLoading }) => {

    if (isLoading) {
            return (
                <ul className="flex gap-4 mt-2 overflow-auto">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <SkeletonModelListItem key={index} />
                    ))}
                </ul>
            )
    }

    return (
        <ul className="flex gap-4 mt-2 overflow-auto h-[7rem]">
            <CreateModelButton />

            {}

            {models.length ? (
                models.map((model) => (
                    <ModelsListItem model={model} key={model._id} />
                ))
            ) : (
                <EmptyListItem />
            )} 
        </ul>
    )
}

export default ModelsList