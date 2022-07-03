import { UrlObject } from 'url';
import { default as NextLink } from 'next/link';

const Link = ({ className, children, onClick, ...rest }: LinkProps) => {
  return (
    <NextLink {...rest}>
      <a className={className} onClick={onClick}>
        {children}
      </a>
    </NextLink>
  );
};

interface LinkProps {
  className?: string;
  children: any;
  href: string | UrlObject;
  as?: string | UrlObject;
  replace?: boolean;
  scroll?: boolean;
  onClick?: () => void;
  shallow?: boolean;
  passHref?: boolean;
  prefetch?: boolean;
  locale?: string | false;
}

export default Link;
