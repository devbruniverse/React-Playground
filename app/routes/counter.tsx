import { useState } from "react";
import { Button } from "~/ui/Button";

const defaultValue = 0;

export default () => {
  const [count, setCount] = useState(defaultValue);

  return (
    <>
      <p>Counter: {count}</p>
      <div className="flex justify-between gap-2 flex-row w-fit">
        <Button onClick={() => setCount(prev => prev + 1)}>Add</Button>
        <Button onClick={() => setCount(prev => prev - 1)}>Remove</Button>
        <Button onClick={() => setCount(defaultValue)}>Reset</Button>
      </div>
    </>
  );
};