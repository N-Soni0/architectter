import { useNavigate, useParams } from "react-router-dom"
import FloorCreateForm from "./components/FloorCreateForm"
import { createFloor } from "@/api/floors/mutations";
import { Id } from "@convex/_generated/dataModel";
import { useMutation, useQueryClient } from "react-query";
import { QUERY_KEYWORDS } from "@/constants/queryKeywords";

const CreateFloorPage = () => {
  const navigate = useNavigate();
  const { modelId } = useParams();
	const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(createFloor, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYWORDS.FLOORS, modelId]);
    }
  })

  return (
    <div className="container w-full h-full flex items-start justify-center">
      <FloorCreateForm onSubmit ={async (floor) => {
        if (!modelId) return;

        await mutateAsync({ ...floor, model: modelId as Id<'models'> })
        navigate(`/model/${modelId}`);
      }} />
    </div>
  )
}

export default CreateFloorPage