import classNames from 'classnames';
import React from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { selectIsMobileNavbarOpen, toggleMobileNavbar } from 'redux/appSlice';
import NavbarLinkListing from 'components/molecules/navbars/navbarLinkListing/NavbarLinkListing';
import styles from './mobileNavbarMenu.module.css';

function MobileNavbarMenu() {
  const isMobileNavbarOpen = useAppSelector(selectIsMobileNavbarOpen);
  const dispatch = useAppDispatch();

  return (
    <div className={classNames('md:hidden')}>
      <div
        className={classNames({
          [styles.mainSidebarProp]: true,
          [styles.slideLeft]: isMobileNavbarOpen,
          [styles.slideRight]: isMobileNavbarOpen === false,
        })}
      >
        <div className="container bg-white overflow-hidden">
          <NavbarLinkListing
            className="text-16 flex flex-col text-scorpion"
            classNameLink={'flex items-center h-36 mt-12'}
            classNameLinkActive={'text-black'}
            onClickLink={() => dispatch(toggleMobileNavbar())}
          />
        </div>
      </div>
      <div
        className={classNames({
          [styles.overlaySideBarClose]: true,
          [styles.showOverlay]: isMobileNavbarOpen,
          [styles.hideOverlay]: isMobileNavbarOpen === false,
        })}
        onClick={() => dispatch(toggleMobileNavbar())}
      />
    </div>
  );
}

export default MobileNavbarMenu;
