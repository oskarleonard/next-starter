import React from 'react';
import { fetchArticles } from 'connectivity/articles/api.articles';
import EntityGrid from 'components/models/page/entityGrid/EntityGrid';

function ArticlesPage({ articles }) {
  return (
    <div className={'mt-88 container pb-96'}>
      <EntityGrid entities={articles} />
    </div>
  );
}

export default ArticlesPage;

export async function getStaticProps() {
  try {
    const data = await fetchArticles();
    return {
      props: {
        articles: data?.articles,
      },
    };
  } catch (error) {
    // TODO: handle different errors, for now return 404 for everything
    return {
      notFound: false,
    };
  }
}
