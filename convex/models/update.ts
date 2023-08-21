import { v } from 'convex/values';
import { mutation } from '../_generated/server';

export const updateModel = mutation({
	args: {
		modelId: v.id('models'),

		name: v.string(),
		address: v.string(),
		private: v.boolean(),
	},
	handler: async (ctx, args) => {
		await ctx.db.patch(args.modelId, {
			address: args.address,
			name: args.name,
			private: args.private,
		});
	},
});
