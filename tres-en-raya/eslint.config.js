import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,jsx}"],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    rules: {
      // 'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      // React 17+ / Vite → no hace falta importar React
      "react/react-in-jsx-scope": "off",

      // No quiero prop-types si uso TS o me da igual
      "react/prop-types": "off",

      // Deja de llorar por variables sin usar (solo warnings)
      "no-unused-vars": "warn",

      // JSX relajado
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "off",

      // Hooks sin ser nazi
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "off",
    },
  },
]);
