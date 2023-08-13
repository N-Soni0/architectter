import { v } from "convex/values";
import { mutation } from "../_generated/server";

export const createUser = mutation({
    args: { email: v.string(), username: v.string() },
    handler: async (ctx, { email, username }) => {
        const newUserId = await ctx.db.insert('users', { email, username });

        return await ctx.db.get(newUserId);
    },
});