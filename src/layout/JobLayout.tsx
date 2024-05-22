import React, { ReactNode } from 'react';
import Footer from '../components/JobBoardComponents/Footer/Footer';
import Navbar from '../components/JobBoardComponents/Navbar/Navbar';

const JobLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      <main>
        <div className="mt-50 mx-auto bg-white max-w-screen-2xl">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobLayout;
