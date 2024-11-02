import React from 'react';
import Navigation from './Navigation';

function Layout({ children }) {
  return (
    <div className="min-h-full">
      <Navigation />

      <main>{children}</main>
    </div>
  );
}

export default Layout;
