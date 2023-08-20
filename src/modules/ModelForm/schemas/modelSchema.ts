import { z } from "zod";

type ModelFormData = Pick<ModelDoc, 'address' | 'name' | 'private'>

export const modelSchema: z.ZodType<ModelFormData> = z.object({
    name: z.string().min(2, 'Model name is required'),
    address: z.string().min(5, 'Address is required'),
    private: z.boolean(),
})

export type ModelSchemaType = z.infer<typeof modelSchema>