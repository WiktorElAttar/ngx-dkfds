// @ts-check
import { config } from "typescript-eslint";
import rootConfig from "../../eslint.config.js";

export default config(
  ...rootConfig,
  {
    files: ["**/*.ts"],
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      "no-restricted-imports": [
        "error",
        {
          "patterns": [{
            "group": ["**/ngx-dkfds/**"],
            "message": "Use import from 'ngx-dkfds' instead of using the file path."
          }]
        }
      ]
    },
  },
  {
    files: ["**/*.html"],
    rules: {},
  }
);
