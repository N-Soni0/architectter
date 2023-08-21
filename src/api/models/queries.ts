import { convex } from "@/main";
import { api } from "@convex/_generated/api";
import { Id } from "@convex/_generated/dataModel";

export const getUserModels = async (userId: Id<'users'>) => {
    const userModels = await convex.query(api.models.get.getAllUserModels, { userId });

    return userModels;
}

export const getModel = async (modelId: Id<'models'>) => {
    const model = await convex.query(api.models.get.getModel, { modelId });

    return model;
}
