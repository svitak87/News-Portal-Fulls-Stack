import {
  GET_ALL_APPLE_NEWS,
  GET_ALL_TECH_CRUNCH_NEWS,
  GET_ALL_TESLA_NEWS,
  GET_ALL_US_BUSSINESS,
  GET_ALL_WALL_STREET_JOURNAL_NEWS,
  GET_WORLD_NEWS,
  GET_DOLLAR_RATES,
  GET_ARGENTINA_NEWS,
  CREATE_USER,
  LOGIN_USER,
  LOGOUT_USER,
  IS_LOGUED,
  SUBMIT_CONTACT,
  GOOGLE_AUTH
} from "./actions";

const initialState = {
  user: null,
  token: null,
  appleNews: [],
  teslaNews: [],
  usBusiness: [],
  techCrunch: [],
  wallStreetJournal: [],
  worldNews: [],
  dollarRates: [],
  argentinaNews: [],
  message: []
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GOOGLE_AUTH:
      console.log("El nuevo estado de usuario", state.token)
      return {
        ...state,
        token: payload.token
      }
    case SUBMIT_CONTACT:
      return {
        ...state,
        message: payload
      }
    case IS_LOGUED:
      return{
        ...state,
        user: payload
      }
    case LOGOUT_USER:
      return{
        ...state,
        token: null,
        user: null
      }
    case LOGIN_USER:
      return {
        ...state,
        user: payload.user,
        token: payload.token
      };
    case CREATE_USER:
      return {
        ...state,
        user: payload
      }
    case GET_ALL_APPLE_NEWS:
      return {
        ...state,
        appleNews: payload,
      };
    case GET_ALL_TESLA_NEWS:
      return {
        ...state,
        teslaNews: payload,
      };
    case GET_ALL_US_BUSSINESS:
      return {
        ...state,
        usBusiness: payload,
      };
    case GET_ALL_TECH_CRUNCH_NEWS:
      return {
        ...state,
        techCrunch: payload,
      };
    case GET_ALL_WALL_STREET_JOURNAL_NEWS:
      return {
        ...state,
        wallStreetJournal: payload,
      };
    case GET_WORLD_NEWS:
      return {
        ...state,
        worldNews: payload,
      };
    case GET_DOLLAR_RATES:
      return {
        ...state,
        dollarRates: payload,
      };
    case GET_ARGENTINA_NEWS:
      return {
        ...state,
        argentinaNews: payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
