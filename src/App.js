import style from "./App.module.scss";
import AppRouter from "AppRouter";

const App = () => {

 return (
    <div className={style.App}>
      <AppRouter />
    </div>
  );
};

export default App;
