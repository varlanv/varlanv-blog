import { articles } from "@/components/feed/Articles";
import { Tag } from "@/types/types";

export const Feed = ({ search, tags }: { search?: string; tags?: Tag[] }) => {
  console.log(articles);
  return Object.keys(articles)
    .map((key) => articles[key])
    .filter((article) => {
      if (!tags || tags.length === 0) {
        return true;
      } else {
        for (const tag of tags) {
          if (article.tags.has(tag)) {
            return true;
          }
        }
      }
      return false;
    })
    .map((article) => article.component());
};
