import ModelsListItem from "./ModelsListItem";

interface ModelsListProps {
    models: ModelDoc[];
    isLoading?: number;
}

const ModelsList: React.FC<ModelsListProps> = ({ models, isLoading }) => {

    if (isLoading) {
        <ul>
            <li>
                Loading card
            </li>
        </ul>
    }

    return (
        <ul className="flex gap-4 mt-2 overflow-auto">
            {models.map((model) => (
                <ModelsListItem model={model} key={model._id} />
            ))}
        </ul>
    )
}

export default ModelsList;