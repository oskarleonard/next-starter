import classNames from 'classnames';
import Image from 'components/atoms/image/Image';
import styles from './adventureHeader.module.css';

function AdventureHeader({
  className,
  title,
  backgroundImg,
  caption,
  description,
}: AdventureHeaderProps) {
  return (
    <div className={classNames(className, styles.AdventureHeader)}>
      <div className={classNames('absolute h-full w-full -z-10')}>
        <Image
          alt="Mountains"
          src={backgroundImg}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div
        className={classNames(
          'container hCenterAbsolute text-white',
          styles.contentContainer
        )}
      >
        <h1 className="text-88">{title}</h1>
        <span className="">{caption}</span>
        <p>{description}</p>
      </div>
    </div>
  );
}

interface AdventureHeaderProps {
  className?: string;
  title?: string;
  caption?: string;
  subtitle?: string;
  description?: string;
  backgroundImg: string;
}

export default AdventureHeader;
