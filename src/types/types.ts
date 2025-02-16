export type Article = {
  title: string;
  tags: Set<Tag>;
  component: () => React.ReactNode;
};

export type Articles = {
  [key: string]: Article;
};

export enum Tag {
  GRADLE,
}
