import { useEffect, useRef, useCallback } from 'react';

const SCROLL_THRESHOLD = 100; // px from bottom of viewport

/**
 * Attaches an IntersectionObserver to all `.reveal` elements,
 * adding the `active` class when they enter the viewport.
 * Far more performant than a scroll event listener.
 */
export const useScrollReveal = () => {
    const observerRef = useRef<IntersectionObserver | null>(null);

    const observe = useCallback(() => {
        const elements = document.querySelectorAll<HTMLElement>('.reveal');
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Unobserve once active to avoid unnecessary callbacks
                        observerRef.current?.unobserve(entry.target);
                    }
                });
            },
            { rootMargin: `0px 0px -${SCROLL_THRESHOLD}px 0px` }
        );

        elements.forEach((el) => observerRef.current?.observe(el));
    }, []);

    useEffect(() => {
        observe();
        return () => observerRef.current?.disconnect();
    }, [observe]);
};
