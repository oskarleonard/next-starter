import BrandLogoWithText from 'shared/icons/ic-brand-with-text.svg';
import Link from 'components/atoms/link/Link';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

function Footer() {
  return (
    <footer className="bg-heavyMetal flex flex-col items-center pt-68 pb-54">
      <BrandLogoWithText />
      <div className="container text-center mt-40 text-white">
        <Link href={'/'}>Hem</Link>
        <Link className="ml-32 md:ml-48" href={'/articles'}>
          Artiklar
        </Link>
        <Link className="ml-32 md:ml-48" href={'/adventures'}>
          Äventyr
        </Link>
        <Link className="ml-32 md:ml-48" href={'/contact'}>
          Kontakt
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
