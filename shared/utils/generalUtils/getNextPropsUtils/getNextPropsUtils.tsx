import { isClient } from 'shared/utils/generalUtils/generalUtils';

export const getServerInitialProps =
  (action: (context: any) => Promise<unknown>) => async (context: any) => {
    if (isClient()) {
      return {};
    }

    return action(context);
  };
