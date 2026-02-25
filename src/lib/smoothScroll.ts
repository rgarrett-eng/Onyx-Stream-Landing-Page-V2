/**
 * Smooth scroll to element with offset for fixed header
 */
export function smoothScrollTo(targetId: string, offset: number = 80) {
  const target = document.querySelector(targetId);
  
  if (!target) {
    console.warn(`Element with selector "${targetId}" not found`);
    return;
  }

  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = targetPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
}

/**
 * Initialize smooth scroll for all anchor links on the page
 */
export function initSmoothScroll(offset: number = 80) {
  // Find all anchor links that start with #
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // Skip if href is just "#"
      if (!href || href === '#') return;
      
      e.preventDefault();
      smoothScrollTo(href, offset);
      
      // Update URL hash without jumping
      if (history.pushState) {
        history.pushState(null, '', href);
      }
    });
  });
}
