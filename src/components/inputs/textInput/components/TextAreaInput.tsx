import { splitProps } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';

type TextAreaInputProps = {
  ref: HTMLTextAreaElement | undefined;
  onInput: (value: string) => void;
  fontSize?: number;
  disabled?: boolean;
  rows?: number; // Optional: to specify the number of rows in the textarea
} & Omit<JSX.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onInput'>;

export const TextAreaInput = (props: TextAreaInputProps) => {
  const [local, others] = splitProps(props, ['ref', 'onInput', 'rows']);

  return (
    <textarea
      ref={props.ref}
      class="focus:outline-none bg-transparent px-4 py-4 flex-1 w-full text-input disabled:opacity-50 disabled:cursor-not-allowed disabled:brightness-100"
      disabled={props.disabled}
      rows={props.rows || 2} // Default to 2 rows if not specified
      style={{ 'font-size': props.fontSize ? `${props.fontSize}px` : '16px', 'resize': 'none', 'border': 'none', 'overflow': 'auto' }}
      onInput={(e) => local.onInput(e.currentTarget.value)}
      {...others}
    />
  );
};
