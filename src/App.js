import React from 'react';
import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import GlobalState from './context/GlobalState';

const App = () => {
  // console.log(GlobalState());
  console.log(GlobalState);
  console.log(<GlobalState></GlobalState>);
  return (
    <GlobalState>
      <>
        <Header />
        <div className='container'>
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </>
    </GlobalState>
  );
};

export default App;
