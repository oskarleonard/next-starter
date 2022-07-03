import { default as NextImage } from 'next/image';
import { ImageProps } from 'next/dist/client/image';

const Image = ({ ...rest }: ImageProps) => {
  return <NextImage {...rest} />;
};

export default Image;
