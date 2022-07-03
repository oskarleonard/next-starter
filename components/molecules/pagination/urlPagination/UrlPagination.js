import React from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';
import { getFirstIndexInRange } from './utils';
import styles from './UrlPagination.module.css';

function UrlPagination({
  className,
  classNamePaginationButton,
  classNameSelected,
  classNameFirstLastButtons,
  classNamePreviousNextButtons,
  pageCount,
  numberOfPagesToShow = 5,
  showEndOfRangeButtons = true,
  slotFirst = '❮❮',
  slotPrevious = '❮',
  slotNext = '❯',
  slotLast = '❯❯',
  searchParamKey,
}) {
  const router = useRouter();

  const currentPage = parseInt(router.query[searchParamKey] || '1');

  const safePageCount = pageCount ? pageCount : 1;
  const isLastPage = currentPage === safePageCount;
  const isFirstPage = currentPage === 1;

  const numberOfPagesOnEachSideOfCurrentPage =
    numberOfPagesToShow > 1 ? (numberOfPagesToShow - 1) / 2 : 0;

  const safeRangeOfPages =
    safePageCount < numberOfPagesToShow ? safePageCount : numberOfPagesToShow;

  const firstIndexInRange = getFirstIndexInRange(
    currentPage,
    numberOfPagesOnEachSideOfCurrentPage,
    safeRangeOfPages,
    safePageCount
  );

  function onPaginationBtnClick(value) {
    if (value > 1 && value <= safePageCount) {
      router.query[searchParamKey] = value;
      router.push(
        { pathname: router.pathname, query: router.query },
        undefined,
        { shallow: true, scroll: true }
      );
    } else {
      delete router.query[searchParamKey];
      router.push(
        { pathname: router.pathname, query: router.query },
        undefined,
        { shallow: true, scroll: true }
      );
    }
  }

  return (
    <div className={classNames(className, 'justify-center', 'flex')}>
      {showEndOfRangeButtons && (
        <PaginationButton
          className={classNames(
            classNamePaginationButton,
            classNameFirstLastButtons
          )}
          isDisabled={isFirstPage}
          onClick={onPaginationBtnClick}
          value={1}
        >
          {slotFirst}
        </PaginationButton>
      )}
      <PaginationButton
        className={classNames(
          classNamePaginationButton,
          classNamePreviousNextButtons
        )}
        isDisabled={isFirstPage}
        onClick={onPaginationBtnClick}
        value={currentPage - 1}
      >
        {slotPrevious}
      </PaginationButton>
      {Array(safeRangeOfPages)
        .fill()
        .map((_, index) => {
          const signedIndex = index + firstIndexInRange;
          return (
            <PaginationButton
              key={`page:${signedIndex}`}
              className={classNamePaginationButton}
              value={signedIndex}
              onClick={onPaginationBtnClick}
              isSelected={currentPage === signedIndex}
              classNameSelected={classNameSelected}
            >
              {signedIndex}
            </PaginationButton>
          );
        })}
      <PaginationButton
        className={classNames(
          classNamePaginationButton,
          classNamePreviousNextButtons
        )}
        isDisabled={isLastPage}
        onClick={onPaginationBtnClick}
        value={currentPage + 1}
      >
        {slotNext}
      </PaginationButton>
      {showEndOfRangeButtons && (
        <PaginationButton
          className={classNames(
            classNamePaginationButton,
            classNameFirstLastButtons
          )}
          isDisabled={isLastPage}
          onClick={onPaginationBtnClick}
          value={safePageCount}
        >
          {slotLast}
        </PaginationButton>
      )}
    </div>
  );
}

export default UrlPagination;

function PaginationButton({
  className,
  classNameSelected,
  onClick,
  value,
  isSelected,
  isDisabled,
  children,
}) {
  function getClassNames() {
    return classNames({
      [styles.paginationButton]: true,
      [styles.isSelected]: isSelected,
      [classNameSelected]: isSelected,
      [className]: !!className,
    });
  }

  function handleBtnClick(event) {
    onClick(event.target.value);
  }

  return (
    <button
      className={getClassNames()}
      onClick={handleBtnClick}
      disabled={isDisabled}
      value={value}
    >
      {children}
    </button>
  );
}
