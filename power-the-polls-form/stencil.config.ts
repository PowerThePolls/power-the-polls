import replace from "@rollup/plugin-replace";
import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
   namespace: "power-the-polls-form",
   taskQueue: "async",
   srcDir: "src", // "src" is the default; just here for clarity
   plugins: [
      sass( {
         // scss files will automatically have these added
         injectGlobalPaths: [
            "styles/include/variables.scss",
            "styles/include/mixins.scss",
         ],
      } ),
   ],
   outputTargets: [
      {
         type: "dist",
      },
      {
         type: "dist-custom-elements-bundle",
         dir: "./dist/full",
      },
      {
         // Generates readme files in each component dir. Nice for GitHub.
         type: "docs-readme",
         footer: "", // supports markdown
      },
      {
         // web server for development to test the component
         type: "www",
         dir: "www",
         serviceWorker: null,
      },
   ],
};
