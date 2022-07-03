import classNames from 'classnames';
import React from 'react';
import styles from './hr.module.css';

const Hr = ({ className }) => {
  return <hr className={classNames('block', 'w-full', styles.hr, className)} />;
};

export default Hr;
