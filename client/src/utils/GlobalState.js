import React, {createContext, useReducer, useContext } from "react";
import {
  GET_EMPLOYEES,
  ADD_EMPLOYEES,
  REMOVE_EMPLOYEES,
  UPDATE_EPLOYEES,
  SAVING
} from "./actions"
// Don't forget to import all of your actions!
const StoreContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {});

  return "PROVIDER ELEMENT HERE";
};

const useStoreContext = () => {};

export { StoreProvider, useStoreContext };
