import React, { ReactNode } from 'react';
import Navbar from '../components/UserPanelComponents/Navbar/Navbar';
import Footer from '../components/UserPanelComponents/Footer/Footer';

const UserLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      <main>
        <div className="mx-auto bg-white max-w-screen-2xl">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default UserLayout;
