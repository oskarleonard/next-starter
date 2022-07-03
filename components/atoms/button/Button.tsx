import classNames from 'classnames';

export const getButtonStyles = (hasIcon?: boolean) =>
  `inline-flex text-white text-20 font-bold py-12 bg-jewel items-center rounded-8 ${
    hasIcon ? 'px-24' : 'px-42'
  }`;

const Button = ({
  className,
  children,
  hasIcon,
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={classNames(className, getButtonStyles(hasIcon))}
      disabled={disabled}
      {...rest}
    >
      {children ?? children}
    </button>
  );
};

interface ButtonProps {
  className?: string;
  children: any;
  hasIcon?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export default Button;
