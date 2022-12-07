const useLocalStorage = () => {
  const setItemsToLocaleStorage = (itemsObj) => {
    Object.keys(itemsObj).forEach((key) => {
      localStorage.setItem(key, JSON.stringify(itemsObj[key]));
    });
  };

  const getItemsFromStorage = (itemsArray) => itemsArray.reduce((acc, key) => {
    const item = localStorage.getItem(key);
    return { ...acc, [key]: JSON.parse(item) };
  }, {});

  return { setItemsToLocaleStorage, getItemsFromStorage };
};

export default useLocalStorage;
