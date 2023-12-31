import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/types";

export function buildDevSever(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port ?? 3000,
    open: true,
    // якщо роздавати статику через nginx, тоді треба робити проксірування на indexedDB.html 
    historyApiFallback: true,
  }  
}