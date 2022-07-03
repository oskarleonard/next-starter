import React from 'react';
import classNames from 'classnames';
import styles from './Input.module.css';

export const Input = React.forwardRef(
  (
    {
      className,
      name,
      onFocus,
      value,
      onChange,
      onKeyDown,
      onBlur,
      autoComplete = 'off',
      isDisabled,
      readOnly,
      type,
      tabIndex,
      placeholder,
      defaultValue,
      onClick,
      regexAllowOnly,
      ...rest
    },
    forwardRef
  ) => {
    function handleChange(event) {
      if (regexAllowOnly) {
        const value = event.target.value;
        if (value === '') {
          onChange(event, { name });
        } else if (value.match(regexAllowOnly)) {
          onChange(event, { name });
        }
      } else {
        onChange(event, { name });
      }
    }

    return (
      <input
        className={classNames(className, styles.inputCommon)}
        disabled={isDisabled}
        readOnly={readOnly}
        autoComplete={autoComplete}
        type={type}
        ref={forwardRef}
        name={name}
        onChange={onChange && handleChange}
        onKeyDown={onKeyDown && onKeyDown}
        onBlur={onBlur}
        value={value}
        defaultValue={defaultValue}
        tabIndex={tabIndex}
        placeholder={placeholder}
        onClick={onClick}
        onFocus={onFocus}
        {...rest}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;

export const ONLY = {
  DIGITS: /^\d+$/,
  DIGITS_ONE_COMMA_OR_DOT: /^[\d]+([.,])?[\d]*$/,
  DIGITS_COMMA_OR_DOT: /^[\d]+(([.][\d]+)|([,][\d]+))*[,.]?$/,
};
