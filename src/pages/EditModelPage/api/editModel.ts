import { convex } from '@/main';
import { ModelSchemaType } from '@/modules/ModelForm';
import { api } from '@convex/_generated/api';
import { Id } from '@convex/_generated/dataModel';

export async function editModel(modelId: Id<'models'>, modelData: ModelSchemaType) {
	return await convex.mutation(api.models.update.updateModel, { modelId, ...modelData });
}
