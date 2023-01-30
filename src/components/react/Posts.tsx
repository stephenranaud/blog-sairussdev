import FilterPosts from "./FilterPosts";
import type { PostInterface } from "@models/Post";

type Props = {
  posts: Array<PostInterface>;
};

export default function Posts({ posts }: Props) {
  return (
    <section className="posts">
      <div className="posts-filter">
        <FilterPosts posts={posts} />
      </div>
      {posts ? (
        <div className="posts-list container">
          <GridCardArticle posts={posts} />
        </div>
      ) : (
        <div>Aucun post</div>
      )}
    </section>
  );
}
