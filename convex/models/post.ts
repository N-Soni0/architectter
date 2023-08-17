import { v } from "convex/values";
import { mutation } from "../_generated/server";

export const createModel = mutation({
	args: {
		name: v.string(),
        address: v.string(),
        private: v.boolean(),
        creator: v.id('users')
	},
	handler: async (ctx, args) => {
		const newModelId = await ctx.db.insert('models', {
           ...args
        });

        const newModel = await ctx.db.get(newModelId);

        return newModel;
	},
});