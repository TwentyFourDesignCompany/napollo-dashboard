export const saveToStorage = (key, val) => {
  localStorage.setItem(key, JSON.stringify(val));
};

export const loadFromStorage = (val) => {
  const item = localStorage.getItem(val);
  return JSON.parse(item);
};

export const removeFromStorage = (val) => {
  localStorage.removeItem(val);
};

export const clearFromStorage = () => {
  localStorage.clear();
};
