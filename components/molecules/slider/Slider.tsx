import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import smoothscroll from 'smoothscroll-polyfill';
import { InView } from 'react-intersection-observer';
import styles from './slider.module.css';

const isClient = typeof window === 'object';

//SlideOffset needs to be used together with classNameSlide which sets flex: 0 0 ___%; For now breakpoint is hardcoded at bpTablet 768px
function Slider({
  className = undefined,
  classNameSlide,
  Items,
  slideOffsetMobile = 0,
  slideOffsetDesktop = 0,
  renderBelow,
  blockSlideChange = false,
  threshold = 0.999,
}) {
  const scrollContainerRef = useRef();
  const [activeSlide, setActiveSlide] = useState(0);
  const [hasPendingUpdate, setHasPendingUpdate] = useState(false);

  function onGotoSlideIfUserIsNotScrolling(slideIndex) {
    const slideOffsetResponsive =
      isClient && window.innerWidth < 768
        ? slideOffsetMobile
        : slideOffsetDesktop ?? slideOffsetMobile;

    const slideOffsetPx = Math.round(
      (slideOffsetResponsive * scrollContainerRef.current?.offsetWidth) / 100
    );

    const scrollLeft =
      scrollContainerRef?.current &&
      Math.round(scrollContainerRef.current?.scrollLeft);
    const slideWidth = scrollContainerRef.current?.offsetWidth - slideOffsetPx;

    const isAtSlidePosition = getScrollLeftIsAtSlidePosition(
      scrollLeft,
      slideWidth,
      slideOffsetPx
    );

    if (isAtSlidePosition) {
      if (blockSlideChange) {
        setHasPendingUpdate(true);
      } else {
        setHasPendingUpdate(false);
        onGoToSlide(slideIndex);
      }
    }
  }

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  useEffect(() => {
    if (!blockSlideChange) {
      if (hasPendingUpdate) {
        setHasPendingUpdate(false);
        onGotoSlideIfUserIsNotScrolling((activeSlide + 1) % Items?.length);
      }
    }
  }, [blockSlideChange]);

  function setActiveSlideIfInView(slideIndex, inView) {
    if (inView) {
      setActiveSlide(slideIndex);
    }
  }

  function onNext() {
    onGoToSlide((activeSlide + 1) % Items?.length);
  }

  function onPrev() {
    onGoToSlide(activeSlide > 0 ? activeSlide - 1 : Items.length - 1);
  }

  const onGoToSlide = (index) => {
    const slideOffsetResponsive =
      isClient && window.innerWidth < 768
        ? slideOffsetMobile
        : slideOffsetDesktop ?? slideOffsetMobile;

    const slideOffsetPx = Math.round(
      (slideOffsetResponsive * scrollContainerRef.current?.offsetWidth) / 100
    );

    scrollContainerRef.current?.scroll({
      left: index * (scrollContainerRef.current?.offsetWidth - slideOffsetPx),
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div
        ref={scrollContainerRef}
        className={classNames(styles.sliderWithRenderPropLogic, className)}
      >
        <ItemsWrappedWithInView
          classNameSlide={classNameSlide}
          Items={Items}
          inViewRoot={scrollContainerRef?.current}
          onInViewChange={setActiveSlideIfInView}
          threshold={threshold}
        />
      </div>
      {renderBelow &&
        renderBelow({
          activeSlide,
          setActiveSlide,
          onGotoSlideIfUserIsNotScrolling,
          onGoToSlide,
          onNext,
          onPrev,
        })}
    </>
  );
}

export default Slider;

const ItemsWrappedWithInView = ({
  Items,
  inViewRoot,
  onInViewChange,
  classNameSlide,
  threshold,
}) => {
  return Items
    ? Items.map((Item, slideIndex) => {
        return (
          <InView
            className={classNames(styles.slide, classNameSlide)}
            initialInView={slideIndex === 0}
            root={inViewRoot}
            threshold={threshold}
            as={'div'}
            key={`slide:${slideIndex}`}
            onChange={(inView) => onInViewChange(slideIndex, inView)}
          >
            {Item}
          </InView>
        );
      })
    : null;
};

const getScrollLeftIsCloseEnough = (formula, smallerThan, biggerThan) => {
  return formula === 0 || formula < smallerThan || formula > biggerThan;
};

/*this is used to avoid autoplay if the user is scrolling.
By checking if the scrollLeft value is aligned with the slides
we can conclude that user is most likely not scrolling in between slides*/
const getScrollLeftIsAtSlidePosition = (
  scrollLeft,
  slideWidth,
  slideOffsetPx
) => {
  const isFirstSlidePosition = scrollLeft === 0;
  const isSlidePosition = getScrollLeftIsCloseEnough(
    scrollLeft % slideWidth,
    6,
    slideWidth - 6
  );

  const isLastSlidePosition = getScrollLeftIsCloseEnough(
    (scrollLeft + slideOffsetPx) % slideWidth,
    12,
    slideWidth - 12
  );

  return isFirstSlidePosition || isSlidePosition || isLastSlidePosition;
};
