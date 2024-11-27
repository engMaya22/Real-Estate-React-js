

export const localStorageUtil = {
    get(key, defaultValue = "") {
      const value = localStorage.getItem(`contact_${key}`);
      return value ? JSON.parse(value) : defaultValue;
    },
    set(key, value) {
      localStorage.setItem(`contact_${key}`, JSON.stringify(value));
    },
  };
  