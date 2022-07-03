import React from 'react';
import HeroCtaApp from 'components/models/page/heroCtaApp/HeroCtaApp';
import Gallery from 'components/models/page/gallery/Gallery';
import { hasArrayItems } from 'shared/utils/generalUtils/jsUtils/jsUtils';
import EntityGrid from 'components/models/page/entityGrid/EntityGrid';
import EntitySection from 'components/models/page/entitySection/EntitySection';
import HeroCtaEntity from 'components/models/page/heroCtaEntity/HeroCtaEntity';
import { ENTITY_COLLECTION } from 'shared/utils/globalProjectUtils/globalProjectUtils/globalProjectUtils';

export function ComponentChooser({ component, index }: ComponentChooserProps) {
  function renderComponent() {
    switch (component?.type) {
      case 'APP_CTA': {
        const isFirst = index === 0;
        return (
          <HeroCtaApp
            className={!isFirst && 'mt-96'}
            hasPriorityImage={isFirst}
            {...component}
          />
        );
      }
      case 'IMAGE_LINKS': {
        return (
          <Gallery
            className={'container mt-40'}
            classNamesImgContainer={'h-108 md:h-62'}
            {...component}
          />
        );
      }
      case 'ENTITY_COLLECTION': {
        return (
          <EntitySection
            className={'container mt-96'}
            {...component}
            {...{ entities: ENTITY_COLLECTION.entities }}
          />
        );
      }
      case 'CTA': {
        return <HeroCtaEntity className={'mt-96'} {...component} />;
      }
      case 'ENTITY_GRID': {
        return <EntityGrid className={'container mt-96'} {...component} />;
      }
      default: {
        return null;
      }
    }
  }

  return renderComponent();
}

interface ComponentChooserProps {
  index: number;
  component?: any;
}

function ComponentListing({ components }: ComponentListingProps) {
  if (!hasArrayItems(components)) return null;

  return components?.map((component, index) => {
    return <ComponentChooser key={index} index={index} component={component} />;
  });
}

interface ComponentListingProps {
  components?: object[];
}

export default ComponentListing;
