import { convex } from "@/main";
import { ModelSchemaType } from "@/modules/ModelForm";
import { api } from "@convex/_generated/api";
import { Id } from "@convex/_generated/dataModel";


export async function deleteModel(modelId: Id<'models'>) {
    await convex.mutation(api.models.delete.deleteModelById, { id: modelId });
}

export async function createModel(data: {creator: Id<'users'>, modelData: ModelSchemaType}) {
    const newModelId = await convex.mutation(api.models.post.createModel, { creator: data.creator, ...data.modelData })

    return newModelId;
}

export async function editModel(data: { modelId: Id<'models'>, modelData: ModelSchemaType }) {
	await convex.mutation(api.models.update.updateModel, { modelId: data.modelId, ...data.modelData });
}
