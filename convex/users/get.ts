import { v } from "convex/values";
import { query } from "../_generated/server";

export const getUserByEmail = query({
    args: { email: v.string() },
    handler: async (ctx, args) => {
        const user = await ctx.db
            .query('users')
            .filter((q) => q.eq(q.field('email'), args.email))
            .first()

        return user;
    },
});