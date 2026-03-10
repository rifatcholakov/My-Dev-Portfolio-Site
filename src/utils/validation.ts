/**
 * utils/validation.ts
 * Pure validation functions — no side effects, fully testable.
 */
import { VALIDATION } from '../config';

export interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

export interface FormFields {
    name: string;
    email: string;
    message: string;
}

/**
 * Validates all contact form fields.
 * Returns an object with field-level error messages.
 * Empty object means the form is valid.
 */
export function validateContactForm(fields: FormFields): FormErrors {
    const errors: FormErrors = {};

    const name = fields.name.trim();
    if (!name) {
        errors.name = 'Full name is required.';
    } else if (name.length < VALIDATION.NAME_MIN_LENGTH) {
        errors.name = `Name must be at least ${VALIDATION.NAME_MIN_LENGTH} characters.`;
    }

    const email = fields.email.trim();
    if (!email) {
        errors.email = 'Email address is required.';
    } else if (!VALIDATION.EMAIL_REGEX.test(email)) {
        errors.email = 'Please enter a valid email address.';
    }

    const message = fields.message.trim();
    if (!message) {
        errors.message = 'Message is required.';
    } else if (message.length < VALIDATION.MESSAGE_MIN_LENGTH) {
        errors.message = `Message must be at least ${VALIDATION.MESSAGE_MIN_LENGTH} characters.`;
    }

    return errors;
}

/** Returns true if the errors object has no keys */
export function isFormValid(errors: FormErrors): boolean {
    return Object.keys(errors).length === 0;
}
