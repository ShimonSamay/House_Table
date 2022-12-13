import style from "./FilterInput.module.scss";
import { TextField , InputLabel , MenuItem , FormControl , Select } from "@mui/material";
import { sortVacationsPrice } from "Redux/Actions/VacationsActions";
import { useDispatch } from "react-redux";
import { VacationsActionTypes } from "Redux/Types";
import { useState } from "react";


const FilterInput = ({ updateView }) => {

  const dispatch = useDispatch();

  const [title , setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
    dispatch(sortVacationsPrice(e.target.value));
  }

  const handleSearch = (e) => {
    updateView(e);
  }

  return (
    <section className={style.container}>
      <TextField className={style.input} label="Search" variant="outlined" onChange={handleSearch}/>
      <FormControl className={style.select}>
        <InputLabel>Sort</InputLabel>
        <Select
          onChange={handleChange}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={title}
          label={"title"}
        >
          <MenuItem value={VacationsActionTypes.sortHighToLow}> High To Low </MenuItem>
          <MenuItem value={VacationsActionTypes.sortLowToHigh}> Low To High </MenuItem>
        </Select>
      </FormControl>
    </section>
  );
};

export default FilterInput;
