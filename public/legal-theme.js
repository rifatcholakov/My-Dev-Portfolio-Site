/**
 * legal-theme.js
 * Applies the correct theme to legal pages before first paint.
 * Priority: 1) localStorage (synced with the main site)
 *           2) OS/browser prefers-color-scheme
 *           3) Default: light
 *
 * Include this as the FIRST script in <body> to avoid a flash of wrong theme.
 */
(function () {
    var stored = localStorage.getItem('theme');
    var theme =
        stored === 'dark' || stored === 'light'
            ? stored
            : window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light';

    document.documentElement.setAttribute('data-theme', theme);
})();
