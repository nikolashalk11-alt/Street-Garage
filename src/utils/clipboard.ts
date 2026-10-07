export const PHONE_NUMBER = '2651 313658';
export const PHONE_NUMBER_RAW = '2651313658';

/**
 * Copies the phone number to clipboard and triggers a toast notification
 */
export async function copyPhoneNumber(e?: React.MouseEvent): Promise<boolean> {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(PHONE_NUMBER);
    } else {
      // Fallback for non-secure contexts or older browsers
      const textArea = document.createElement('textarea');
      textArea.value = PHONE_NUMBER;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      textArea.remove();
    }

    // Dispatch global toast event
    window.dispatchEvent(
      new CustomEvent('phone-copied', {
        detail: { number: PHONE_NUMBER },
      })
    );
    return true;
  } catch (err) {
    console.error('Failed to copy phone number', err);
    return false;
  }
}
