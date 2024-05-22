import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import CustomButton from '../../components/JobBoardComponents/CustomButton';
import JobCard from '../../components/JobBoardComponents/JobCard';
import ListBox from '../../components/JobBoardComponents/ListBox';
import { jobs } from '../../utils/data';
import SubscribeCard from '../../components/JobBoardComponents/SubscribeCard';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  datePosted: string;
  type: string;
  description: string;
  requirements: string;
}

const JobListings: React.FC = () => {
  const [sort, setSort] = useState<string>('Newest');
  const [page, setPage] = useState<number>(1);
  const [numPage, setNumPage] = useState<number>(1);
  const [recordCount, setRecordCount] = useState<number>(0);
  const [data, setData] = useState<Job[]>([]);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [jobLocation, setJobLocation] = useState<string>('');
  const [filterJobTypes, setFilterJobTypes] = useState<string[]>([]);
  const [filterExp, setFilterExp] = useState<string[]>([]);

  const [isFetching, setIsFetching] = useState<boolean>(false);

  const location = useLocation();
  const navigate = useNavigate();

  const filterJobs = (val: string) => {
    if (filterJobTypes?.includes(val)) {
      setFilterJobTypes(filterJobTypes.filter((el) => el !== val));
    } else {
      setFilterJobTypes([...filterJobTypes, val]);
    }
  };

  return (
    <div>
      <div className="container mx-auto flex gap-2 2xl:gap-5 md:px-2 py-0 md:py-2 ">
        <div className="w-full px-5 md:px-0">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm md:text-base">
              Showing: <span className="font-semibold">1,902</span> Jobs
              Available
            </p>

            <div className="flex flex-col md:flex-row gap-0 md:gap-2 md:items-center">
              <p className="text-sm md:text-base">Sort By:</p>

              <ListBox sort={sort} setSort={setSort} />
            </div>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* {jobs.map((job: Job, index: number) => ( */}
            {jobs.map((job, index) =>
              index === 1 ? (
                <SubscribeCard key="subscribe" />
              ) : (
                <JobCard job={job} key={index} />
              ),
            )}
          </div>

          {/* pagination  */}
          <div className="flex flex-col items-end my-12">
            <div className="flex text-gray-700">
              <div className="flex h-8 font-medium rounded-full bg-gray-200">
                <div className="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
                  1
                </div>
                <div className="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full bg-[#FFDE7F] text-black ">
                  2
                </div>
                <div className="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
                  ...
                </div>
                <div className="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
                  13
                </div>
                <div className="w-8 h-8 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-[#FFDE7F] text-black">
                  2
                </div>
              </div>
              <div className="h-8 w-8 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer   bg-[#E7E6E6] text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-left w-6 h-6"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </div>
              <div className="h-8 w-8 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer bg-[#E7E6E6] text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-right w-6 h-6"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </div>
          </div>

          {numPage > page && !isFetching && (
            <div className="w-full flex items-center justify-center pt-16">
              <CustomButton
                title="Load More"
                containerStyles={`text-blue-600 py-1.5 px-5 focus:outline-none hover:bg-blue-700 hover:text-white rounded-full text-base border border-blue-600`}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobListings;
