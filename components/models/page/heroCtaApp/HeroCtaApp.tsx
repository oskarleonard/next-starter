import classNames from 'classnames';
import React from 'react';
import Image from 'components/atoms/image/Image';
import AppStoreLink from 'components/atoms/appStoreLink/AppStoreLink';
import GooglePlayIconLink from 'components/atoms/googlePlayIconLink/GooglePlayIconLink';

function HeroCtaApp({
  className,
  title,
  description,
  backgroundImage,
  foregroundImage,
  hasPriorityImage = false,
}: HeroCtaAppProps) {
  return (
    <div
      className={classNames(className, 'flex relative h-[90vh] max-h-[820px]')}
    >
      <Image
        className={'-z-10'}
        alt="image header"
        src={backgroundImage?.large?.url}
        layout="fill"
        objectFit="cover"
        priority={hasPriorityImage}
      />
      <div
        className={classNames(
          'overflow-hidden max-h-full',
          'z-10 flex container md:grid md:grid-cols-12 md:gap-8',
          foregroundImage?.large?.url && 'md:mt-auto'
        )}
      >
        {foregroundImage?.large?.url && (
          <div
            className={
              'hidden md:px-40 lg:px-64 md:block md:self-end md:col-span-5'
            }
          >
            <Image
              src={foregroundImage?.large?.url}
              alt="mobile phone"
              width={60}
              height={100}
              layout="responsive"
              loading="eager"
            />
          </div>
        )}
        <div
          className={classNames(
            'text-white px-14 mt-auto mb-auto md:pb-32 md:px-0',
            'md:col-span-7',
            !foregroundImage?.large?.url && 'md:col-start-7'
          )}
        >
          <h1 className="text-42 font-bold sm:text-64">{title}</h1>
          <p className="mt-16 text-18 sm:text-20">{description}</p>
          <div className={'flex mt-32'}>
            <AppStoreLink />
            <GooglePlayIconLink className={'ml-24 sm:ml-48'} />
          </div>
        </div>
      </div>
    </div>
  );
}

interface HeroCtaAppProps {
  className?: string;
  title?: string;
  description?: string;
  backgroundImage: object;
  foregroundImage?: object;
  hasPriorityImage: boolean;
}

export default HeroCtaApp;
