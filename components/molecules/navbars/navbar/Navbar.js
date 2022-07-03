import { Component } from 'react';
import { throttle } from 'throttle-debounce';
import classNames from 'classnames';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import IconMenuBurger from 'shared/icons/ic-menu-burger.svg';
import IconCross from 'shared/icons/ic-cross.svg';
import { selectIsMobileNavbarOpen, toggleMobileNavbar } from 'redux/appSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import BrandLogoWithTextLandscape from 'shared/icons/ic-brand-with-text-landscape.svg';
import Link from 'components/atoms/link/Link';
import NavbarLinkListing from 'components/molecules/navbars/navbarLinkListing/NavbarLinkListing';

const primaryButton =
  'inline-flex items-center justify-center text-gray-400 p-2 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasScrolled: false,
    };

    this.scrollListener = throttle(200, this.handleScroll);
  }

  componentDidMount() {
    this.handleScroll();
    window.addEventListener('scroll', this.scrollListener);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollListener);
  }

  isNavbarWhite = () => {
    const { isMobileNavbarOpen, router } = this.props;
    if (isMobileNavbarOpen) {
      return true;
    }

    const whiteNavbarRoutes = ['/articles', '/contact', '/outdoorkids'];

    const isWhiteNavbarRoute = whiteNavbarRoutes.some(
      (routePath) => router?.asPath === routePath
    );
    return isWhiteNavbarRoute || this.state.hasScrolled;
  };

  getNavbarClasses = (isNavbarWhite) => {
    return classNames({
      ['bg-transparent text-white']: !isNavbarWhite,
      ['bg-white text-black']: isNavbarWhite,
    });
  };

  handleScroll = () => {
    const pageYOffset = window.pageYOffset;
    const navigationHeight = 50;

    if (pageYOffset > navigationHeight && !this.state.hasScrolled) {
      this.setState({
        hasScrolled: true,
      });
    } else if (pageYOffset < navigationHeight && this.state.hasScrolled) {
      this.setState({
        hasScrolled: false,
      });
    }
  };

  render() {
    const isNavbarWhite = this.isNavbarWhite();

    return (
      <header
        className={`flex items-center h-64 fixed left-0 right-0 top-0 z-50 ${this.getNavbarClasses(
          isNavbarWhite
        )}`}
      >
        <TopNavbar isNavbarWhite={isNavbarWhite} />
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    isMobileNavbarOpen: selectIsMobileNavbarOpen(state),
  };
}

export default connect(mapStateToProps)(withRouter(Navbar));

function TopNavbar({ links, isNavbarWhite }) {
  return (
    <nav className="container flex justify-between w-full">
      <LogoImageLink isBlack={isNavbarWhite} />
      <NavbarLinkListing
        className={classNames(
          'hidden md:flex items-center ml-10 space-x-32',
          isNavbarWhite ? 'text-scorpion' : 'text-abbey'
        )}
        classNameLink="text-16 hover:underline"
        classNameLinkActive={classNames(
          isNavbarWhite ? 'text-black' : 'text-white'
        )}
      />
      <OpenCloseMenuButtons className={'md:hidden'} isBlack={isNavbarWhite} />
    </nav>
  );
}

function OpenCloseMenuButtons({ className, isBlack }) {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectIsMobileNavbarOpen);

  return isOpen ? (
    <button
      className={`${primaryButton} ${className}`}
      onClick={() => dispatch(toggleMobileNavbar())}
    >
      <IconCross className="h-24 w-24" />
    </button>
  ) : (
    <button
      className={`${primaryButton} ${className}`}
      onClick={() => dispatch(toggleMobileNavbar())}
    >
      <IconMenuBurger
        className="h-24 w-24"
        stroke={isBlack ? 'black' : 'white'}
      />
    </button>
  );
}

function LogoImageLink({ isBlack }) {
  return (
    <Link href="/" passHref>
      <BrandLogoWithTextLandscape fill={isBlack ? 'black' : 'white'} />
    </Link>
  );
}
