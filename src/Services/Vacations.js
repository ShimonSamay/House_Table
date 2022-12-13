import axios from "axios";

const api = "https://6388b351d94a7e5040a45fdf.mockapi.io/api/vacations";

export const fetchVacations = async () => {
  try {
    const { data } = await axios(api);
    return data;
  } catch (err) {
    return err;
  }
};

export const addVacation = async (vacation) => {
  try {
    const { data } = await axios.post(api,vacation);
    console.log({data});
    return data;
  } catch (err) {
    return err;
  }
};

export const deleteVacation = async (vacation) => {
  try {
    const { data } = await axios.delete(`${api}/${vacation.id}`);
    return data;
  } catch (err) {
    return err;
  }
};
