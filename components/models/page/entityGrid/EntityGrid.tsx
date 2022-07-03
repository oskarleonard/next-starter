import React from 'react';
import classNames from 'classnames';
import Image from 'components/atoms/image/Image';
import Link from 'components/atoms/link/Link';
import { getButtonStyles } from 'components/atoms/button/Button';
import { getEntityUrl } from 'shared/utils/globalProjectUtils/entityUtils/entityUtils';
import styles from './entityGrid.module.css';

function EntityGrid({
  className,
  title,
  classNameTitle,
  link,
  entities,
  allSameColSpan = false,
}: EntityGridProps) {
  return (
    <div className={classNames(className, 'flex', 'flex-col')}>
      {title && (
        <h2
          className={classNames(
            classNameTitle ? classNameTitle : 'font-bold text-40 mb-44'
          )}
        >
          {title}
        </h2>
      )}
      <div className="grid grid-cols-6 gap-16 lg:grid-cols-12 lg:gap-32">
        {entities?.map((entity, index) => {
          const isFirst = !allSameColSpan && index === 0;

          return (
            <React.Fragment key={index}>
              <EntityCard
                className={classNames('md:hidden col-span-6 lg:col-span-3')}
                isCoverImage={false}
                entity={entity}
              />
              <EntityCard
                className={classNames(
                  'hidden md:flex',
                  isFirst ? 'col-span-6 text-white' : 'col-span-6 lg:col-span-3'
                )}
                isCoverImage={isFirst}
                entity={entity}
              />
            </React.Fragment>
          );
        })}
      </div>
      {link?.url && (
        <Link
          className={classNames(getButtonStyles(), 'mt-72 mx-auto')}
          href={link?.url}
        >
          {link?.text}
        </Link>
      )}
    </div>
  );
}

interface EntityGridProps {
  className?: string;
  title?: string;
  classNameTitle?: string;
  link?: string;
  allSameColSpan?: boolean;
  entities?: object[];
}

export default EntityGrid;

function EntityCard({ className, entity = {}, isCoverImage }) {
  const { title, description, image, publishDate } = entity;

  return (
    <Link
      className={classNames(
        className,
        'flex flex-col rounded-8 overflow-hidden relative border border-mercury h-[348px] sm:h-[408px] hover:shadow-md'
      )}
      href={getEntityUrl(entity)}
    >
      <EntityImage
        backgroundImage={image?.medium?.url}
        isCoverImage={isCoverImage}
      />
      <div
        className={classNames(
          'flex flex-col px-24 pt-24 pb-16 z-10',
          isCoverImage && 'mt-auto',
          !isCoverImage && 'h-full'
        )}
      >
        <h3 className={'font-bold mb-12 text-20 md:text-24 ellipsifyTwoLines'}>
          {title}
        </h3>
        <div className={'mt-auto'}>
          {description && <p className={'text-14 md:text-16'}>{description}</p>}
          {publishDate && (
            <span className={'text-12 md:text-16'}>{publishDate}</span>
          )}
        </div>
      </div>
    </Link>
  );
}

function EntityImage({ backgroundImage, isCoverImage }) {
  if (isCoverImage) {
    return (
      <Image
        alt="entity"
        src={backgroundImage}
        layout="fill"
        objectFit="cover"
      />
    );
  } else {
    return (
      <div className={'h-[200px] min-h-[200px] w-full h-full relative'}>
        <Image
          alt="entity"
          src={backgroundImage}
          layout="fill"
          objectFit="cover"
        />
      </div>
    );
  }
}
