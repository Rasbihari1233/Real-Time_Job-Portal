import React, { ReactNode } from 'react';
import Navbar from '../components/ProfileComponents/Navbar/Navbar';
import Footer from '../components/ProfileComponents/Footer/Footer';

const ProfileLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
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

export default ProfileLayout;
