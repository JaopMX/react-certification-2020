const FAVORITES_KEY = 'myFavorites';

const favoritesExist = () => {
  return localStorage.getItem(FAVORITES_KEY) !== null;
};

export const getFavoritesArray = () => {
  if (!favoritesExist) {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify([]));
  }
  return JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]');
};

export const isFavorite = (id: string) => {
  const favoritesArray = getFavoritesArray();
  return favoritesArray.filter((favorite: any) => {
    return favorite.id === id;
  }).length;
};

export const addFavorite = (title: string, id: string, thumbnail: string) => {
  const favoritesArray = getFavoritesArray();
  const newFavorite = {
    id,
    title,
    thumbnail,
  };
  favoritesArray.push(newFavorite);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favoritesArray));
};

export const removeFavorite = (id: string) => {
  const favoritesArray = getFavoritesArray();
  const updatedFavorites = favoritesArray.filter((favorite: any) => {
    return favorite.id !== id;
  });
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
};
