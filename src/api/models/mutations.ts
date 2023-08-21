import { convex } from "@/main";
import { ModelSchemaType } from "@/modules/ModelForm";
import { api } from "@convex/_generated/api";
import { Id } from "@convex/_generated/dataModel";


export async function deleteModel(modelId: Id<'models'>) {
    await convex.mutation(api.models.delete.deleteModelById, { id: modelId });
}

export async function createModel(creator: Id<'users'>, modelData: ModelSchemaType) {
    const newModelId = await convex.mutation(api.models.post.createModel, { creator, ...modelData })

    return newModelId;
}

export async function editModel(modelId: Id<'models'>, modelData: ModelSchemaType) {
	await convex.mutation(api.models.update.updateModel, { modelId, ...modelData });
}
