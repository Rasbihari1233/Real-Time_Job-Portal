import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <section className="bg-[#002E5B] footer_section">
        <div className="container mx-auto sm:px-10 ">
          <footer className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
            <div className="foot_logo">
              <div>
                <Link to="/">
                  <img
                    src="/assets/jobs/transparent-bpo.svg"
                    className="w-100"
                    alt="transparent "
                  />
                </Link>
              </div>
              <div className="foot mt-[40px]">
                <div className="foot_items">
                  <h2 className="text-white text-3xl pb-4 font-bold ">
                    Outsourcing Transformed
                  </h2>
                  <ul className="text-white">
                    <li className="leading-9">
                      <Link to="">Customized solutions.</Link>
                    </li>
                    <li className="leading-9">
                      <Link to="">Passionate culture.</Link>
                    </li>
                    <li className="leading-9">
                      <Link to="">Committed to your success.</Link>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-row gap-4 mt-[25px]">
                  <div>
                    <Link to="">
                      <img src="/assets/jobs/twitter.svg" alt="social media" />
                    </Link>
                  </div>
                  <div>
                    <Link to="">
                      <img src="/assets/jobs/twitter.svg" alt="social media" />
                    </Link>
                  </div>
                  <div>
                    <Link to="">
                      <img src="/assets/jobs/twitter.svg" alt="social media" />
                    </Link>
                  </div>
                  <div>
                    <Link to="">
                      <img src="/assets/jobs/twitter.svg" alt="social media" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="foot">
              <div className="foot_items">
                <h2 className="text-white text-3xl pb-4 font-bold">
                  Jobs by Service
                </h2>
                <ul className="text-white">
                  <li className="leading-9">
                    <Link to="">Inbound Voice</Link>
                  </li>
                  <li className="leading-9">
                    <Link to="">Outbound Voice</Link>
                  </li>
                  <li className="leading-9">
                    <Link to="">Multi-channel</Link>
                  </li>
                  <li className="leading-9">
                    <Link to="">Back-office</Link>
                  </li>
                  <li className="leading-9">
                    <Link to="">Work-Secure Suite</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="foot">
              <div className="foot_items">
                <h2 className="text-white text-3xl pb-4 font-bold ">
                  Jobs by Location
                </h2>
                <ul className="text-white">
                  <li className="leading-9">
                    <Link to="">Corporate Headquarters</Link>
                  </li>
                  <li className="leading-9">
                    <Link to="">Belize</Link>
                  </li>
                  <li className="leading-9">
                    <Link to="">Jamaica</Link>
                  </li>
                  <li className="leading-9">
                    <Link to="">Philippines</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="foot">
              <div className="foot_items">
                <h2 className="text-white text-3xl pb-4 font-bold ">
                  Jobs by Setup
                </h2>
                <ul className="text-white">
                  <li className="leading-9">
                    <Link to="">Remote</Link>
                  </li>
                  <li className="leading-9">
                    <Link to="">On-site</Link>
                  </li>
                  <li className="leading-9">
                    <Link to="">Hybrid</Link>
                  </li>
                </ul>
                <h2 className="text-white text-3xl pb-4 pt-5 font-bold ">
                  Jobs by Employment
                </h2>
                <ul className="text-white">
                  <li className="leading-9">
                    <Link to="">Full-Time</Link>
                  </li>
                  <li className="leading-9">
                    <Link to="">Part-Time</Link>
                  </li>
                  <li className="leading-9">
                    <Link to="">Contractual</Link>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
          <hr className="mt-5" />
          <div className="flex justify-between text-center  text-white pt-4">
            <div>
              <p>© Built In 2023</p>
            </div>
            <div>
              <ul className="flex">
                <li>
                  <Link to="">About TBPO</Link>
                </li>
                <li className="ms-3 me-3">
                  <Link to="">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="">Terms of Use</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
