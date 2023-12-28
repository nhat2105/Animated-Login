import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import { CssBaseline } from '@mui/material';
import SignInPage from './pages/SigninPage.jsx';
import WelcomePage from './pages/WelcomePage.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <CssBaseline />
        <Routes>
          <Route path = "/" element= { <SignInPage />}></Route>
          <Route path="/welcome" element={<WelcomePage />} />
        </Routes>
      </Router>
     
    </>
  );
}

export default App;
