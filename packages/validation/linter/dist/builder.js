import { AddonBuilder as BaseAddonBuilder } from "@stremio-addon/sdk";
import { manifestSchema } from "./manifest.js";
export class AddonBuilder extends BaseAddonBuilder {
  constructor(manifest) {
    super(manifest, manifestSchema);
  }
  validate() {
    const errors = [];
    const handlersInManifest = [];
    if (this.manifest.catalogs.length > 0) {
      handlersInManifest.push("catalog");
    }
    this.manifest.resources.forEach((r) =>
      handlersInManifest.push(typeof r === "string" ? r : r.name),
    );
    const handlersDefined = Array.from(this.handlers.keys());
    handlersDefined.forEach((defined) => {
      if (!handlersInManifest.includes(defined)) {
        if (defined == "catalog") {
          errors.push(
            new Error(
              "manifest.catalogs is empty, catalog handler will never be called",
            ),
          );
        } else {
          errors.push(
            new Error("manifest.resources does not contain: " + defined),
          );
        }
      }
    });
    handlersInManifest.forEach((defined) => {
      if (!handlersDefined.includes(defined)) {
        const capitalized = defined[0].toUpperCase() + defined.slice(1);
        errors.push(
          new Error(
            `manifest definition requires handler for ${defined},` +
              ` but it is not provided (use .define${capitalized}Handler())`,
          ),
        );
      }
    });
    return errors;
  }
  getInterface() {
    const errors = this.validate();
    if (errors.length) {
      throw errors[0];
    }
    return super.getInterface();
  }
}
//# sourceMappingURL=builder.js.map
