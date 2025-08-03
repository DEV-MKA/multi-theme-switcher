import { useState } from "react";

export function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    const val = window.localStorage.getItem(key);
    return val !== null ? JSON.parse(val) : initial;
  });

  const update = (val: T) => {
    setValue(val);
    window.localStorage.setItem(key, JSON.stringify(val));
  };

  return [value, update] as const;
}
