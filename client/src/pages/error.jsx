import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <main className="container px-4 py-32 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 gap-10 items-center mx-auto w-full md:w-4/5 lg:grid-cols-2 xl:gap-32">
        <div className="flex flex-col gap-2 justify-center items-center text-center md:gap-3 md:items-start md:justify-start md:text-start">
          <p className="text-sm font-medium tracking-wide uppercase text-primary-300">
            Error 404!
          </p>
          <h2 className="text-2xl font-bold text-white md:text-4xl">
            <span className="font-bold text-red-500">Oops! </span>The page
            you're looking for isn't here.
          </h2>
          <p className="md:text-lg">
            You might have the wrong address, or the page may have moved.
          </p>
          <Link
            to="/"
            className="font-medium px-5 py-2.5 rounded-lg flex items-center gap-1 shadow-sm border text-center justify-center text-white disabled:opacity-50 sm:w-auto bg-primary-700 border-primary-600">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;
