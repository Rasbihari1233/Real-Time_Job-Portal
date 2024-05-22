import React from 'react';
import Slider from 'react-slick';
import { LiaSearchSolid } from 'react-icons/lia';
import { BiSolidTimeFive } from 'react-icons/bi';
import { FaLocationDot } from 'react-icons/fa6';
import { BsFillBuildingFill, BsX } from 'react-icons/bs';
import { FaArrowRight } from 'react-icons/fa';

// IMAGES DATA FOR CAROUSEL
interface Data {
  imgSrc: React.ComponentType;
  category: string;
}

const data: Data[] = [
  {
    imgSrc: LiaSearchSolid,
    category: 'Python',
  },
  {
    imgSrc: BiSolidTimeFive,
    category: 'Java',
  },
  {
    imgSrc: FaLocationDot,
    category: 'Node',
  },
  {
    imgSrc: BsFillBuildingFill,
    category: 'React',
  },
  {
    imgSrc: LiaSearchSolid,
    category: 'Developer',
  },
  {
    imgSrc: BiSolidTimeFive,
    category: 'Business',
  },
  {
    imgSrc: FaLocationDot,
    category: 'Software engineer',
  },
  {
    imgSrc: BsFillBuildingFill,
    category: 'JavaScript',
  },
];

// CAROUSEL SETTINGS
const Categories: React.FC = () => {
  const [showPrevArrow, setShowPrevArrow] = React.useState(false);
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    nextArrow: <NextArrow />,
    prevArrow: showPrevArrow ? <PrevArrow /> : null,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setShowPrevArrow(newIndex > 0);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  const handleRemoveCategory = (index: number) => {
    // Function to handle category removal
    // Implement this as needed
    console.log('Remove category at index:', index);
  };

  return (
    <div className="text-center">
      <div className="mx-auto">
        <div className="py-14">
          <Slider {...settings}>
            {data.map((item, i) => (
              <div
                key={i}
                className="flex flex-col justify-center items-center p-2 m-2 category-items"
                style={{
                  margin: '20px',
                  width: '100%',
                  display: 'flex !important',
                }}
              >
                <div className="bg-white shadow-md category-item">
                  <div className="flex justify-center items-center mb-2 sib1">
                    <item.imgSrc size={15} />
                  </div>
                  <p className="sib2 text-lg font-light text-black">
                    {item.category}
                  </p>
                  <div
                    className="cursor-pointer sib3"
                    onClick={() => handleRemoveCategory(i)}
                  >
                    <BsX />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

// Custom next arrow component
const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className="bg-[#04ADE6] p-2 rounded-full inline text-white "
      style={{ ...style, display: 'block', right: '-25px', float: 'right' }}
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
};

// Custom prev arrow component
const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className="bg-[#04ADE6] p-2 rounded-full inline text-white "
      style={{ ...style, left: '-25px', float: 'left' }}
      onClick={onClick}
    >
      <FaArrowRight style={{ transform: 'rotate(180deg)' }} />
    </div>
  );
};

export default Categories;
