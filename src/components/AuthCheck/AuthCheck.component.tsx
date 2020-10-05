import React from 'react';
import { useAuth } from '../../providers/Auth';

const AuthCheck = ({ children }: any) => {
  const { authenticated } = useAuth();
  return authenticated ? <>{children}</> : <></>;
};

export default AuthCheck;
