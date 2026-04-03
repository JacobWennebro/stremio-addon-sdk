import {
  AddonBuilder as BaseAddonBuilder,
  type AddonInterface,
  type Manifest,
} from "@stremio-addon/sdk";
export declare class AddonBuilder extends BaseAddonBuilder {
  constructor(manifest: Manifest);
  private validate;
  getInterface(): AddonInterface;
}
//# sourceMappingURL=builder.d.ts.map
