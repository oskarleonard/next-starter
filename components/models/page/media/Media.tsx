import React from 'react';
import classNames from 'classnames';
import Image from 'components/atoms/image/Image';

function Media({ className, media }: MediaProps) {
  return (
    <div className={classNames(className, 'flex')}>
      {media?.map((item) => {
        return <EntityImage key={item.large.url} src={item.large.url} />;
      })}
    </div>
  );
}

interface MediaProps {
  className?: string;
  media?: object[];
}

export default Media;

function EntityImage({ src }: any) {
  return (
    <div className={'w-full h-full relative h-[330px]'}>
      <Image alt="entity" src={src} layout="fill" objectFit="cover" />
    </div>
  );
}
