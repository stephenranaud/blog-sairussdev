import type { PostInterface } from "@models/Post";

import "../../styles/components/_CardArticle.scss";

import Button from "./Button/Button";
import MetricPost from "./Metrics/MetricPost";

type Props = {
  post: PostInterface;
};

export default function CardArticle({ post }: Props) {
  return (
    <article className="card-post">
      <div className="card-post__heading">
        <img
          src={post.heroImage.url}
          width={350 * 2}
          alt={post.heroImage.alt}
        />
      </div>
      <div className="card-post__body">
        <h3>{post.title}</h3>
        <div className="card-post__category">
          <span className="label-category">{post.category}</span>
        </div>

        <p>{post.description}</p>

        <div className="card-post__metrics">
          <MetricPost metrics={post.metrics} />
          <a href={`/posts/${post.slug}`}>
            <Button className={"btn-primary"}>Lire</Button>
          </a>
        </div>
      </div>
    </article>
  );
}
