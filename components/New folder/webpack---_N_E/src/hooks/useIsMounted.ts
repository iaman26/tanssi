import { useEffect, useState } from 'react';

// Prevent error
// That's required because the first render should match the initial render of the server.
// https://github.com/vercel/next.js/discussions/17443#discussioncomment-637879
export function useIsMounted(): boolean {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
}
