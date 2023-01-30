import type { PostInterface } from "@models/Post";
import CardArticle from "./CardArticle";

import { useStore } from "@nanostores/react";
import { categoriesStore, filterPostOfStore } from "../../store/postsStore";

import "../../styles/components/_GridCardPosts.scss";

type Props = {
  posts?: Array<PostInterface>;
};

export default function GridCardPosts({ posts }: Props) {
  const $category = useStore(categoriesStore);

  const filteredPosts = filterPostOfStore($category, posts);

  return (
    <div className="grid-card-posts">
      {filteredPosts?.map((post) => (
        <CardArticle key={post.slug} post={post} />
      ))}
    </div>
  );
}
