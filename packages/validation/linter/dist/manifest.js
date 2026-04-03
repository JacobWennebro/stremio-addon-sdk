import { lintManifest } from "stremio-addon-linter";
export const manifestSchema = {
  "~standard": {
    version: 1,
    vendor: "stremio-addon-linter",
    validate: (input) => {
      const result = lintManifest(input);
      if (result.errors.length > 0) {
        return {
          issues: result.errors,
        };
      }
      if (result.warnings.length) {
        result.warnings.forEach((warning) => {
          console.log("WARNING:", warning.message);
        });
      }
      if (JSON.stringify(input).length > 8192) {
        return {
          issues: [
            new Error(
              "manifest size exceeds 8kb, which is incompatible with addonCollection API",
            ),
          ],
        };
      }
      return {
        value: input,
      };
    },
  },
};
//# sourceMappingURL=manifest.js.map
