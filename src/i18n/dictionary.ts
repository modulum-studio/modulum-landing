import { en } from "./en";
import { es } from "./es";
import type { Dictionary, Lang } from "./types";

export type { Dictionary, Lang };
export const dictionaries: Record<Lang, Dictionary> = { en, es };
