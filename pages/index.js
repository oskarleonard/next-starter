import React from 'react';
import { fetchHome } from 'connectivity/home/api.home';
import ComponentListing from 'components/models/page/componentChooser/ComponentChooser';

const Home = ({ components }) => {
  return (
    <div>
      <ComponentListing components={components} />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  try {
    const data = await fetchHome();
    return {
      props: {
        components: data?.components,
      },
    };
  } catch (error) {
    // TODO: handle different errors, for now return 404 for everything
    return {
      notFound: false,
    };
  }
}
