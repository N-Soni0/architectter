import { v } from "convex/values";
import { defineSchema, defineTable } from 'convex/server'

export default defineSchema({
    models: defineTable({
        name: v.string(),
        address: v.optional(v.string()),
        private: v.boolean(),
    }),

    floors: defineTable({
        modelId: v.id('models'),
        height: v.number(),
        shape: v.array(
            v.union(
                v.object({
                    connection: v.literal("STRAIGHT"),
                    coordinates: v.object({
                        x: v.number(),
                        y: v.number(),
                    }),
                }),
                v.object({
                    connection: v.literal("ROUNDED"),
                    coordinates: v.object({
                        x: v.number(),
                        y: v.number(),
                    }),
                    convex: v.optional(v.boolean()),
                    radius: v.number(),
                })
            )
        )
    }),
}, {
    schemaValidation: true
})