import { PostInterface } from "@models/Post";
import { atom } from "nanostores";
import { TypeOfCategory } from "src/utils";

export const categoriesStore = atom<string>("all");

export function filterPostOfStore(
  category: string,
  posts?: Array<PostInterface>
) {
  return posts?.filter((post) => {
    if (category === "all") return post;
    if (post.category === category) return post;
  });
}
