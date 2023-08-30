import { defineSchema, defineTable } from 'convex/server'
import { modelsTable } from "./tables/models";
import { floorsTable } from "./tables/floors";
import { usersTable } from "./tables/users";

export default defineSchema(
    {
        models: defineTable(modelsTable),
        floors: defineTable(floorsTable),
        users: defineTable(usersTable)
    }, 
    {
        schemaValidation: true
    }
)