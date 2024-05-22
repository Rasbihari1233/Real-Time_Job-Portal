import React from 'react';
import './style.css';
import ProfileLayout from '../../layout/ProfileLayout';
import { Link } from 'react-router-dom';
import { MdEdit } from 'react-icons/md';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { MdFileDownload } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa6';

const UserProfile = () => {
  const [activeTab, setActiveTab] = React.useState('personal');
  const [isEditMode, setIsEditMode] = React.useState(false);

  const toggleEditMode = () => {
    setIsEditMode((prevMode) => !prevMode);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'personal':
        return (
          <>
            <div className="mt-3 mb-2 text-sm font-medium basic-info-text md:mx-10 mx-2">
              Basic Information
            </div>
            <div className="overflow-x-auto md:mx-10 mx-2 personal">
              <table className="table basic-info table-borderless">
                <thead>
                  <tr>
                    <th className="text-left">Last Name</th>
                    <th className="text-left">First Name</th>
                    <th className="text-left">Middle Name</th>
                    <th className="text-left">Preferred Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {isEditMode ? (
                        <input type="text" defaultValue="Doe" />
                      ) : (
                        'Doe'
                      )}
                    </td>
                    <td>
                      {isEditMode ? (
                        <input type="text" defaultValue="John" />
                      ) : (
                        'John'
                      )}
                    </td>
                    <td>
                      {isEditMode ? (
                        <input type="text" defaultValue="N/A" />
                      ) : (
                        'N/A'
                      )}
                    </td>
                    <td>
                      {isEditMode ? (
                        <input type="text" defaultValue="Joe" />
                      ) : (
                        'Joe'
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th className="text-left">Gender</th>
                    <th className="text-left">Marital Status</th>
                    <th className="text-left">Citizenship</th>
                  </tr>
                  <tr>
                    <td>
                      {isEditMode ? (
                        <input type="text" defaultValue="Male" />
                      ) : (
                        'Male'
                      )}
                    </td>
                    <td>
                      {isEditMode ? (
                        <input type="text" defaultValue="Single" />
                      ) : (
                        'Single'
                      )}
                    </td>
                    <td>
                      {isEditMode ? (
                        <input type="text" defaultValue="U.S." />
                      ) : (
                        'U.S.'
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th className="text-left">Birthday</th>
                    <th className="text-left">Age</th>
                    <th className="text-left" colSpan="2">
                      Have you been a previous employee of TBPO?
                      {isEditMode ? (
                        <input type="text" defaultValue="no" />
                      ) : (
                        'no'
                      )}
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <input type="text" defaultValue="December 02, 1995" />
                    </td>
                    <td>
                      <input type="text" defaultValue="27 years" />
                    </td>
                    <td colSpan="2">
                      <input type="text" defaultValue="no" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto md:mx-10 mx-2 personal">
              <table className="mt-12 table table-borderless basic-info">
                <thead className="flex">
                  <tr>
                    <th className="text-left">Address</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="text-left">Complete Address</th>
                  </tr>
                  <tr>
                    <td colSpan="4">
                      <input
                        type="text"
                        defaultValue="BLK208 L26 Manchester Street, Grand Broadmore, Antel Grand Village"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th className="text-left">City/municipality</th>
                    <th className="text-left">Province</th>
                    <th className="text-left">Zip/Postal Code</th>
                    <th className="text-left">Country</th>
                  </tr>
                  <tr>
                    <td>
                      <input type="text" defaultValue="General Trias" />
                    </td>
                    <td>
                      <input type="text" defaultValue="Cavite" />
                    </td>
                    <td>
                      <input type="text" defaultValue="4107" />
                    </td>
                    <td>
                      <input type="text" defaultValue="Philippines" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto md:mx-10 mx-2 pb-10 personal">
              <table className="mt-12 table table-borderless basic-info">
                <thead className="flex">
                  <tr>
                    <th className="text-left">Address</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="text-left">Mobile</th>
                    <th className="text-left">Landline</th>
                  </tr>
                  <tr>
                    <td>
                      <input type="text" defaultValue="+63 917 813 9805" />
                    </td>
                    <td>
                      <input type="text" defaultValue="+63 2 046 417 0259" />
                    </td>
                  </tr>
                  <tr>
                    <th className="text-left">Mobile</th>
                    <th className="text-left">Landline</th>
                    <th className="text-left">Relationship</th>
                  </tr>
                  <tr>
                    <td>
                      <input type="text" defaultValue="+63 917 813 9805" />
                    </td>
                    <td>
                      <input type="text" defaultValue="+63 2 046 417 0259" />
                    </td>
                    <td>
                      <input type="text" defaultValue="Spouse" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        );

      case 'education':
        return (
          <div className="mt-3 mb-2 text-sm font-medium basic-info-text  md:mx-10">
            <div className="overflow-x-auto education">
              <table className="mt-1 table table-borderless basic-info ">
                <thead>
                  <tr>
                    <div className="title flex">
                      <h3
                        className="text-sm font-semibold mr-2"
                        style={{ color: '#252525' }}
                      >
                        High school or Secondary school{' '}
                      </h3>{' '}
                      <span className="flex justify-center items-center  ">
                        <FaPlus className="text-xs" />
                      </span>
                    </div>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>School Name</th>
                    <th>Year</th>
                  </tr>
                  <tr>
                    <td>Gic chhata</td>
                    <td>2018</td>
                  </tr>
                  <tr>
                    <td>Gic chhata</td>
                    <td>2020</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto education  mt-12">
              <table className="mt-1 table table-borderless basic-info ">
                <thead>
                  <tr>
                    <div className="title flex">
                      <h3
                        className="text-sm font-semibold mr-2"
                        style={{ color: '#252525' }}
                      >
                        High school or Secondary school{' '}
                      </h3>{' '}
                      <span className="flex justify-center items-center  ">
                        <FaPlus className="text-xs" />
                      </span>
                    </div>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <th>School Name</th>
                    <th>Year</th>
                  </tr>
                  <tr>
                    <td>Gic chhata</td>
                    <td>2018</td>
                  </tr>
                  <tr>
                    <td>Gic chhata</td>
                    <td>2020</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto education  mt-12">
              <table className="mt-1 table table-borderless basic-info ">
                <thead>
                  <tr>
                    <div className="title flex">
                      <h3
                        className="text-sm font-semibold mr-2"
                        style={{ color: '#252525' }}
                      >
                        High school or Secondary school{' '}
                      </h3>{' '}
                      <span className="flex justify-center items-center  ">
                        <FaPlus className="text-xs" />
                      </span>
                    </div>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>School Name</th>
                    <th>Year</th>
                  </tr>
                  <tr>
                    <td>Gic chhata</td>
                    <td>2018</td>
                  </tr>
                  <tr>
                    <td>Gic chhata</td>
                    <td>2020</td>
                    <td>2020</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'ids':
        return (
          <div className="mt-3 mb-2 text-sm font-medium basic-info-text">
            IDs
            <div className="overflow-x-auto">
              <table className="mt-12 table table-borderless basic-info">
                {/* IDs content */}
              </table>
            </div>
          </div>
        );
      case 'social':
        return (
          <div className="mt-3 mb-2 text-sm font-medium basic-info-text">
            Social
            <div className="overflow-x-auto">
              <table className="mt-12 table table-borderless basic-info">
                {/* Social content */}
              </table>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <ProfileLayout>
      <div className="wrapper py-15 bg-[#ebf0f9]">
        <div className="container mx-auto sm:px-10">
          <div className="grid grid-cols-12 gap-8 ">
            <div className="col-span-12 lg:col-span-3 md:col-span-5 min-w-50">
              <div className="bg-white card mb-4 shadow-md">
                <div className="card-body text-center py-5">
                  <img
                    src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=626&ext=jpg"
                    alt="profile-img"
                    className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
                  />
                  <h2>John</h2>
                  <p>john@1233gmail.com</p>
                  <button className="btn btn-primary" onClick={toggleEditMode}>
                    Edit Profile
                  </button>
                </div>
              </div>
              <div className="bg-white card mb-4 shadow-md p-5">
                <div className="card-body">
                  <div className="title flex justify-between items-center">
                    <h3 className="text-sm font-semibold">Work Experience</h3>{' '}
                    <span className="flex justify-center items-center  ">
                      <MdEdit className="text-xs" />
                    </span>
                  </div>
                  <ul className="experience">
                    <li>
                      <div>
                        <h4>Senior Web Developer</h4>
                        <p>Company ABC - Full time</p>
                      </div>
                      <p>2 months</p>
                    </li>
                    <li>
                      <div>
                        <h4>Senior Web Developer</h4>
                        <p>Company ABC - Full time</p>
                      </div>
                      <p>5 years</p>
                    </li>
                    <li>
                      <div>
                        <h4>Senior Web Developer</h4>
                        <p>Company ABC - Full time</p>
                      </div>
                      <p>6 months</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white card mb-4 shadow-md p-5">
                <div className="card-body">
                  <div className="title flex justify-between items-center">
                    <h3 className="text-sm font-semibold">
                      Recently Applied Jobs
                    </h3>{' '}
                    <span className="flex justify-center items-center  ">
                      <HiOutlineExternalLink className="text-xs" />
                    </span>
                  </div>

                  <ul className="recently">
                    <li>
                      <h4>Enterprises Software de...</h4>
                      <Link to="#">View</Link>
                    </li>
                    <li>
                      <h4>IT Manager</h4>
                      <Link to="#">View</Link>
                    </li>
                    <li>
                      <h4>UI/UX Researcher</h4>
                      <Link to="#">View</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className=" card  mx-auto flex justify-center w-full">
                <button className="flex justify-center items-center btn btn-primary dwnd text-base text-center w-full">
                  Download Resume
                  <MdFileDownload className="text-base" />
                </button>
              </div>
            </div>
            {/* </div> */}
            <div className="col-span-12 lg:col-span-9 md:col-span-7 ">
              <div className="bg-white card shadow-md">
                <div className="card-body">
                  <div className="overflow-x-auto md:md:mx-10 mx-2 border-b-2 border-[#8a8585]">
                    <ul className="nav nav-underline flex tabs px-4">
                      <li className="nav-item mr-10">
                        <button
                          className={`nav-link p-0 m-0 min-w-50 ${
                            activeTab === 'personal' ? 'active' : ''
                          }`}
                          onClick={() => setActiveTab('personal')}
                          aria-current="page"
                        >
                          Personal Details
                        </button>
                      </li>
                      <li className="nav-item mr-10">
                        <button
                          className={`nav-link ${
                            activeTab === 'education' ? 'active' : ''
                          }`}
                          onClick={() => setActiveTab('education')}
                        >
                          Education
                        </button>
                      </li>
                      <li className="nav-item mr-10">
                        <button
                          className={`nav-link ${
                            activeTab === 'ids' ? 'active' : ''
                          }`}
                          onClick={() => setActiveTab('ids')}
                        >
                          IDs
                        </button>
                      </li>
                      <li className="nav-item mr-10">
                        <button
                          className={`btn nav-link ${
                            activeTab === 'social' ? 'active' : ''
                          }`}
                          onClick={() => setActiveTab('social')}
                        >
                          Social
                        </button>
                      </li>
                    </ul>
                  </div>
                  {/* Render content based on active tab */}
                  {renderContent()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default UserProfile;
