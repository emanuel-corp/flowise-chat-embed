import { JSX } from 'solid-js/jsx-runtime';
type TextAreaInputProps = {
    ref: HTMLTextAreaElement | undefined;
    onInput: (value: string) => void;
    fontSize?: number;
    disabled?: boolean;
    rows?: number;
} & Omit<JSX.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onInput'>;
export declare const TextAreaInput: (props: TextAreaInputProps) => JSX.Element;
export {};
//# sourceMappingURL=TextAreaInput.d.ts.map