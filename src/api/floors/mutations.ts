import { convex } from "@/main";
import { api } from "@convex/_generated/api";
import { Id } from "@convex/_generated/dataModel";


export async function createFloor(args: Pick<FloorDoc, 'height' | 'shape' | 'model'>) {
    const newFloorId = await convex.mutation(api.floors.mutations.createFloor, args);

    return newFloorId;
}

export async function updateFloor(args: { floorId: Id<'floors'>, floorData: Pick<FloorDoc, 'height' | 'shape'>}) {
    await convex.mutation(api.floors.mutations.updateFloor, { floorId: args.floorId, ...args.floorData });
}

export async function deleteFloor(args: { floorId: Id<'floors'>}) {
    await convex.mutation(api.floors.mutations.deleteFloor, args)
}