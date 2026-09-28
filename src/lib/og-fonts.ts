import { readFile } from "node:fs/promises";
import { join } from "node:path";

const dir = join(process.cwd(), "node_modules/@fontsource/inter/files");

export async function loadOgFonts() {
  const [medium, bold] = await Promise.all([
    readFile(join(dir, "inter-latin-500-normal.woff")),
    readFile(join(dir, "inter-latin-700-normal.woff")),
  ]);
  return [
    { name: "Inter", data: medium, weight: 500 as const, style: "normal" as const },
    { name: "Inter", data: bold, weight: 700 as const, style: "normal" as const },
  ];
}
