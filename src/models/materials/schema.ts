import { z } from "zod";

const materialSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export const materialArraySchema = z.array(materialSchema);
