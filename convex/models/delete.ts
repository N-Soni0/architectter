import { v } from "convex/values";
import { mutation } from "../_generated/server";

export const deleteModelById = mutation({
	args: {
		id: v.id('models')
	},
	handler: async (ctx, args) => {
		await ctx.db.delete(args.id)
	},
});