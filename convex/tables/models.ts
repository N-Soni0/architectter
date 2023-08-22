import { v } from "convex/values";

export const modelsTable = {
    name: v.string(),
    address: v.string(),
    private: v.boolean(),
    creator: v.id('users')  
}