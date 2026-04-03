import { Router } from "express";
import { type AddonInterface } from "@stremio-addon/sdk";
export type Options = {
  cacheMaxAge?: number;
};
export declare function getRouter(
  addonInterface: AddonInterface,
  options?: Options,
): Router;
//# sourceMappingURL=router.d.ts.map
