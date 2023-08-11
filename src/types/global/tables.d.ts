import { Doc } from '../../../convex/_generated/dataModel';

export {}

declare global {
    export type ModelDoc = Doc<'models'>;
    export type FloorDoc = Doc<'floors'>;
    export type UserDoc = Doc<'users'>;
}