export const getLocalStoreValue = (key) => {
  if (window && window.localStorage) {
    return JSON.parse(localStorage.getItem(key));
  }
  return null;
};

export const setLocalStoreValue = (key, value) => {
  if (window && window.localStorage) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
