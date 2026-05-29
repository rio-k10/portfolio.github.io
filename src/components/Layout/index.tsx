import React from 'react';
import NavBar from '../NavBar';

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className='layout'>
      <NavBar />
      <main className='content'>{children}</main>
    </div>
  );
}

export default Layout;
