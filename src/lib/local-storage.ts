const USER_KEY = "user";

interface StorageUser {
  id: string;
  name: string;
  email: string;
}

export const setStorageUser = (user: StorageUser) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const getStorageUser = () => {
  const user = localStorage.getItem(USER_KEY);
  return JSON.parse(user!) as StorageUser;
};

export const deleteStorageUser = () => {
  localStorage.removeItem(USER_KEY);
};
