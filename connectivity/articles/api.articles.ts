import httpRequest from 'connectivity/httpRequest';
import {
  PUBLIC_API,
  getBaseRequestConfig,
} from 'connectivity/baseRequestConfig';
import {
  ArticleResponse,
  ArticlesResponse,
} from 'connectivity/articles/api.types.article';

export function fetchArticles(): Promise<ArticlesResponse> {
  const baseRequestConfig = getBaseRequestConfig();
  const url = `${PUBLIC_API}/articles`;

  const requestConfig = Object.assign({}, baseRequestConfig, {
    url: url,
  });

  return httpRequest(requestConfig);
}

export function fetchArticle(
  articleId: string,
  previewDate?: string,
  previewKey?: string,
  accessToken?: string
): Promise<ArticleResponse> {
  const baseRequestConfig = getBaseRequestConfig({ accessToken });
  const url = `${PUBLIC_API}/articles/${articleId}`;

  const requestConfig = Object.assign({}, baseRequestConfig, {
    url: url,
  });

  return httpRequest(requestConfig);
}
