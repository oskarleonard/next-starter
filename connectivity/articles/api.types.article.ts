export type ArticlesResponse = { articles: ArticleResponse[] };
export type ArticleResponse = { article: Article };

export type Article = {
  author: any;
  category: any;
  commercialContentType: string;
  components: any;
  contentClassification: string;
  dates: any;
  header: ArticleHeader;
  id: number;
  preamble: string;
  restriction: 'FREE' | 'LOGIN' | 'PAID';
  seoOverrides: any;
  slug: string;
  story: any;
  tags: any;
  title: string;
};

type ArticleHeader = {
  caption: string | null;
  color: string | null;
  image: Image;
  opacity: number;
  showId: string | null;
  type: string;
  video: any | null;
  videoAutoplay: boolean | null;
  videoUrl: string | null;
};

export type Image = {
  alt: string;
  mime: string;
  original: any;
  crop11: any;
  crop23: any;
  crop43: any;
  crop34: any;
  crop169: any;
  crop916: any;
  breakpoints: any;
};
