export default class HttpApiCallError extends Error {
  constructor(message, metadata) {
    super(message);

    this.message = message;
    Object.assign(this, metadata);

    this.stack = new Error(message).stack;
    this.name = 'HttpApiCallError';
  }
}

export function getStaticPropsError(error) {
  const status = error?.data?.status;
  switch (status) {
    case 404: {
      return {
        notFound: true,
      };
    }
    default: {
      return {
        props: { staticPropsError: error.data },
      };
    }
  }
}
