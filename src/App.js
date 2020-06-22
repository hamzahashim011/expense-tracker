import React from 'react';
import {Header} from './components/Header' ;
import {Balance} from './components/Balance' ;
import {IncomeExpence} from './components/IncomeExpence' ;
import {TransectionLists} from './components/TransectionLists' ;
import {AddTransection} from './components/AddTransection' ;
import {GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider className="App">
      <Header />
      <Balance />
      <IncomeExpence />
      <TransectionLists />
      <AddTransection />

    </GlobalProvider>
  );
}

export default App;
