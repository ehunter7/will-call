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
        return order;
      });
      return { ...state, pickups: updatepickups };

      case "set-completed":
        return {...state, completedPage: !state.completedPage};

    default:
      break;
  }
};

const StateProvider = ({ value = false, ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    //state goes here
    pickups: [],
    completedPage: false,
  });
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStateContext = () => {
  return useContext(stateContext);
};

export { StateProvider, useStateContext };
