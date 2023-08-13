import { mutation, query } from './_generated/server';
import { v } from 'convex/values';

const optionsSchema = v.optional(v.object(
    { 
        onlyPublic: v.optional(v.boolean()) 
    }
));

export const getUserModels = query({
	args: {
		userId: v.id('users'),
		options: optionsSchema,
	},
	handler: async (ctx, args) => {
		const models = await ctx.db
			.query('models')
			.filter((q) => q.eq(q.field('creator'), args.userId))
			.filter((q) => args.options?.onlyPublic ? q.eq(q.field('private'), false) : true)
			.collect();

		return models;
	},
});

export const deleteModel = mutation({
	args: {
		id: v.id('models')
	},
	handler: async (ctx, args) => {
		await ctx.db.delete(args.id)
	},
});
