import { AddonBuilder as BaseAddonBuilder } from "@stremio-addon/sdk";
import { manifestSchema } from "./manifest.js";
export class AddonBuilder extends BaseAddonBuilder {
  constructor(manifest) {
    super(manifest, manifestSchema);
  }
}
//# sourceMappingURL=builder.js.map
