export function generateSkipLinks(): string {
  return `
    <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50">
      Skip to main content
    </a>
  `;
}

export function ensureHeadingHierarchy(content: string): string {
  // Simple heading hierarchy validation
  const headings = content.match(/<h[1-6][^>]*>/gi) || [];
  let lastLevel = 0;
  
  for (const heading of headings) {
    const level = parseInt(heading.match(/h([1-6])/i)?.[1] || '1');
    if (level > lastLevel + 1) {
      console.warn(`Heading hierarchy skip detected: h${lastLevel} to h${level}`);
    }
    lastLevel = level;
  }
  
  return content;
}

export const accessibilityChecks = {
  ensureFocusManagement: () => {
    // Focus management utilities
    const trapFocus = (element: HTMLElement) => {
      const focusableElements = element.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      element.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          if (e.shiftKey && document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      });
    };
    
    return { trapFocus };
  }
};