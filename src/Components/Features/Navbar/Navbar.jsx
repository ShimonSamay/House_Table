import style from "./Navbar.module.scss";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import AddIcon from '@mui/icons-material/Add';

const Navbar = () => {

  const navigate = useNavigate();

  const { favorites } = useSelector((globalState) => globalState);

  return (
    <section className={style.Navbar}>
      <section className={style.container}>
        <TravelExploreIcon className={style.icons} onClick={() => navigate("/")}/>
        <span>Vacation Tracker</span>
      </section>
      <section className={style.container}>
        <Badge className={style.badge} badgeContent={favorites.length} color="primary">
          <FavoriteIcon className={style.icons} />
        </Badge>
        <AddIcon onClick={() => navigate("/add")}/>
      </section>
    </section>
  );
};

export default Navbar;
