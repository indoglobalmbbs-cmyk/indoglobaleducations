import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    _hsq?: unknown[][];
  }
}

const HubSpotPageTracker = () => {
  const location = useLocation();
  const hasTrackedInitialLoad = useRef(false);

  useEffect(() => {
    if (!hasTrackedInitialLoad.current) {
      hasTrackedInitialLoad.current = true;
      return;
    }

    window._hsq = window._hsq || [];

    const path = `${location.pathname}${location.search}`;

    // HubSpot's embed script handles the first load; SPA navigations need manual page views.
    window._hsq.push(['setPath', path]);
    window._hsq.push(['trackPageView']);
  }, [location.pathname, location.search]);

  return null;
};

export default HubSpotPageTracker;
