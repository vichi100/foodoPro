import { ACTION_TYPES } from "./ActionType";

const initialState = {
  restaurantDetails: null,
  userDetails: {},
  promotionType: null
};
const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_RESTAURANT_DETAILS:
      // // console.log("SET_RESTAURANT_DETAILS");
      return {
        ...state,
        restaurantDetails: action.payload
      };

    case ACTION_TYPES.SET_PROMOTION_TYPE:
      // // console.log("SET_PROMOTION_TYPE");
      return {
        ...state,
        promotionType: action.payload
      };

    default:
      // console.log("Default");
      return state;
  }
};
export default AppReducer;
