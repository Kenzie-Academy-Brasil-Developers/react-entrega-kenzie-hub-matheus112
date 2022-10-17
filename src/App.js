import './App.css';
import RoutesMain from "./routes"
import  GlobalStyle  from './globalS/globalStyle'
import React from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './Contexts/AuthContexts';
function App() {
  return (
    <main>
      <GlobalStyle/>
      <AuthProvider>
        <RoutesMain/>
      </AuthProvider>
      <ToastContainer />
    </main>
  );
}

export default App;
