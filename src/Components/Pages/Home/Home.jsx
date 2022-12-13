import Navbar from "Components/Features/Navbar/Navbar";
import FilterInput from "Components/Features/Filter Input/FilterInput";
import VacationCards from "Components/Features/Vacation Cards/VacationCards";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchVacationsAction } from "Redux/Actions/VacationsActions";

const Home = () => {

  const dispatch = useDispatch();

  const { vacations } = useSelector((globalState) => globalState);
  
  useEffect(() => {
    dispatch(fetchVacationsAction());
  }, []);

  const [matches , setMatches] = useState([]); 
  
  const updateView = (e) => {
    const matchedResults = vacations.filter((vacation) => vacation.cityName.indexOf(e.target.value) > -1);
    matchedResults.length && setMatches(matchedResults);
  }

  return (
    <>
      <Navbar/>
      <FilterInput updateView={updateView} matchesResults={matches} setMatches={setMatches}/>
      <VacationCards matchedVacations={ matches.length ? matches : vacations }/>
    </>
  );
};

export default Home;
