import { readFileSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

/**
 * Lee un archivo Markdown y devuelve su contenido como texto.
 * @param filePath Ruta del archivo .md
 * @returns Contenido del archivo como string
 */
export function loadMarkdown(relativePath: string, importMetaUrl: string): string {
  try {
    const callerDir = dirname(fileURLToPath(importMetaUrl));
    const absolutePath = resolve(callerDir, relativePath);
    const contenido = readFileSync(absolutePath, "utf-8");
    return contenido;
  } catch (error) {
    console.error("Error al leer el archivo Markdown:", error);
    return "";
  }
}
