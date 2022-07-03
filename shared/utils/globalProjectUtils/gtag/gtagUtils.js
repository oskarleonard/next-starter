export const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID;

export const gTagPageView = (url) => {
  window?.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

export const gTagEvent = ({ action, category, label, value }) => {
  window?.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
