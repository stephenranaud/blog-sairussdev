import type { PostInterface } from "@models/Post";
import CardArticle from "./CardArticle";

import "../../styles/components/_GridCardPosts.scss";

type Props = {
  posts: Array<PostInterface>;
};

export default function GridCardPosts({ posts }: Props) {
  return (
    <div className="grid-card-posts">
      {posts.map((post) => (
        <CardArticle key={post.slug} post={post} />
      ))}
    </div>
  );
}
