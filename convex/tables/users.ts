import { v } from "convex/values";

export const usersTable = {
    username: v.string(),
    email: v.string(),
    avatar: v.optional(v.string()),
}