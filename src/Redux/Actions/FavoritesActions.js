const { favoritesActionTypes } = require("Redux/Types");

export const addToFavoritesAction = (data) => {
  return {
    type: favoritesActionTypes.addToFavorites,
    payload: data,
  };
};

export const removeFromFavoritesAction = (data) => {
  return {
    type: favoritesActionTypes.removeFromFavorites,
    payload: data,
  };
};
