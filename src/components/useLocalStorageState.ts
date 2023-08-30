import { useEffect, useState } from "react";

export default function useLocalStorageState<T>(
  defaultValue: T,
  key: string
): [T, (value: T) => void] {
  const [state, setState] = useState<T>(defaultValue);

  useEffect(() => {
    const localStorageValue = localStorage.getItem(key);

    if (localStorageValue !== null) {
      setState(JSON.parse(localStorageValue));
    }
  }, [key]);

  return [
    state,
    (newState: T) => {
      setState(newState);
      localStorage.setItem(key, JSON.stringify(newState));
    }
  ];
}
