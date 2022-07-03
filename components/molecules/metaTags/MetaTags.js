import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

function MetaTags({
  siteTitle = 'Nordic Outdoor Adventures',
  type = 'website',
  title,
  description,
  imageUrl,
}) {
  const router = useRouter();
  const url = `${process.env.APP_URL}${router?.asPath}`;

  return (
    <Head>
      {title && <title>{`${siteTitle} - ${title}`}</title>}
      {description && <meta name={'description'} content={description} />}
      {title && <meta property="og:title" content={title} key={'ogtitle'} />}
      {description && (
        <meta property="og:description" content={description} key={'ogdes'} />
      )}
      {siteTitle && (
        <meta property="og:site_name" content={siteTitle} key={'ogsitename'} />
      )}
      {type && <meta property={'og:type'} content={type} key={'ogtype'} />}
      {imageUrl && (
        <meta property={'og:image'} content={imageUrl} key={'ogimage'} />
      )}
      {url && <meta property={'og:url'} content={url} key={'ogurl'} />}
      {url && <link rel={'canonical'} href={url} key={'canonical'} />}
    </Head>
  );
}

export default MetaTags;
