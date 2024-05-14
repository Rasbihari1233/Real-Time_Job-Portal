import React, { ReactNode } from 'react';
import Navbar from '../components/JobBoardComponents/Navbar/Navbar';
import Footer from '../components/JobBoardComponents/Footer/Footer';

const JobLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
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

export default JobLayout;
