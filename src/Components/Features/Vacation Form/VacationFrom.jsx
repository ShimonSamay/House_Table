import style from "./VacationForm.module.scss";
import { Button, TextField } from "@mui/material";
import { InputAttributes } from "Utils";
import { useDispatch } from "react-redux";
import { addNewVacationAction } from "Redux/Actions/VacationsActions";

const VacationForm = () => {

  const vacation = {};

  const dispatch = useDispatch();

  const handleChange = (e) => {
    vacation[e.target.name] = e.target.value;
  }

  const sendVacation = (e) => {
    e.preventDefault();
    dispatch(addNewVacationAction(vacation));
  };

  return (
    <section className={style.formContainer}>
      <form className={style.form}>
       <h3>Add New Vacation : </h3>
        {InputAttributes.map((attribute) => (
          <TextField
            key={attribute.label}
            id="outlined-basic"
            variant="outlined"
            label={attribute.label}
            name={attribute.name}
            onChange={handleChange}
            required
          />
        ))}
        <Button variant="contained" onClick={sendVacation} className={style.button}>Send</Button>
      </form>
    </section>
  );
};

export default VacationForm;
