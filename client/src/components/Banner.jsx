import { Link } from 'react-router-dom';
import banner from '../assets/banner.jpg';

const Banner = () => {
  return (
    <div className="grid grid-cols-1 gap-3 justify-center items-center px-8 py-12 h-96 md:grid-cols-2 md:px-2">
      <div className="mb-4">
        <h3 className="text-sm font-bold sm:text-5xl">Be part of Decison</h3>
        <p className="py-3 text-sm font-medium md:text-lg">
          Secure and Anonymous Polling. Write your opinion . Poll from anywhere.
        </p>
        <Link
          to="/about"
          className="px-6 py-1 mt-3 text-sm font-medium text-gray-700 border border-gray-500 hover:bg-purple-600 hover:text-white">
          About Us
        </Link>
        <Link
          to="/about"
          className="px-6 py-1 mt-3 ml-2 text-sm font-medium text-gray-700 border border-gray-500 hover:bg-purple-600 hover:text-white">
          Vote
        </Link>
      </div>
      <div className="order-1">
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
