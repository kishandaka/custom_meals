export const TOGGEL_FAVORITE = "toggel_favorite";
export const SET_FILTERS = "set_filters";
export const UPDATE_FAV_DATA = "UPDATE_FAV_DATA";

export const toggleFavorite = (payload) => {
  return {
    type: TOGGEL_FAVORITE,
    mealId: payload,
  };
};

export const setFilters = (filterSettings) => {
  console.log("action", filterSettings);
  return (dispatch) => {
    dispatch({ type: SET_FILTERS, filter: filterSettings });
  };
};

// export const updateFavData = (itemData) => {
//   return {
//     type: UPDATE_FAV_DATA,
//     data: itemData,
//   };
// };

export const updateFavData = (itemData) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_FAV_DATA, data: itemData });
  };
};
