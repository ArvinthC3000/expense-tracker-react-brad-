import React, { useReducer } from 'react';
import AppReducer from './AppReducer';
import GlobalContext from './GlobalContext';

// Provider Component

const GlobalState = props => {
  // Initial state
  const initialState = {
    transactions: [
      { id: 1, text: 'Flower', amount: -20 },
      { id: 2, text: 'Salary', amount: 300 },
      { id: 3, text: 'Book', amount: -10 },
      { id: 4, text: 'Camera', amount: 150 },
    ],
  };

  const [state] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
      }}>
      {props.childern}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
