export function slug(txt: string) {
  return txt
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/-+$/, "-")
    .replace(/^-+/, "")
    .replace(/--+/g, "-");
}

export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString("fr-Fr", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export type OgarnizeDatasFunction = <T>(
  list: Array<T> | null
) => Array<T> | null;
