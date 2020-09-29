import React from 'react';
import Navbar from '../Navbar';
import './Layout.styles.css';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="container">{children}</main>
    </>
  );
}

export default Layout;
