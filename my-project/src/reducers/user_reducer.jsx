const initialState = {
  isLoggedIn: false,
  authToken: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        isLoggedIn: true,
        authToken: action.payload.authToken,
      };
    case 'LOGOUT_SUCCESS':
      return {
        isLoggedIn: false,
        authToken: null,
      };
    default:
      return state;
  }
}
