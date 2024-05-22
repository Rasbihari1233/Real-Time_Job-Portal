import { useEffect, useState } from 'react';
import moment from 'moment';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { jobs } from '../../utils/data';
import JobCard from '../../components/JobBoardComponents/JobCard';
import CustomButton from '../../components/JobBoardComponents/CustomButton';
import JobLayout from '../../layout/JobLayout';

const JobDetail = () => {
  const params = useParams();
  const id = parseInt(params.id) - 1;
  const [job, setJob] = useState(jobs[0]);
  const [selected, setSelected] = useState('0');

  useEffect(() => {
    setJob(jobs[id ?? 0]);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [id]);

  return (
    <JobLayout>
      <div className="container mx-auto">
        <div className="w-full flex flex-col md:flex-row gap-10">
          {/* LEFT SIDE */}
          <div className="w-full h-fit md:w-2/3 2xl:2/4 bg-white px-5 py-10 md:px-10 shadow-md">
            <div className="w-full flex items-center justify-between">
              <div className="w-3/4 flex gap-2">
                {/* <img
                  src={job?.company?.profileUrl}
                  alt={job?.company?.name}
                  className="w-20 h-20 md:w-24 md:h-20 rounded"
                /> */}

                <div className="flex flex-col">
                  <p className="text-xl font-semibold text-gray-600">
                    {job?.jobTitle}
                  </p>

                  <span className="text-base">{job?.location}</span>

                  <span className="text-base text-blue-600">
                    {job?.company?.name}
                  </span>

                  <span className="text-gray-500 text-sm">
                    {moment(job?.createdAt).fromNow()}
                  </span>
                </div>
              </div>

              <div className="">
                <AiOutlineSafetyCertificate className="text-3xl text-blue-500" />
              </div>
            </div>

            <div className="w-full flex flex-wrap md:flex-row gap-2 items-center justify-between my-10">
              <div className="bg-[#F0F8FF] w-40 h-16 rounded-lg flex flex-col items-left px-3 justify-center">
                <span className="text-sm whitespace-nowrap">Job Type</span>
                <p className="text-lg font-semibold text-[#04ADE6]">
                  $ {job?.salary}
                </p>
              </div>

              <div className="bg-[#F0F8FF] w-40 h-16 rounded-lg flex flex-col items-left px-3 justify-center">
                <span className="text-sm whitespace-nowrap">Job Setup</span>
                <p className="text-lg font-semibold text-[#04ADE6]">
                  {job?.jobType}
                </p>
              </div>

              <div className="bg-[#F0F8FF] w-40 h-16 rounded-lg flex flex-col items-left px-3 justify-center">
                <span className="text-sm whitespace-nowrap">
                  Experience Level
                </span>
                <p className="text-lg font-semibold text-[#04ADE6]">
                  {job?.applicants?.length}K
                </p>
              </div>

              <div className="bg-[#F0F8FF] w-40 h-16 rounded-lg flex flex-col items-left px-3 justify-center">
                <span className="text-sm whitespace-nowrap">Salary Offer</span>
                <p className="text-lg font-semibold text-[#04ADE6]">
                  {job?.vacancies}
                  <span className="text-[#5E6368] font-light text-xs">
                    /month
                  </span>
                </p>
              </div>
            </div>

            {/* <div className="w-full flex gap-4 py-5">
              <CustomButton
                onClick={() => setSelected('0')}
                title="Job Description"
                containerStyles={`w-full flex items-center justify-center py-3 px-5 outline-none rounded-full text-sm ${
                  selected === '0'
                    ? 'bg-black text-white'
                    : 'bg-white text-black border border-gray-300'
                }`}
              />

              <CustomButton
                onClick={() => setSelected('1')}
                title="Company"
                containerStyles={`w-full flex items-center justify-center  py-3 px-5 outline-none rounded-full text-sm ${
                  selected === '1'
                    ? 'bg-black text-white'
                    : 'bg-white text-black border border-gray-300'
                }`}
              />
            </div> */}

            <div className="my-6">
              {selected === '0' ? (
                <>
                  <p className="text-xl font-medium text-black">
                    Job Decsription
                  </p>

                  <span className="text-base">{job?.detail[0]?.desc}</span>

                  {job?.detail[0]?.requirement && (
                    <>
                      <p className="text-xl font-semibold mt-8  font-medium text-black">
                        Requirement
                      </p>
                      <span className="text-base">
                        {job?.detail[0]?.requirement}
                      </span>
                    </>
                  )}
                </>
              ) : (
                <>
                  <div className="mb-6 flex flex-col">
                    <p className="text-xl text-blue-600 font-semibold">
                      {job?.company?.name}
                    </p>
                    <span className="text-base">{job?.company?.location}</span>
                    <span className="text-sm">{job?.company?.email}</span>
                  </div>

                  <p className="text-xl font-semibold">About Company</p>
                  <span>{job?.company?.about}</span>
                </>
              )}
            </div>

            <div className="inline">
              <CustomButton
                title="Apply for this position"
                containerStyles={`px-20 flex items-center justify-center text-black bg-[#FFDE7F] py-3 outline-none rounded text-base`}
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full md:w-1/3 2xl:w-1/4 p-5 mt-20 md:mt-0">
            <p className="text-gray-500 font-semibold">Similar Job Post</p>

            <div className="w-full flex flex-wrap gap-4">
              {jobs
                ?.slice(0, 6)
                .map((job, index) => <JobCard job={job} key={index} />)}
            </div>
          </div>
        </div>
      </div>
    </JobLayout>
  );
};

export default JobDetail;
