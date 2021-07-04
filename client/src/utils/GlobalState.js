import React, { useContext, createContext, useReducer } from "react";

const stateContext = createContext();
const { Provider } = stateContext;

const reducer = (state, action) => {
  switch (action.type) {
    case "set-pickups":
      return { ...state, pickups: action.payload };

    case "new-pickup":
      return { ...state, pickups: state.pickups.concat(action.payload) };

    case "open-details":
      const updatepickups = state.pickups.map((order) => {
        if (order._id === action.id) {
          return { ...order, showDetails: !order.showDetails };
        }
        return { ...order, showDetails: false };
      });
      return { ...state, pickups: updatepickups };

    case "set-completed":
      return { ...state, completedPage: !state.completedPage };

    case "open-new-pickup":
      return { ...state, openNewPickup: !state.openNewPickup };

    default:
      break;
  }
};

const StateProvider = ({ value = false, ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    //state goes here
    pickups: [],
    completedPage: false,
    openNewPickup: false,
  });
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStateContext = () => {
  return useContext(stateContext);
};

const authContext = createContext({
  authData: {
    isAuthenticated: null,
    loading: true,
    user: null,
  },
  setAuth: () => {},
});

export { StateProvider, useStateContext, authContext };
