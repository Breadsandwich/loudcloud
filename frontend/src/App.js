import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage/SplashPage";
import MainPage from "./components/MainPage/MainPage";
import { restoreUser } from "./store/session";
import ProfilePage from './components/ProfilePage/ProfilePage'
import NotFound from "./components/NotFound";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const loggedIn = useSelector((state) => state.session.user);





  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded}  loggedIn={loggedIn} />
      {isLoaded && (
        <Switch>
          <Route path='/' exact>
            {loggedIn ? <MainPage /> : <SplashPage isLoaded={isLoaded} />}

          </Route>

          <Route path={`/profile/:id`}>
            <ProfilePage />
          </Route>

          <Route>
            <NotFound path='/' />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
