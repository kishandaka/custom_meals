import { MEALS } from "../../data/dummy-data";
import {
  TOGGEL_FAVORITE,
  SET_FILTERS,
  UPDATE_FAV_DATA,
} from "../actions/mealAction";
import AsyncStorage from "@react-native-async-storage/async-storage";

 const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
  fav: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGEL_FAVORITE:
      {//  const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
      const index = state.fav.findIndex((meal) => meal === action.mealId);
      console.log("index", index);
      if (index >= 0) {
        let updatedFavMeals = JSON.parse(JSON.stringify(state.fav));

        updatedFavMeals.splice(index, 1);

        AsyncStorage.setItem("favList", JSON.stringify(updatedFavMeals));
        return { ...state, fav: updatedFavMeals };
      } else {
        console.log("new");
        const meal = state.meals.find((meal) => meal.id === action.mealId);
        const mealId = action.mealId;
        let favIdData = JSON.parse(JSON.stringify(state.fav));
        favIdData.push(mealId);
        AsyncStorage.setItem("favList", JSON.stringify(favIdData));
        return { ...state, fav: favIdData };
      }
    }
    case SET_FILTERS:
     { const appliedFilters = action.filter;
      const updatedFilteredMeals = state.meals.filter((meal) => {
        if (appliedFilters.glutonFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals: updatedFilteredMeals };
    }
    case UPDATE_FAV_DATA:
     { const itemData = action.data;

      console.log("data  tpe", itemData);
      return {
        ...state,
        fav: itemData,
      };
    }
    default:
      return state;
  }

  return state;
};

export default mealsReducer;
