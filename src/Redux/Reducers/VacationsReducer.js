import { VacationsActionTypes } from "Redux/Types";
import { sortingPrices } from "Utils";

const vacationsReducer = (initialState = [], action) => {

  const { type, payload } = action;

  switch (type) {

    case VacationsActionTypes.setVacations:
      return [...payload];

    case VacationsActionTypes.deleteVacation:
      return initialState.filter((vacation) => vacation.id !== payload.id);

    case VacationsActionTypes.addVacation:
      return [...initialState, payload];

    case VacationsActionTypes.sortHighToLow:
      return [...initialState.sort((a, b) => sortingPrices(a.vacationprice, b.vacationprice))];

    case VacationsActionTypes.sortLowToHigh:
      return [...initialState.sort((a, b) => sortingPrices(b.vacationprice, a.vacationprice))];

    default:
      return initialState;
  }
};

export default vacationsReducer;
