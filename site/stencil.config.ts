import replace from "@rollup/plugin-replace";
import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";
declare var process: any;
declare var require: (pkg: string) => any;

require("dotenv").config();

// see: https://stenciljs.com/docs/config

export const config: Config = {
   globalStyle: "styles/main.scss",
   globalScript: "src/app-init.ts",
   srcDir: "src", // "src" is the default; just here for clarity
   sourceMap: true,
   plugins: [
      replace({
         exclude: "node_modules/**",
         values: {},
      }),
      sass({
         // scss files will automatically have these added
         injectGlobalPaths: [
            "styles/include/variables.scss",
            "styles/include/mixins.scss",
         ],
      }),
   ],
   outputTargets: [
      {
         type: "www",
         dir: "../dist/www", // default output dir is ./www
         copy: [
            // copy contents of ./public dir to output
            // (src is relative to the root srcDir, dest is relative to this output's dir)
            { src: "../public", dest: "." },
         ],
         baseUrl: "https://www.powerthepolls.org/",
      },
      {
         // Generates readme files in each component dir. Nice for GitHub.
         type: "docs-readme",
         footer: "", // supports markdown
      },
   ],
   // support IE11 and Safari
   buildEs5: "prod",
   extras: {
      cssVarsShim: true,
      dynamicImportShim: true,
      safari10: true,
      shadowDomShim: true,
   },
};
