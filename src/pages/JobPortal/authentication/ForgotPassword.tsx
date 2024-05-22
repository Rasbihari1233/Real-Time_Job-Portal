const ForgotPassword = () => {
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
            <div className="flex flex-col w-full md:w-1/2 p-4">
              <div className="flex flex-col flex-1 justify-center mb-8">
                <h1 className="text-4xl text-center font-bold">
                  Forgpt Password
                </h1>
                <p className="text-center">
                  Enter your email for password reset instructions.
                </p>
                <div className="w-full mt-4">
                  <form
                    className="form-horizontal w-3/4 mx-auto"
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
                    </div>
                    <div className="flex flex-col mt-4"></div>
                    <button
                      type="submit"
                      className="bg-[#04ade6] hover:bg-blue-700 text-white text-sm font-semibold py-2 px-52 rounded"
                    >
                      Send password reset link
                    </button>
                    <span className="text-centre flex justify-center my-4">
                      Or
                    </span>
                    <button className="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke p-2 hover:bg-opacity-50 mt-2">
                      <span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_191_13499)">
                            <path
                              d="M19.999 10.2217C20.0111 9.53428 19.9387 8.84788 19.7834 8.17737H10.2031V11.8884H15.8266C15.7201 12.5391 15.4804 13.162 15.1219 13.7195C14.7634 14.2771 14.2935 14.7578 13.7405 15.1328L13.7209 15.2571L16.7502 17.5568L16.96 17.5774C18.8873 15.8329 19.9986 13.2661 19.9986 10.2217"
                              fill="#4285F4"
                            />
                            <path
                              d="M10.2055 19.9999C12.9605 19.9999 15.2734 19.111 16.9629 17.5777L13.7429 15.1331C12.8813 15.7221 11.7248 16.1333 10.2055 16.1333C8.91513 16.1259 7.65991 15.7205 6.61791 14.9745C5.57592 14.2286 4.80007 13.1801 4.40044 11.9777L4.28085 11.9877L1.13101 14.3765L1.08984 14.4887C1.93817 16.1456 3.24007 17.5386 4.84997 18.5118C6.45987 19.4851 8.31429 20.0004 10.2059 19.9999"
                              fill="#34A853"
                            />
                            <path
                              d="M4.39899 11.9777C4.1758 11.3411 4.06063 10.673 4.05807 9.99996C4.06218 9.32799 4.1731 8.66075 4.38684 8.02225L4.38115 7.88968L1.19269 5.4624L1.0884 5.51101C0.372763 6.90343 0 8.4408 0 9.99987C0 11.5589 0.372763 13.0963 1.0884 14.4887L4.39899 11.9777Z"
                              fill="#FBBC05"
                            />
                            <path
                              d="M10.2059 3.86663C11.668 3.84438 13.0822 4.37803 14.1515 5.35558L17.0313 2.59996C15.1843 0.901848 12.7383 -0.0298855 10.2059 -3.6784e-05C8.31431 -0.000477834 6.4599 0.514732 4.85001 1.48798C3.24011 2.46124 1.9382 3.85416 1.08984 5.51101L4.38946 8.02225C4.79303 6.82005 5.57145 5.77231 6.61498 5.02675C7.65851 4.28118 8.9145 3.87541 10.2059 3.86663Z"
                              fill="#EB4335"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_191_13499">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      Sign in with Google
                    </button>
                    <button className="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke p-2 hover:bg-opacity-50 mt-2">
                      <span className="mr-2">
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_388_937)">
                            <path
                              d="M24 12.5C24 18.4897 19.6116 23.4542 13.875 24.3542V15.9688H16.6711L17.2031 12.5H13.875V10.2491C13.875 9.29984 14.34 8.375 15.8306 8.375H17.3438V5.42188C17.3438 5.42188 15.9703 5.1875 14.6573 5.1875C11.9166 5.1875 10.125 6.84875 10.125 9.85625V12.5H7.07812V15.9688H10.125V24.3542C4.38844 23.4542 0 18.4897 0 12.5C0 5.87281 5.37281 0.5 12 0.5C18.6272 0.5 24 5.87281 24 12.5Z"
                              fill="#1877F2"
                            />
                            <path
                              d="M16.6711 15.9688L17.2031 12.5H13.875V10.249C13.875 9.30003 14.3399 8.375 15.8306 8.375H17.3438V5.42188C17.3438 5.42188 15.9705 5.1875 14.6576 5.1875C11.9165 5.1875 10.125 6.84875 10.125 9.85625V12.5H7.07812V15.9688H10.125V24.3542C10.736 24.45 11.3621 24.5 12 24.5C12.6379 24.5 13.264 24.45 13.875 24.3542V15.9688H16.6711Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_388_937">
                              <rect
                                width="24"
                                height="24"
                                fill="white"
                                transform="translate(0 0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <span>Continue with Facebook</span>
                    </button>
                    <button className="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke p-2 hover:bg-opacity-50 mt-2">
                      <span className="mr-2">
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_385_912)">
                            <path
                              d="M16.6185 0.5C16.6743 0.5 16.7302 0.5 16.7892 0.5C16.9262 2.19253 16.2802 3.45719 15.495 4.37301C14.7246 5.28251 13.6697 6.1646 11.9635 6.03076C11.8497 4.36247 12.4967 3.19161 13.2808 2.27789C14.008 1.42636 15.3412 0.668621 16.6185 0.5Z"
                              fill="#1E1E1E"
                            />
                            <path
                              d="M21.7836 18.1167C21.7836 18.1335 21.7836 18.1483 21.7836 18.1641C21.3041 19.6163 20.6201 20.861 19.7855 22.016C19.0235 23.0646 18.0898 24.4758 16.4225 24.4758C14.9819 24.4758 14.025 23.5494 12.5485 23.5241C10.9866 23.4988 10.1277 24.2987 8.6997 24.5C8.53635 24.5 8.373 24.5 8.21281 24.5C7.1642 24.3482 6.31793 23.5178 5.70141 22.7695C3.88347 20.5585 2.47865 17.7025 2.21729 14.0476C2.21729 13.6893 2.21729 13.332 2.21729 12.9737C2.32794 10.358 3.59892 8.23127 5.28829 7.20057C6.17987 6.65256 7.40553 6.18569 8.77031 6.39436C9.35521 6.48499 9.95276 6.68523 10.4765 6.88336C10.9729 7.07411 11.5937 7.4124 12.1817 7.39449C12.5801 7.38289 12.9763 7.17528 13.3779 7.02879C14.554 6.60408 15.7069 6.11718 17.2266 6.34588C19.053 6.62199 20.3493 7.43348 21.1502 8.68549C19.6052 9.66876 18.3838 11.1505 18.5925 13.6809C18.778 15.9794 20.1143 17.3241 21.7836 18.1167Z"
                              fill="#1E1E1E"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_385_912">
                              <rect
                                width="24"
                                height="24"
                                fill="white"
                                transform="translate(0 0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <span>Sign in with Apple</span>
                    </button>
                  </form>
                  <div className="text-center mt-4">
                    <p className="pt-0">
                      Don’t have an account yet?<a href="#">Register</a>
                    </p>
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

export default ForgotPassword;
