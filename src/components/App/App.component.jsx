import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import YoutubeContext from '../../providers/Youtube';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import WatchPage from '../../pages/Watch';
import FavoritesPage from '../../pages/Favorites';
import Private from '../Private';
import Layout from '../Layout';

function App() {
  const [videos, setVideos] = useState([]);
  return (
    <BrowserRouter>
      <AuthProvider>
        <YoutubeContext.Provider value={{ videos, setVideos }}>
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Private exact path="/favorites">
                <FavoritesPage />
              </Private>
              <Route path="/watch/:videoId">
                <WatchPage />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </YoutubeContext.Provider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
