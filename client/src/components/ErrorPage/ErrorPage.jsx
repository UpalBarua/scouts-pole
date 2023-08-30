import React from 'react';
import { Link } from 'react-router-dom';
import er from './error.png';
const ErrorPage = () => {
    return (
        <div className="px-4 py-32 mx-auto max-w-7xl">
        <div className="grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32">
          <div>
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-300 uppercase">
              Error 404
            </p>
            <h1 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left md:text-4xl">
              <span className="font-bold pr-3 text-red-500">Oops!</span> The page
              you're looking for isn't here.
            </h1>
            <p className="mb-5 text-base text-left text-gray-300 md:text-xl">
              You might have the wrong address, or the page may have moved.
            </p>
            <Link to="/">
              <button className="w-full rounded-full mb-2 py-2 px-3 text-white mt-3 border border-gray-300 sm:w-auto sm:mb-0 hover:bg-blue-600 hover:border-none">
                Back to Home
              </button>
            </Link>
          </div>
          <div className='hidden lg:block'>
            <div className="w-full h-full bg- rounded-lg">
              <img
                src={er} alt='' className='w-full rounded-full'
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default ErrorPage;