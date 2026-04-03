import type { AddonInterface } from "@stremio-addon/sdk";
export type Options = {
  port?: number;
  static?: string;
  cacheMaxAge?: number;
  /**
   * @deprecated use cacheMaxAge instead
   */
  cache?: number;
};
export declare function serveHTTP(
  addonInterface: AddonInterface,
  opts?: Options,
): Promise<unknown>;
//# sourceMappingURL=serve-http.d.ts.map
