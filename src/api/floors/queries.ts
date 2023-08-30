import { convex } from "@/main";
import { api } from "@convex/_generated/api";
import { Id } from "@convex/_generated/dataModel";


export const getModelFloors = async (args: { modelId: Id<'models'> }) => {
    const floors = await convex.query(api.floors.queries.getModelFloors, args);

    return floors;
}

export const getFloor = async (args: { floorId: Id<'floors'> }) => {
    const floor = await convex.query(api.floors.queries.getFloor, args);

    return floor;
}