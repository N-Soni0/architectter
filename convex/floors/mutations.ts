import { v } from "convex/values";
import { mutation } from "../_generated/server";
import { floorsTable } from "../tables/floors";


export const createFloor = mutation({
    args: floorsTable,
    handler: async (ctx, args) => {
        const newFloorId = await ctx.db.insert('floors', args);

        return newFloorId
    }
})

const { height, shape } = floorsTable; 
export const updateFloor = mutation({
    args: { floorId: v.id('floors'), height, shape },
    handler: async (ctx, args) => {
        const { floorId, ...floorData } = args;

        await ctx.db.patch(floorId, floorData);
    }
})

export const deleteFloor = mutation({
    args: { floorId: v.id('floors') },
    handler: async (ctx, args) => {
        await ctx.db.delete(args.floorId);
    }
})