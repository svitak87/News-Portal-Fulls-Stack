export const GET_ALL_APPLE_NEWS = "GET_ALL_NEWS";
export const GET_ALL_TESLA_NEWS = "GET_ALL_TESLA_NEWS";
export const GET_ALL_US_BUSSINESS = "GET_ALL_US_BUSSINESS";
export const GET_ALL_TECH_CRUNCH_NEWS = "GET_ALL_TECH_CRUNCH_NEWS";
export const GET_ALL_WALL_STREET_JOURNAL_NEWS =
  "GET_ALL_WALL_STREET_JOURNAL_NEWS";
export const GET_WORLD_NEWS = "GET_WORLD_NEWS";
export const GET_DOLLAR_RATES = "GET_DOLLAR_RATES";
export const GET_ARGENTINA_NEWS = "GET_ARGENTINA_NEWS";
export const CREATE_USER = "CREATE_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const IS_LOGUED = "IS_LOGUED";
export const SUBMIT_CONTACT = "SUBMIT_CONTACT";
export const GOOGLE_AUTH = "GOOGLE_AUTH";

import axios from "axios";

// export const googleAuth = () => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get("http://localhost:3000/api/auth/google/callback")
//       const data = response.data;
//       dispatch({type: GOOGLE_AUTH, payload: data})
//     } catch (error){
//       console.log(error.message)
//     }
//   }
// }

// export const googleAuth = () => {
//   return async (dispatch) => {
//     try {
//       const response = await fetch("http://localhost:3000/api/auth/google/callback", {
//         method: "GET",
//         credentials: "include" // Asegúrate de incluir las credenciales para permitir el envío de cookies
//       });
//       const data = await response.json();
//       dispatch({ type: GOOGLE_AUTH, payload: data });
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
// };


export const googleAuth = () => {
  return async (dispatch) => {
    try {
     window.location.href = "http://localhost:3000/api/auth/google";
    } catch (error) {
      console.log(error.message);
    }
  };
};


export const submitContact = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`http://localhost:3000/api/contact`, userData)
      const data = response.data;
      dispatch({ type: SUBMIT_CONTACT, payload: data })
    } catch (error) {
      let errorMessage;
      if(error.response.status === 500){
        if(error.response){
          errorMessage = "Error al enviar el correo electrónico"
        }
      }
    }
  }
}

export const logued = (token) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:3000/api/user`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        },
      });
      const result = await response.json();
      dispatch({ type: IS_LOGUED, payload: result });
    } catch (error) {
      console.log(error)
    }
  };
};

export const logOutUser = (token) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:3000/api/user`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Error logging out");
      }
      const result = await response.json();
      dispatch({ type: LOGOUT_USER, payload: result });
    } catch (error) {
      console.log(error);
    }
  };
};

export const loginUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`http://localhost:3000/api/login`, userData);
      const data = response.data;
      dispatch({ type: LOGIN_USER, payload: data });
    } catch (error) {
      let errorMessage = "An unexpected error occurred";
      if (error.response) {
        if (error.response.status === 403) {
          errorMessage = "Invalid credentials";
        } else if (error.response.status === 401) {
          errorMessage = "Email doesn't exist";
        }
      }
      throw new Error(errorMessage);
    }
  };
};

export const createUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/suscription`,
        userData
      );
      const data = response.data;
      dispatch({ type: CREATE_USER, payload: data });
    } catch (error) {
      if (error.response && error.response.status === 403) {
        throw Error("user already exists");
      } else if (error.response && error.response.status === 500) {
        throw Error("Internal server error");
      }
    }
  };
};

export const getArgentinaNews = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/argentina_news"
      );
      dispatch({ type: GET_ARGENTINA_NEWS, payload: response.data });
    } catch (error) {
      if (error.message && error.response.status === 500) {
        return { error: error.response };
      }
    }
  };
};

export const getDollarRates = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/dollar_exchange_rates"
      );
      dispatch({ type: GET_DOLLAR_RATES, payload: response.data });
    } catch (error) {
      if (error.message && error.response.status === 500) {
        return { error: error.response };
      }
    }
  };
};

export const getWorldNews = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3000/api/world_news");
      dispatch({ type: GET_WORLD_NEWS, payload: response.data });
    } catch (error) {
      if (error.message && error.response.status === 500) {
        return { error: error.response };
      }
    }
  };
};

export const getWallStreetJournalNews = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/wall_street_journal_news"
      );
      dispatch({
        type: GET_ALL_WALL_STREET_JOURNAL_NEWS,
        payload: response.data,
      });
    } catch (error) {
      if (error.message && error.response.status === 500) {
        return { error: error.response };
      }
    }
  };
};

export const getAllAppleNews = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/apple_news`);
      dispatch({ type: GET_ALL_APPLE_NEWS, payload: response.data });
    } catch (error) {
      if (error.message && error.response.status === 500) {
        return { error: error.response };
      }
    }
  };
};

export const getAllTeslaNews = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/tesla_news`);
      dispatch({ type: GET_ALL_TESLA_NEWS, payload: response.data });
    } catch (error) {
      if (error.message && error.response.status === 500) {
        return { error: error.response };
      }
    }
  };
};

export const getAllUsBussinessNews = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/us_bussiness`
      );
      dispatch({ type: GET_ALL_US_BUSSINESS, payload: response.data });
    } catch (error) {
      if (error.message && error.response.status === 500) {
        return { error: error.response };
      }
    }
  };
};

export const getAllTechCrunchNews = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/tech_crunch_news"
      );
      dispatch({ type: GET_ALL_TECH_CRUNCH_NEWS, payload: response.data });
    } catch (error) {
      if (error.message && error.response.status === 500) {
        return { error: error.response };
      }
    }
  };
};
