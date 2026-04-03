import { AddonBuilder as BaseAddonBuilder } from "@stremio-addon/sdk";
import type z from "zod/v4";
import { manifestSchema } from "./manifest.js";
export declare class AddonBuilder extends BaseAddonBuilder {
  constructor(manifest: z.infer<typeof manifestSchema>);
}
//# sourceMappingURL=builder.d.ts.map
