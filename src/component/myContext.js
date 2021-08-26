import React, { createContext, useContext, useReducer } from "react";
const MyContext = createContext();

export const Provider = ({ reducer, initialState, children }) => (
  <MyContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </MyContext.Provider>
);
export default MyContext;

export const initialState = {
  value: 1,
};

export const reducer = (state, action) => {
  console.log("action", action);
  console.log("state", state);
  switch (action.type) {
    case "ADD":
      return {
        value: state.value + 1,
      };
    case "DEC":
      return {
        value: state.value - 1,
      };
  }
};

export const useContextValues = () => useContext(MyContext);
