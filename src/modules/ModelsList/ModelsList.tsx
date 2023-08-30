import ModelsListItem from "./components/ModelListItem";
import SkeletonModelListItem from "./components/SkeletonModelListItem";
import CreateModelButton from "./components/CreateModelButton";
import EmptyListItem from "./components/EmptyListItem";

interface ModelsListProps {
    models: ModelDoc[];
    onModelClick?: (model: ModelDoc) => void;
    isLoading?: boolean;
}


const ModelsList: React.FC<ModelsListProps> = ({ models, isLoading, onModelClick }) => {
    if (isLoading) {
            return (
                <ul className="grid grid-cols-3 gap-3 w-fit mx-auto mt-5">
                    {Array.from({ length: 7 }).map((_, index) => (
                        <SkeletonModelListItem key={index} />
                    ))}
                </ul>
            )
    }

    return (
        <ul className="grid grid-cols-3 gap-3 w-fit mx-auto mt-5">
            <CreateModelButton />

            {models.length ? (
                models.map((model) => (
                    <ModelsListItem model={model} onClick={onModelClick} key={model._id} />
                ))
            ) : (
                <EmptyListItem />
            )} 
        </ul>
    )
}

export default ModelsList