const initialState = {
  isAuth: null,
  loading: null,
  user: { username: null, headColor: "white", bodyColor: "blue" }
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_USER_SUCCESS": {
      return {
        ...state,
        isAuth: true,
        user: action.payload,
        loading: false
      };
    }
    case "LOAD_USER_FAIL": {
      return {
        ...state,
        isAuth: false,
        loading: false
      };
    }
    case "SET_LOADING": {
      return {
        ...state,
        loading: true
      };
    }
    case "UPDATE_BODY_COLOR": {
      return {
        ...state,
        user: { ...state.user, bodyColor: action.payload }
      };
    }
    case "UPDATE_HEAD_COLOR": {
      return {
        ...state,
        user: { ...state.user, headColor: action.payload }
      };
    }
    case "UPDATE_USER": {
      return {
        ...state,
        loading: false,
        user: action.payload
      };
    }
    case "CREATE_USER": {
      return {
        ...state,
        loading: false,
        user: action.payload
      };
    }
    default:
      return state;
  }
};

export default authReducer;
