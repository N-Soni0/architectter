import {  mutation, query } from './_generated/server';
import { v } from 'convex/values';

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

export const createUser = mutation({
    args: { email: v.string(), username: v.string() },
    handler: async (ctx, { email, username }) => {
        const newUserId = await ctx.db.insert('users', { email, username });

        return await ctx.db.get(newUserId);
    },
});
