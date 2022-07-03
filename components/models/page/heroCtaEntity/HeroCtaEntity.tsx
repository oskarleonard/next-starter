import React from 'react';
import classNames from 'classnames';
import Image from 'components/atoms/image/Image';
import EntityLink from 'components/models/entityLink/EntityLink';
import styles from './heroCtaEntity.module.css';

function HeroCtaEntity({
  className,
  title,
  subtitle,
  description,
  backgroundImage,
  link,
}: HeroCtaEntityProps) {
  return (
    <div
      className={classNames(
        className,
        styles.HeroCtaApp,
        'relative h-[80vh] md:h-[642px]'
      )}
    >
      <Image
        alt="Mountains"
        src={backgroundImage?.large?.url}
        layout="fill"
        objectFit="cover"
      />
      <div
        className={classNames('container relative h-full flex items-center')}
      >
        <div className={classNames('absolute right-0 p-inherit')}>
          <div
            className={classNames(
              'text-center rounded-8 p-32 md:p-48 bg-white md:w-440'
            )}
          >
            <h2 className="text-40 font-bold mb-16">{title}</h2>
            <p className="text-20 font-bold mb-16">{subtitle}</p>
            <p className="text-18 mb-32">{description}</p>
            {link?.url && <EntityLink className={'mx-auto'} link={link} />}
          </div>
        </div>
      </div>
    </div>
  );
}

interface HeroCtaEntityProps {
  className?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundImage: object;
  link: object;
}

export default HeroCtaEntity;
