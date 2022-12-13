import style from "./VacationCard.module.scss";
import Favorite from "@mui/icons-material/Favorite";
import { Delete } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { deleteVacationAction } from "Redux/Actions/VacationsActions";
import { addToFavoritesAction, removeFromFavoritesAction } from "Redux/Actions/FavoritesActions";

const defaultPic = "https://centralholidays.com/MyUpload/021220202059110WhenInParis850x530_1.jpg";

const VacationCard = ({ vacation }) => {

  const dispatch = useDispatch();

  const { favorites } = useSelector((globalState) => globalState);

  const deleteVacation = () => {
    dispatch(deleteVacationAction(vacation));
    if (favorites.includes(vacation)) return deleteFromFavorites();
  };

  const addToFavorites = () => {
    dispatch(addToFavoritesAction(vacation));
  };

  const deleteFromFavorites = () => {
    dispatch(removeFromFavoritesAction(vacation));
  };

  const setIcon = () => {
    return favorites.includes(vacation) ? <Favorite sx={{color:"red"}} onClick={deleteFromFavorites}/> : <Favorite sx={{color:"black"}} onClick={addToFavorites}/> 
  };

  return (
    <section className={style.cardContainer}>
      <img src={vacation.image || defaultPic} />
      <section className={style.location}>
        <span> {vacation.cityName} , {vacation.country} </span>
      </section>
        <p>{vacation.vacationprice}$</p>
      <section className={style.iconsContainer}>
        {setIcon()}
        <Delete onClick={deleteVacation}/>
      </section>
    </section>
  );
};

export default VacationCard;
