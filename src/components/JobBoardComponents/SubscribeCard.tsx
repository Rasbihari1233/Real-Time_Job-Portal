const SubscribeCard = () => {
  return (
    <>
      <div className="w-full md:min-h-[20rem] bg-white flex flex-col justify-between shadow-lg rounded-lg  px-3 py-3  lg:px-5 lg:py-5 xl:px-10 xl:py-10 mb-4 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
        <p className="font-bold text-base text-white">
          Be one of the first to see new jobs in <br /> Transparent Era
        </p>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Email"
          required
        />
        <div className="flex items-center justify-between gap-5">
          <button className="btn w-full p-2 font-medium lg:font-bold rounded text-base bg-[#04ADE6] text-[#FAFAFA] whitespace-nowrap">
            Subscribe
          </button>
          <button className="btn w-full p-2 rounded text-base whitespace-nowrap text-white">
            I’ll do it later. Hide for now.
          </button>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default SubscribeCard;
