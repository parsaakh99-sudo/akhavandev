import type { ImageMetadata } from "astro";

// Every picture the site uses, looked up by its file name without the extension.
const files = import.meta.glob<{ default: ImageMetadata }>("../assets/{work,pics}/*.{png,jpg}", { eager: true });

export const img = (name?: string) => {
  if (!name) return undefined;
  const hit = Object.entries(files).find(([path]) => path.endsWith(`/${name}.png`) || path.endsWith(`/${name}.jpg`));
  return hit?.[1].default;
};
