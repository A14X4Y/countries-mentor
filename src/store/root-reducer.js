import { combineReducers } from "redux";
import { controlsReducer } from "./controls/control-reducer";
import { countriesReducer } from "./countries/countries-reducer";
import { themeReducer } from "./theme/theme-reducer";

export const rootReducer = combineReducers({
  theme: themeReducer,
  countries: countriesReducer,
  controls: controlsReducer
});
