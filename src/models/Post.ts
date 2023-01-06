enum Category {
  MOOD_POST = "mood post",
}

export type Metrics = {
  numberViews: number;
  readingTime: number;
  createAt: string;
  updateAt: string | null;
};

export interface PostInterface {
  title: string;
  slug: string;
  category: string;
  description: string;
  heroImage: {
    url: string;
    alt: string;
  };
  tags: string[];
  metrics: Metrics;
  draft: boolean;
}

export function getFirstMoodPost(posts: PostInterface[]) {
  if (posts)
    return posts
      .filter((post) => post.category === Category.MOOD_POST)
      .sort((a, b) => {
        const firstDate = new Date(
          a.metrics.updateAt ? a.metrics.updateAt : a.metrics.createAt
        ).getTime();
        const secondDate = new Date(
          b.metrics.updateAt ? b.metrics.updateAt : b.metrics.createAt
        ).getTime();

        return firstDate - secondDate;
      })[0];
}
