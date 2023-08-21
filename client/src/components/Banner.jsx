import { Link } from "react-router-dom";
import banner from "../assets/banner.jpg";
const Banner = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-3 justify-center items-center h-96 py-12 px-8 md:px-2">
      <div className="mb-4">
        <h3 className="text-sm sm:text-5xl font-bold">Be part of Decison</h3>
        <p className="py-3 text-sm md:text-lg font-medium">
          Secure and Anonymous Polling. Write your opinion . Poll from anywhere.
        </p>
        <Link
          to="/about"
          className="hover:bg-purple-600 hover:text-white py-1 px-6 mt-3 font-medium text-sm border border-gray-500 text-gray-700"
        >
          About Us
        </Link>
        <Link
          to="/about"
          className="hover:bg-purple-600 hover:text-white py-1 px-6 mt-3 font-medium text-sm border border-gray-500 text-gray-700 ml-2"
        >
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
