import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { GoArrowLeft } from 'react-icons/go';
import { Link } from 'react-router-dom';

const Otp = () => {
  const [otp, setOtp] = useState('');
  return (
    <>
      {/* component */}
      <div className=" p-0 m-0 h-screen w-screen">
        <div className="flex flex-col items-center flex-1 h-full justify-center">
          <div
            className="flex rounded-lg shadow-lg w-full  bg-white sm:mx-0"
            style={{ height: '100vh' }}
          >
            <div
              className="hidden md:block md:w-1/2 rounded-r-lg"
              style={{
                background: 'url(/assets/jobs/leftImage.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
              }}
            />
            <div className="flex flex-col max-w-100 mx-auto w-full md:w-1/2 p-4">
              <p
                className="font-normal flex content-center items-center mt-5"
                style={{ color: '5E6368' }}
              >
                <GoArrowLeft className="mr-3 font-normal" />
                <span className="text-sm ">Go Back</span>
              </p>

              <div className="flex flex-col flex-1 justify-center mb-8">
                <img
                  className="text-center"
                  src="/assets/jobs/logo.svg"
                  width={68}
                  height={65}
                  alt=""
                />
                <h1 className="text-3xl font-semibold mt-5 text-black">
                  Password Reset
                </h1>
                <p className="text-sm">
                  We sent a code to{' '}
                  <span className="font-bold text-black">
                    samplemail@gmail.com
                  </span>
                </p>
                <div className="w-full mt-4 flex flex-col items-center">
                  <form
                    className="form-horizontal mx-auto w-full max-w-md"
                    method="POST"
                    action="#"
                  >
                    <div className="text-3xl otp-input">
                      <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={4}
                        renderSeparator={<span> </span>}
                        renderInput={(props) => (
                          <input
                            {...props}
                            className="flex-1 border-2 border-gray-300 rounded-md text-center text-4xl h-16"
                          />
                        )}
                      />
                    </div>
                    <div className="flex flex-col mt-4"></div>
                    <button
                      type="submit"
                      className="bg-[#04ade6] hover:bg-blue-700 text-white text-sm font-semibold py-2 w-full rounded"
                    >
                      Continue
                    </button>
                  </form>
                  <div className="text-center mt-4">
                    <a
                      className="no-underline hover:underline text-blue-dark text-xs"
                      href="#"
                    >
                      Didn’t receive the email?{' '}
                      <span className="font-bold text-black">
                        Click here to resend
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <p className="text-sm font-normal  text-center mb-8">
                Don’t have an account yet?{' '}
                <Link to="/register" style={{ color: '#03ace6' }}>
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;
