import { Article, Articles, Tag } from "@/types/types";

export const createArticle = (
  title: string,
  tags: Tag[],
  component: () => React.ReactNode,
): Article => {
  const uniqueTags = new Set<Tag>();
  if (tags.length === 0) {
    throw new Error(`Trying to add article without tags -> [${tags}]`);
  }
  tags.forEach((tag) => {
    if (uniqueTags.has(tag)) {
      throw new Error(`Trying to add article without tags -> [${tags}]`);
    }
    uniqueTags.add(tag);
  });

  return {
    title,
    tags: uniqueTags,
    component,
  };
};

const articlesStore: Articles = {};
export const articles: Readonly<Articles> = articlesStore;

export const addArticle = (article: Article) => {
  articlesStore[article.title] = article;
};
