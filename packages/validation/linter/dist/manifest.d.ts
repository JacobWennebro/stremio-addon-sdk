import type { Manifest } from "@stremio-addon/sdk";
export declare const manifestSchema: {
  "~standard": {
    version: 1;
    vendor: string;
    validate: (input: unknown) =>
      | {
          issues: Error[];
          value?: undefined;
        }
      | {
          value: Manifest;
          issues?: undefined;
        };
  };
};
//# sourceMappingURL=manifest.d.ts.map
