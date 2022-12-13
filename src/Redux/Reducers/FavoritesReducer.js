import { favoritesActionTypes } from "Redux/Types";

const favoritesReducer = (initialState = [], action) => {
    
  const { type, payload } = action;

  switch (type) {
    case favoritesActionTypes.addToFavorites:
      return [...initialState, payload];

    case favoritesActionTypes.removeFromFavorites:
      return initialState.filter((item) => item.id !== payload.id);

    default:
      return initialState;
  }
};

export default favoritesReducer;
