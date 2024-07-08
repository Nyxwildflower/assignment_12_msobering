import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

// const packageJson = import packageJson from "./package.json" assert { type: "json" };

import packageJson from "./package.json" assert { type: "json" };

export default [
  {
    input: "src/index.tsx",
    external: ['react-dom'],
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  {
    input: "dist/esm/types/index.d.tsx",
    output: [{ file: "dist/index.d.tsx", format: "esm" }],
    plugins: [dts()],
  },
];