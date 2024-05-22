import { GoArrowLeft } from 'react-icons/go';
import { Link } from 'react-router-dom';

const Registration_Success = () => {
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
              <div className="flex flex-col flex-1 justify-center mb-8">
                <img
                  className="text-center"
                  src="/assets/jobs/logo.svg"
                  width={68}
                  height={65}
                  alt=""
                />
                <h1 className="text-3xl font-semibold mt-5 text-black">
                  Registration Successfully
                </h1>

                <p className="mt-4 text-sm">
                  Congratulations! Your registration was successful.
                </p>
                <p className="mt-2 text-sm">
                  <span className="font-bold text-black">
                    Please check your email and verify your account to
                  </span>{' '}
                  unlock the full potential of job opportunities. Best of luck
                  on your career journey!
                </p>
                <div className="w-full mt-4 flex flex-col items-center">
                  <div className="text-center mt-4 w-full">
                    <button
                      type="submit"
                      className="bg-[#04ade6] hover:bg-blue-700 w-full text-white text-sm font-semibold py-2 w-full rounded"
                    >
                      Continue with Email
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration_Success;
