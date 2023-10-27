import { useEffect, useState } from "react";

// this is a custom hook that can be used by any client component
// it allows to avoid duplicating the logic to detect the network status of the browser
// it allows the caller to focus on what they want instead of how they want to implement it
// hook functions must start with 'use'
// custom hooks need to be pure since the code is run on every render
export default function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(true);
    // useEffect allows to synchronize React state with the browser API
    useEffect(() => {
      function handleOnline() {
        setIsOnline(true);
      }
      function handleOffline() {
        setIsOnline(false);
      }
      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);
      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      };
    }, 
    // empty array dependency means the reducer is called only when the component appears
    []);
    // the state returned here is not shared across components
    return isOnline;
  }