// @ts-check
import { config, configs as tsConfigs } from "typescript-eslint";
import { configs as angularConfigs, processInlineTemplates } from "angular-eslint";

export default config(
  {
    files: ["**/*.ts"],
    extends: [
      ...tsConfigs.strictTypeChecked,
      ...tsConfigs.stylisticTypeChecked,
      {
        languageOptions: {
          parserOptions: {
            projectService: true,
            tsconfigRootDir: import.meta.dirname,
          },
        },
      },
      ...angularConfigs.tsRecommended,
    ],
    processor: processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "fds",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "fds",
          style: "kebab-case",
        },
      ],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angularConfigs.templateRecommended,
      ...angularConfigs.templateAccessibility,
    ],
    rules: {},
  }
);
