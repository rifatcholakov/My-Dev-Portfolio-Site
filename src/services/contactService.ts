/**
 * services/contactService.ts
 * Encapsulates all contact form API communication.
 * Component code stays clean and free of fetch details.
 */
import { CONTACT_CONFIG, FORM_MESSAGES } from '../config';

export interface ContactPayload {
    name: string;
    email: string;
    message: string;
}

export interface ContactResult {
    success: boolean;
    message: string;
}

export async function submitContactForm(payload: ContactPayload): Promise<ContactResult> {
    const formData = new FormData();
    formData.append('access_key', CONTACT_CONFIG.ACCESS_KEY);
    formData.append('name', payload.name);
    formData.append('email', payload.email);
    formData.append('message', payload.message);

    try {
        const response = await fetch(CONTACT_CONFIG.API_URL, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            return { success: false, message: FORM_MESSAGES.SERVER_ERROR };
        }

        const data = await response.json();
        return {
            success: data.success,
            message: data.success ? FORM_MESSAGES.SUCCESS : (data.message || FORM_MESSAGES.SERVER_ERROR),
        };
    } catch {
        return { success: false, message: FORM_MESSAGES.NETWORK_ERROR };
    }
}
