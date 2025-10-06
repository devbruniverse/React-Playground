import { useRef } from "react";

function useDebounce<T extends (...args: any[]) => void>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  return (...args: Parameters<T>) => {
    if (!!timer?.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => fn(...args), delay);
  };
}

export default useDebounce;