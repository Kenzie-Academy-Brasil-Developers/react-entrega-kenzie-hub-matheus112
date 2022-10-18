import './App.css';
import RoutesMain from "./routes"
import  GlobalStyle  from './globalS/globalStyle'
import React from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './Contexts/AuthContexts';
import TechProvider from './Contexts/TechContexts';
function App() {
  return (
    <main>
      <GlobalStyle/>
        <AuthProvider>
          <TechProvider>
            <RoutesMain/>
          </TechProvider>
        </AuthProvider>
      <ToastContainer />
    </main>
  );
}

export default App;
