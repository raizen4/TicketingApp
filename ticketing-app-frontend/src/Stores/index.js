import React, { useReducer, createContext } from "react";

export const UserStore = createContext();

const initialValues = {
    tickets: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TICKET":
      return {
        ...state,
        tickets: [{...action.payload}, ...state.tickets]
      };
  }
};

export const UserStoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  return <UserStore.Provider value={[state, dispatch]}>{props.children}</UserStore.Provider>;
};
