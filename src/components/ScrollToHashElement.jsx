import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    // Wait for DOM to be fully loaded
    const timeoutId = setTimeout(() => {
      if (location.hash) {
        // Remove the # from hash
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id + '-section');
        
        if (element) {
          // Calculate header offset
          const headerElement = document.querySelector('header');
          const offset = headerElement ? headerElement.offsetHeight + 20 : 80;
          
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      } else {
        // If no hash, scroll to top
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }, 100); // Small delay to ensure DOM is ready

    return () => clearTimeout(timeoutId);
  }, [location]);

  return null;
}