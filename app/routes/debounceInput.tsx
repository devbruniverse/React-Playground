import { useState } from "react";
import { InputText } from "~/ui/InputText";
import useDebounce from "~/hooks/useDebounce";

function DebouncedInput() {
  const [value, setValue] = useState('');
  const [delayedValue, setDelayedValue] = useState('');

  const debouncedSearch = useDebounce((value: string) => {
    setDelayedValue(value);
  }, 800);

  const handleChange = (value: string) => {
    setValue(value);
    debouncedSearch(value);
  };

  return (
    <>
      <h2>Debounce Input</h2>
      <InputText onChange={handleChange} value={value} />
      <p>Debounced: {delayedValue}</p>
    </>
  );
};

export default DebouncedInput;