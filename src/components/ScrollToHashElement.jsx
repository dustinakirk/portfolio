import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

// Set after the first hash scroll of this page load. From then on, back/forward
// to a "/#section" URL is left to <ScrollRestoration> (App.jsx), which puts the
// visitor back where they were instead of jumping to the section.
let hasScrolledToHash = false;

// Scrolls to "#work"-style links, whose targets are "<hash>-section" ids under
// the sticky header. Top-of-page and back/forward scrolling are handled by
// <ScrollRestoration>.
export default function ScrollToHashElement() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (!location.hash) return;
    if (navigationType === 'POP' && hasScrolledToHash) return;

    // Wait for DOM to be fully loaded
    const timeoutId = setTimeout(() => {
      hasScrolledToHash = true;

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
    }, 100); // Small delay to ensure DOM is ready

    return () => clearTimeout(timeoutId);
  }, [location, navigationType]);

  return null;
}
