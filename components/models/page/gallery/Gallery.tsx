import React from 'react';
import classNames from 'classnames';
import Image from 'components/atoms/image/Image';
import styles from './gallery.module.css';

function Gallery({
  className,
  classNamesImgContainer,
  title,
  images,
}: GalleryProps) {
  return (
    <div className={classNames(className)}>
      {title && (
        <h2 className={'text-center text-24 font-bold mb-32'}>{title}</h2>
      )}
      <div
        className={classNames(
          classNamesImgContainer,
          'grid grid-cols-12 gap-28 md:gap-32 imgOptimizeContrast'
        )}
      >
        {images?.map((item) => {
          const imageUrl = item?.image?.large?.url;
          const url = item.url;
          const Wrapper = url ? 'a' : 'div';

          return (
            <Wrapper
              className={'col-span-6 md:col-span-3 relative'}
              key={imageUrl}
              href={url}
            >
              <Image
                src={imageUrl}
                alt="logo"
                layout="fill"
                objectFit="contain"
                sizes="25vw"
              />
            </Wrapper>
          );
        })}
      </div>
    </div>
  );
}

interface GalleryProps {
  className?: string;
  classNamesImgContainer?: string;
  title?: string;
  images?: object[];
  maxHeight: string;
}

export default Gallery;
