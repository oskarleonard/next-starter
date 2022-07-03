import React from 'react';
import classNames from 'classnames';
import RichText from 'components/atoms/richText/RichText';
import Media from 'components/models/page/media/Media';
import Image from 'components/atoms/image/Image';
import Slider from 'components/molecules/slider/Slider';
import { hasArrayItems } from 'shared/utils/generalUtils/jsUtils/jsUtils';

export function ArticleComponentChooser({ component }) {
  function renderComponent() {
    switch (component?.type) {
      case 'RICH_TEXT': {
        return <RichText className={'container sm:w-592'} {...component} />;
      }
      case 'MEDIA': {
        return <Media {...component} />;
      }
      default: {
        return null;
      }
    }
  }

  return renderComponent();
}

export default function ArticleComponentListing({ components }) {
  if (!hasArrayItems(components)) return null;

  return components?.map((component, index) => {
    return <ArticleComponentChooser key={index} component={component} />;
  });
}

function SliderWithTitle({ className, title, entities }) {
  function getSliderItems() {
    return entities.map((item, index) => {
      const { title, image } = item;
      return (
        <div key={index}>
          {title && <h4>{title}</h4>}
          {image && (
            <div>
              <Image
                alt="entity"
                src={image?.small?.url}
                layout="responsive"
                width={image?.small?.width}
                height={image?.small?.height}
              />
            </div>
          )}
        </div>
      );
    });
  }

  return (
    <div
      className={classNames(
        className,
        'max-w-2xl m-auto p-4 bg-amber-200 mt-16'
      )}
    >
      <h2>{title}</h2>
      <Slider
        classNameSlide="p-4"
        Items={getSliderItems()}
        threshold={0.6}
        renderBelow={({ onNext, onPrev }) => {
          return (
            <>
              <button onClick={onNext}>next</button>
              <button onClick={onPrev}>prev</button>
            </>
          );
        }}
      />
    </div>
  );
}
