import React from 'react';
import classNames from 'classnames';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { useRouter } from 'next/router';
import IconTwitter from 'shared/icons/ic-twitter.svg';
import IconFacebook from 'shared/icons/ic-facebook.svg';
import styles from './ShareContainer.module.css';

const classShareContainer = 'bg-concrete rounded-8 p-8';

function ShareContainer({ className, shareUrl }: ShareContainerProps) {
  const pathname = useRouter()?.asPath;
  const url = shareUrl ? shareUrl : process.env.APP_URL + pathname;

  return (
    <div className={classNames(className, 'flex md:flex-col')}>
      <FacebookShareButton className={'inline-flex'} url={url}>
        <div className={classNames(classShareContainer)}>
          <IconFacebook />
        </div>
      </FacebookShareButton>
      <TwitterShareButton
        className={'inline-flex ml-24 md:mt-24 md:ml-0'}
        url={url}
      >
        <div className={classNames(classShareContainer)}>
          <IconTwitter />
        </div>
      </TwitterShareButton>
    </div>
  );
}

interface ShareContainerProps {
  className?: string;
  shareUrl?: string;
}

export default ShareContainer;
