import React from 'react';
import classNames from 'classnames';
import {
  fetchArticle,
  fetchArticles,
} from 'connectivity/articles/api.articles';
import MetaTags from 'components/molecules/metaTags/MetaTags';

function ArticlePage({ article }) {
  const { title, coverImage, components, richBody } = article;

  return (
    <div className={classNames('pb-96')}>
      <MetaTags
        title={title}
        type={'article'}
        imageUrl={coverImage?.thumbnail?.url}
      />
    </div>
  );
}

export default ArticlePage;

export async function getStaticPaths() {
  const data = await fetchArticles();

  const paths = data.articles.map((article) => {
    const path = article.id;

    return {
      params: { articleId: path },
    };
  });

  return { paths: paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const articleId = params.articleId;

  try {
    const data = await fetchArticle(articleId);
    return {
      props: {
        article: data?.article,
      },
    };
  } catch (error) {
    // TODO: handle different errors, for now return 404 for everything
    return {
      notFound: false,
    };
  }
}
