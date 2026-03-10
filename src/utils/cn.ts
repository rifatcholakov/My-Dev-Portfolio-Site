/**
 * utils/cn.ts
 * Lightweight className utility — conditionally joins class names.
 * Avoids template string noise like `${isActive ? 'active' : ''}`.
 */
export function cn(...classes: (string | false | null | undefined)[]): string {
    return classes.filter(Boolean).join(' ');
}
