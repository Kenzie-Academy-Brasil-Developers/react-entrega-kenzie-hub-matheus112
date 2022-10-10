import './App.css';
import RoutesMain from "./routes"
import  GlobalStyle  from './globalS/globalStyle'
import React from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <main>
    <GlobalStyle/>
    <RoutesMain/>
    <ToastContainer />
    </main>
  );
}

export default App;
