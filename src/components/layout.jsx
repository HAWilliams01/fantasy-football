import React from 'react';
import Navigation from './navigation';

function Layout({ children }) {
  return (
    <div className="min-h-full bg-gray-900">
      <Navigation />

      <main>{children}</main>
    </div>
  );
}

export default Layout;
