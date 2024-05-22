import { GoLocation } from 'react-icons/go';
import moment from 'moment';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
  return (
    <>
      <Link to={`/job-detail/${job?.id}`}>
        <div className="w-full md:min-h-[20rem] bg-white flex flex-col justify-between shadow-lg rounded-lg px-3 py-3  lg:px-5 lg:py-5 xl:px-10 xl:py-10 mb-4">
          <div className="flex gap-3  justify-between ">
            <div className="">
              <p className="text-base text-black font-semibold truncate">
                {job?.jobTitle}
              </p>
              <p className="  py-0.5 pr-1.5 rounded font-normal text-sm">
                {job?.jobType}
              </p>
              {/* <span className="flex gap-2 items-center">
                <GoLocation className="text-slate-900 text-sm" />
                {job?.location}
              </span> */}
            </div>
            <img
              src={job?.company?.profileUrl}
              alt={job?.company?.name}
              className="w-7 h-10"
            />
          </div>

          <div className="py-3">
            <p className="text-sm font-normal leading-6">
              {job?.detail[0]?.desc?.slice(0, 150) + '...'}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <p className=" py-0.5 px-1.5 rounded font-normal text-sm">
              <span className="text-2xl font-bold text-black">$2K</span>/month
            </p>
            <span className="text-gray-500 text-sm">
              {moment(job?.createdAt).fromNow()}
            </span>
          </div>
          <div className="flex items-center justify-between gap-5">
            <button
              className="btn w-full p-2 rounded text-base whitespace-nowrap"
              style={{ border: '1px solid #ced3d9' }}
            >
              View Details
            </button>
            <button className="btn w-full p-2 font-medium lg:font-bold rounded text-base bg-[#d7e9f7] text-[#04ADE6] whitespace-nowrap">
              Apply Now
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default JobCard;
