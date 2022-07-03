import React, { useState } from 'react';
import classNames from 'classnames';
import Image from 'components/atoms/image/Image';
import EntityLink from 'components/models/entityLink/EntityLink';
import { getDD_MMM_DD_MMM } from 'shared/utils/globalProjectUtils/dateUtils/dateUtils';

function EntitySection({
  className,
  title,
  description,
  link,
  entities,
}: EntitySectionProps) {
  const showContentCol = title || description || link;

  return (
    <div
      className={classNames(
        className,
        'grid grid-cols-6 gap-8 md:grid-cols-12 lg:gap-32'
      )}
    >
      {showContentCol && (
        <EntityContent
          className={classNames(
            'col-span-6',
            'md:col-span-3 md:items-baseline md:self-center'
          )}
          title={title}
          description={description}
          link={link}
        />
      )}
      <div
        className={
          'col-span-6 md:col-span-9 grid grid-cols-3 md:grid-cols-9 gap-8 lg:gap-32'
        }
      >
        {entities.map((item, index) => {
          return (
            <ArticlePortraitCard
              key={index}
              className={'col-span-3'}
              entity={item}
            />
          );
        })}
      </div>
    </div>
  );
}

interface EntitySectionProps {
  className?: string;
  title?: string;
  description?: string;
  link?: object;
  entities: object[];
}

export default EntitySection;

function EntityContent({ className, title, description, link }: any) {
  return (
    <div className={classNames(className, 'flex flex-col items-center')}>
      {title && (
        <h2 className={classNames('text-40', 'font-bold', 'mb-24')}>{title}</h2>
      )}
      {description && (
        <p className={classNames('text-18', 'mb-40')}>{description}</p>
      )}
      {link?.url && <EntityLink link={link} />}
    </div>
  );
}

function ArticlePortraitCard({ className, entity = {} }: any) {
  const [isHover, setIsHover] = useState(false);
  const {
    title,
    image,
    description,
    startDate,
    endDate,
    locationLabel,
    readMoreLink,
    pdfUrl,
  } = entity;

  return (
    <div
      className={classNames(
        className,
        'relative h-360 flex flex-col rounded-8 overflow-hidden border border-mercury hover:shadow-md'
      )}
    >
      <EntityImage backgroundImage={image?.medium?.url} isCoverImage={true} />
      <div className={classNames('bg-white px-24 pt-24 pb-16 z-10 mt-auto')}>
        {title && <h3 className={'font-bold text-20 md:text-24'}>{title}</h3>}
        {startDate && endDate && (
          <span className={'text-14'}>
            {getDD_MMM_DD_MMM(startDate, endDate)}
            {locationLabel && `, ${locationLabel}`}
          </span>
        )}
        {description && <span className={'md:text-16'}>{description}</span>}

        <div className={classNames('mt-12 flex flex-col text-16 text-blue')}>
          {readMoreLink?.url && (
            <a
              href={readMoreLink.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              {readMoreLink?.text}
            </a>
          )}
          {pdfUrl && (
            <a
              className={'mt-4'}
              href={pdfUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              Ladda ner prospekt
            </a>
          )}
        </div>
      </div>
    </div>
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
      <div className={'w-full h-full relative'}>
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
