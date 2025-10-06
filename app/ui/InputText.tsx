import { type ChangeEvent } from "react";

interface InputTextProps {
  value?: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

function InputText({
  value = '',
  placeholder = 'type',
  onChange
}: InputTextProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      className="rounded-sm bg-gray-300 px-2 h-8"
    />
  );
}

export { InputText };
export type { InputTextProps };