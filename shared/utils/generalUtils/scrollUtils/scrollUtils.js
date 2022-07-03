const animateScroll = ({ targetPosition }) => {
  window.scroll({ top: targetPosition, behavior: 'smooth' });
};

const getElementPosition = (element, subtractOffsetTopBy) =>
  element.offsetTop - subtractOffsetTopBy;

export const scrollToElement = ({
  id,
  ref = null,
  subtractOffsetTopBy = 0,
}) => {
  const element = ref ? ref.current : id ? document.getElementById(id) : null;

  if (!element) {
    console.error(
      `Invalid element, are you sure you've provided element id or react ref?`
    );
    return;
  }

  animateScroll({
    targetPosition: getElementPosition(element, subtractOffsetTopBy),
  });
};
