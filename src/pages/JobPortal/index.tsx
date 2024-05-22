import React from 'react';
import { Link } from 'react-router-dom';
import { MdEdit, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { MdFileDownload } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa6';
import JobLayout from '../../layout/JobLayout';
import JobListings from './JobListings';
import { experience, jobTypes } from '../../utils/data';
import { BsStars } from 'react-icons/bs';
import { BiBriefcaseAlt2 } from 'react-icons/bi';
import Categories from './Categories';

const JobPortal = () => {
  const [activeTab, setActiveTab] = React.useState('personal');
  const [isEditMode, setIsEditMode] = React.useState(false);

  const toggleEditMode = () => {
    setIsEditMode((prevMode) => !prevMode);
  };

  return (
    <JobLayout>
      <div className="wrapper py-15 bg-[#ebf0f9]">
        <div className="container mx-auto sm:px-10">
          <Categories />
          <div className="grid grid-cols-12 gap-8 ">
            <div className="col-span-12 lg:col-span-3 md:col-span-5 min-w-50">
              <div className="bg-white rounded  p-4 mb-4 shadow-md min-h-screen">
                <div className=" flex-col h-fit bg-white shadow-sm">
                  <p className="text-lg font-semibold text-slate-600">
                    Filter Search
                  </p>

                  <div className="py-2">
                    <div className="flex justify-between mb-3">
                      <p className="flex items-center gap-2 font-semibold">
                        <BiBriefcaseAlt2 />
                        Job Type
                      </p>

                      <button>
                        <MdOutlineKeyboardArrowDown />
                      </button>
                    </div>

                    <div className="flex flex-col gap-2">
                      {jobTypes.map((jtype, index) => (
                        <div
                          key={index}
                          className="flex gap-2 text-sm md:text-base "
                        >
                          <input
                            type="checkbox"
                            value={jtype}
                            className="w-4 h-4"
                            // onChange={(e) => filterJobs(e.target.value)}
                          />
                          <span>{jtype}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="py-2 mt-4">
                    <div className="flex justify-between mb-3">
                      <p className="flex items-center gap-2 font-semibold">
                        <BsStars />
                        Experience
                      </p>

                      <button>
                        <MdOutlineKeyboardArrowDown />
                      </button>
                    </div>

                    <div className="flex flex-col gap-2">
                      {experience.map((exp) => (
                        <div key={exp.title} className="flex gap-3">
                          <input
                            type="checkbox"
                            value={exp?.value}
                            className="w-4 h-4"
                            // onChange={(e) => filterExperience(e.target.value)}
                          />
                          <span>{exp.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
            <div className="col-span-12 lg:col-span-9 md:col-span-7 ">
              <div className="rounded">
                <JobListings />
              </div>
            </div>
          </div>
        </div>
      </div>
    </JobLayout>
  );
};

export default JobPortal;
