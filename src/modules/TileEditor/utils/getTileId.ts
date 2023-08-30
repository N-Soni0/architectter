import { ITile } from "@/types/tile";

export function getTileId({ coordinates }: ITile) {
    return `${coordinates.x}:${coordinates.y}`
}