import { useEffect, useState } from 'react';

const useHasMounted = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
};

export default useHasMounted;
