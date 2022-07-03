import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import styles from './carousel.module.css';

const EmblaCarousel = ({ slides }) => {
  // const wheelGestures = WheelGesturesPlugin();
  const [viewportRef, embla] = useEmblaCarousel(
    {
      skipSnaps: true,
      loop: true,
      inViewThreshold: 0.7,
      speed: 20,
      containScroll: 'trimSnaps', // best for performance
    },
    [WheelGesturesPlugin({ forceWheelAxis: 'x' })]
  );

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on('select', onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={viewportRef}>
        <div className={styles.embla__container}>
          {slides.map((index) => (
            <div className={styles.embla__slide} key={index}>
              <div className={styles.embla__slide__inner}>
                <img
                  className={styles.embla__slide__img}
                  src="https://storage.opensea.io/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb-featured-1556589448.png"
                  alt="A cool cat."
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={scrollPrev} disabled={!prevBtnEnabled}>
        PREV
      </button>
      <button onClick={scrollNext} disabled={!nextBtnEnabled}>
        NEXT
      </button>
    </div>
  );
};

export default EmblaCarousel;
