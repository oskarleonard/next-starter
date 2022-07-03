import React from 'react';
import classNames from 'classnames/bind';
import styles from './textarea.module.css';

const Textarea = React.forwardRef(
  ({ className, resizeType, disabled, ...props }, forwardRef) => {
    return (
      <textarea
        ref={forwardRef}
        disabled={disabled}
        className={classNames(
          className,
          styles.textarea,
          disabled && styles.disabled
        )}
        style={{ resize: resizeType }}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
