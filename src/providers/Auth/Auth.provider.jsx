import React, { useState, useEffect, useContext, useCallback } from 'react';
import { useHistory } from 'react-router';
import { AUTH_STORAGE_KEY, USERNAME, PASSWORD, mockedUser } from '../../utils/constants';
import { storage } from '../../utils/storage';

const AuthContext = React.createContext(null);

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY);
    const isAuthenticated = Boolean(lastAuthState);

    setAuthenticated(isAuthenticated);
    if (isAuthenticated) setUser(mockedUser);
  }, []);

  const login = useCallback(
    (username, password) => {
      if (username === USERNAME && password === PASSWORD) {
        setAuthenticated(true);
        storage.set(AUTH_STORAGE_KEY, true);
        setUser(mockedUser);
        history.push('/');
      } else {
        setAuthenticated(false);
        storage.set(AUTH_STORAGE_KEY, false);
        setUser({});
        history.push('/login');
      }
    },
    [history]
  );

  const logout = useCallback(() => {
    setAuthenticated(false);
    storage.set(AUTH_STORAGE_KEY, false);
    setUser({});
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, authenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
