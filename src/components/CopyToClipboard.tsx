import { createSignal } from 'solid-js';

type CopyToClipboardProps = {
  value: string;
};

export const CopyToClipboard = (props: CopyToClipboardProps) => {
  const [copySuccess, setCopySuccess] = createSignal(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(props.value);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <div class="relative flex items-center mt-1">
      <button
        onClick={handleCopy}
        class="text-gray-500 dark:text-gray-400 hover:brightness-90 rounded-lg pl-2 inline-flex items-center justify-center"
        title="Copy"
      >
        {copySuccess() ? (
          <svg class="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default CopyToClipboard;
