import vacationsReducer from "Redux/Reducers/VacationsReducer";
import favoritesReducer from "./Reducers/FavoritesReducer";
import thunk from "redux-thunk";
import { legacy_createStore as createStore , combineReducers , applyMiddleware } from "redux";

const middleware = [thunk]; 

const rootReducer = combineReducers({
   vacations : vacationsReducer ,
   favorites : favoritesReducer
})

const store = createStore(rootReducer , applyMiddleware(...middleware))

export default store ;