import { useRouter } from 'next/router';
import classNames from 'classnames';
import Link from 'components/atoms/link/Link';

const navigation = [
  { name: 'Hem', href: '/' },
  { name: 'Artiklar', href: '/articles' },
  { name: 'Äventyr', href: '/adventures' },
  { name: 'Kontakt', href: '/contact' },
];

function NavbarLinkListing({
  className,
  classNameLink,
  classNameLinkActive,
  links = navigation,
  onClickLink,
}) {
  const router = useRouter();
  const { asPath } = router;

  return (
    <div className={className}>
      {links.map((item) => (
        <Link
          className={classNames(
            classNameLink,
            asPath === item.href && classNameLinkActive
          )}
          key={item.name}
          href={item.href}
          onClick={onClickLink}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export default NavbarLinkListing;
