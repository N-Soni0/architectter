import { v } from "convex/values";
import { query } from "../_generated/server";

export const getModelFloors = query({
    args: {
        modelId: v.id('models')
    },
    handler: async (ctx, args) => {
        const floors = await ctx.db
            .query('floors')
            .filter(q => q.eq(q.field('model'), args.modelId))
            .collect()

        return floors;
    }
})