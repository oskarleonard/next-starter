import React from 'react';
import classNames from 'classnames';
import Link from 'components/atoms/link/Link';
import { getButtonStyles } from 'components/atoms/button/Button';
import Image from 'components/atoms/image/Image';

function EntityLink({ className, link }: any) {
  const { url, text, icon } = link || {};
  const iconUrl = icon?.small?.url;

  return (
    <Link
      className={classNames(className, getButtonStyles(!!iconUrl))}
      href={url}
    >
      {text && <span className={iconUrl && 'mr-30'}>{text}</span>}
      {iconUrl && (
        <Image
          src={iconUrl}
          alt="icon"
          width={link?.icon?.small?.width}
          height={link?.icon?.small?.height}
          layout="fixed"
        />
      )}
    </Link>
  );
}

export default EntityLink;
