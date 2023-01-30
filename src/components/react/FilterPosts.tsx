import { useEffect, useState } from "react";

import type { PostInterface } from "@models/Post";
import { categories } from "config";

import "../../styles/components/_FilterPosts.scss";

type Props = {
  posts: Array<PostInterface>;
};

type PropsCategoryItem = {
  className?: string;
  category: string;
};

function CategoryItem({ category, className }: PropsCategoryItem) {
  return (
    <span className={`filter-posts-tags__item ${className ? className : ""}`}>
      {category}
    </span>
  );
}

export default function FilterPosts({ posts }: Props) {
  console.log(posts);
  // const [isMounted, setIsMounted] = useState(false);
  const [activeTag, setActiveTag] = useState<Element | null>(null);

  useEffect(() => {
    const current = document.querySelector(".filter-posts-tags__item.active");

    if (activeTag) {
      if (!activeTag.classList.contains("active")) {
        current?.classList.remove("active");
        activeTag.classList.add("active");
      }

      setActiveTag(activeTag);
    }
  }, [activeTag]);

  // useEffect(() => setIsMounted(true), []);

  const handleClick = (e: React.MouseEvent) => {
    setActiveTag(e.target);
  };

  return (
    <div className="filter-posts">
      <div className="filter-posts-tags" onClick={handleClick}>
        {["all", ...categories].map((category) => {
          if (category === "all") {
            return (
              <CategoryItem
                key={category}
                className="active"
                category={category}
              />
            );
          }
          return <CategoryItem key={category} category={category} />;
        })}
      </div>
    </div>
  );
}
