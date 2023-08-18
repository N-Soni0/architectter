import { convex } from "@/main";
import { ModelSchemaType } from "@/modules/ModelForm";
import { api } from "@convex/_generated/api";
import { Id } from "@convex/_generated/dataModel";

export async function createModel(creator: Id<'users'>, modelData: ModelSchemaType) {
    const newModel = await convex.mutation(api.models.post.createModel, { creator, ...modelData })

    return newModel;
}