import React from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Register = () => {
  const [phone, setPhone] = React.useState('');

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
                  Register with us.
                </h1>
                <p className="text-sm">Explore open career opportunities</p>
                <div className="w-full mt-4 flex flex-col items-center">
                  <form
                    className="form-horizontal mx-auto w-full max-w-md signup"
                    method="POST"
                    action="#"
                  >
                    <div className="flex flex-col mt-4">
                      <input
                        id="email"
                        type="text"
                        className="flex-grow h-8 px-2 py-5 border rounded border-grey-400"
                        name="email"
                        placeholder="Email"
                      />
                      <input
                        id="password"
                        type="password"
                        className="flex-grow h-8 px-2 py-5 border rounded border-grey-400 mt-5"
                        name="password"
                        placeholder="Password"
                      />
                    </div>
                    <PhoneInput
                      className="number flex-grow border w-full rounded border-grey-400 mt-5"
                      country={'us'}
                      value={phone}
                      onChange={(phone) => setPhone(phone)}
                    />
                    <div className="flex flex-col mt-4"></div>
                    <button
                      type="submit"
                      className="bg-[#04ade6] hover:bg-blue-700 text-white text-sm font-semibold py-2 w-full rounded"
                    >
                      Register
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
                <p>
                  <Link to="register" style={{ color: '#03ace6' }}>
                    Can’t sign in?
                  </Link>
                </p>
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

export default Register;
