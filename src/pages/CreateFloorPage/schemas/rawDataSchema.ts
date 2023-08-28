import { z } from "zod";

type SchemaFields = Pick<FloorDoc, 'height'>

export const rawDataSchema: z.ZodType<SchemaFields> = z.object({
    height: z.number().positive("Height must be more then 0"),
})

export type RawDataSchemaType = z.infer<typeof rawDataSchema>