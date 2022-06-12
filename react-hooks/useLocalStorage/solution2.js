import { useEffect } from 'react';

const getInitialValue = (key, initialValue) => {
    return JSON.parse(localStorage.getItem(key)) ?? initialValue;
}

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(getInitialValue(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// Do not edit the line below.
exports.useLocalStorage = useLocalStorage;
