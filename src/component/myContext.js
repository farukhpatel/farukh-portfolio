import React, { createContext, useContext, useReducer } from "react";
const MyContext = createContext();

export const Provider = ({ reducer, initialState, children }) => (
  <MyContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </MyContext.Provider>
);
export default MyContext;

export const initialState = {
  name: "Farukh",
};

export const reducer = (state, action) => {
  console.log(action);
  //   switch (action.type) {
  //     case "ADD":
  //       return {
  //         ...state,
  //         userid: action.payload.id,
  //         name: action.payload.name,
  //       };
  //   }
};

export const useContextValues = () => useContext(MyContext);
