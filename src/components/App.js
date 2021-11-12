// Libraries
import React, { useState } from 'react';
import { Route, Redirect } from "react-router-dom";
import PrivateRoute from './PrivateRoute';

// Styled Components
import styled from 'styled-components';

// Components
import Header from './Header';
import LambdaHeader from './LambdaHeader';
import View from './View';
import Login from './Login';
import Logout from './Logout';

// Context
import LoginContext from "../contexts/LoginContext";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginStatus = () => {
    localStorage.getItem("token") ? setIsLoggedIn(true) : setIsLoggedIn(false);
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, loginStatus }}>
      <AppContainer>
        <LambdaHeader />
        <Header />
        <RouteContainer>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route exact path="/view">
            <View />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </RouteContainer>
      </AppContainer>
    </LoginContext.Provider>
  );
};

export default App;

//Task List
//1. Create and import PrivateRoute component.
//2. Create a Route for Login pointing to '/login.'
//3. Create a PrivateRoute for View component point to '/view.'
//4. Create a PrivateRoute for Logout component pointing to '/logout.'


const AppContainer = styled.div`
  height: 100%;
`;
const RouteContainer = styled.div`
  display: flex;
  height: 85%;
  align-items: center;
  flex-direction: column;
`;
