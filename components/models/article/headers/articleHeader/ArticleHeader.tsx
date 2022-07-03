import classNames from 'classnames';
import Image from 'components/atoms/image/Image';
import OpacifyChildren from 'components/atoms/opacifyChildren/OpacifyChildren';

function ArticleHeader({
  className,
  title,
  backgroundImg,
  caption,
  description,
  opacityOverlay = 16,
}: ArticleHeaderProps) {
  return (
    <div
      className={classNames(
        className,
        'relative w-full h-[80vh] max-h-[820px]'
      )}
    >
      <OpacifyChildren
        className={classNames('relative h-full w-full -z-10')}
        opacity={opacityOverlay}
      >
        <Image
          alt="Mountains"
          src={backgroundImg}
          layout="fill"
          objectFit="cover"
          priority
        />
      </OpacifyChildren>
      <div
        className={classNames(
          'container top-[54vh] hCenterAbsolute text-white'
        )}
      >
        <div className={'max-w-[800px]'}>
          <h1 className="text-42 break-words sm:text-48 md:text-64 font-bold">
            {title}
          </h1>
          {caption && <span className="">{caption}</span>}
          {description && <p className="text-20">{description}</p>}
        </div>
      </div>
    </div>
  );
}

interface ArticleHeaderProps {
  className?: string;
  title?: string;
  caption?: string;
  subtitle?: string;
  description?: string;
  opacityOverlay?: number;
  backgroundImg: string;
}

export default ArticleHeader;
