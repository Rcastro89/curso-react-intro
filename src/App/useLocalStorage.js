import { useEffect, useState } from "react";
function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoaging] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      setTimeout(() => {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItems;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItems = initialValue;
        } else {
          parsedItems = JSON.parse(localStorageItem);
          setItem(parsedItems);
        }

        setLoaging(false);
      }, 5000);
    } catch (error) {
      setLoaging(false);
      setError(true);
    }
  }, [initialValue, itemName]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return { saveItem, item, loading, error };
}

export { useLocalStorage };
