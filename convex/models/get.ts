import { v } from "convex/values";
import { query } from "../_generated/server";

export const getAllUserModels = query({
	args: {
		userId: v.id('users'),
	},
	handler: async (ctx, args) => {
		const models = await ctx.db
			.query('models')
			.filter((q) => q.eq(q.field('creator'), args.userId))
			.collect();

		return models;
	},
});