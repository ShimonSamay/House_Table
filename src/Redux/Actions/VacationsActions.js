import { VacationsActionTypes } from "Redux/Types";
import {addVacation,fetchVacations, deleteVacation,} from "Services/Vacations";

export const addVacationAction = (data) => {
  return {
    type: VacationsActionTypes.addVacation,
    payload: data,
  };
};

export const deleteActionVacation = (data) => {
  return {
    type: VacationsActionTypes.deleteVacation,
    payload: data,
  };
};

export const setVacationsAction = (data) => {
  return {
    type: VacationsActionTypes.setVacations,
    payload: data,
  };
};

export const sortVacationsPrice = (sortingType) => {
  return {
    type: sortingType,
  };
};

export const fetchVacationsAction = () => {
  return async (dispatch) => {
    try {
      const data = await fetchVacations();
      const vacationsData = setVacationsAction(data);
      dispatch(vacationsData);
    } 
    catch (err) {
      return err;
    }
  };
};

export const addNewVacationAction = (vacation) => {
  return async (dispatch) => {
    try {
      const newVacation = await addVacation(vacation);
      const addingAction = addVacationAction(newVacation);
      dispatch(addingAction);
    } catch (err) {
      return err;
    }
  };
};

export const deleteVacationAction = (vacation) => {
  return async (dispatch) => {
    try {
      const deletedVacation = await deleteVacation(vacation);
      const deleteAction = deleteActionVacation(deletedVacation);
      dispatch(deleteAction);
    } 
    catch (err) {
      return err;
    }
  };
};
