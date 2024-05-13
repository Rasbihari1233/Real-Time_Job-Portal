import React, { ReactNode } from 'react';
import Navbar from '../components/UserPanelComponents/Navbar/Navbar';
import Footer from '../components/UserPanelComponents/Footer/Footer';

const UserLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <Navbar />
      <main>
        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UserLayout;
