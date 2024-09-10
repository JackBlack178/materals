import { z } from "zod";

const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  code: z.string().nullable(),
  price: z.object({
    old_price: z.number().nullable(),
    current_price: z.number(),
  }),
  image: z.object({
    url: z.string(),
  }),
  material: z.number(),
});

export const productArraySchema = z.array(productSchema);
