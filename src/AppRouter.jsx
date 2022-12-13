import Home from "Components/Pages/Home/Home";
import AddVacation from "Components/Pages/Add Vacation/AddVacation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "Redux/Store";
import Navbar from "Components/Features/Navbar/Navbar";

const AppRouter = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<AddVacation/>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default AppRouter;
