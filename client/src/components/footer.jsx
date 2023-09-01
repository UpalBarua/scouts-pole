import React from 'react';
import { Link } from 'react-router-dom';
const footer_menu = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'About Us',
    link: '/',
  },
  {
    title: 'History',
    link: '/history',
  },
  {
    title: 'Contact Us',
    link: '/',
  },
];

const contributors = [
  {
    title: 'Imran Hasan Ovi',
    profile: 'https://avatars.githubusercontent.com/u/121815437?v=4',
    path: 'https://github.com/GitByImran',
  },
  {
    title: 'Upal Barua',
    profile: 'https://avatars.githubusercontent.com/u/56833544?v=4',
    path: 'https://github.com/UpalBarua',
  },
  {
    title: 'Ador',
    profile: 'https://avatars.githubusercontent.com/u/84873174?v=4',
    path: 'https://github.com/jamanador',
  },
  {
    title: 'Niaz Abir',
    profile: 'https://avatars.githubusercontent.com/u/103358513?v=4',
    path: 'https://github.com/niaz-abir',
  },
  {
    title: 'Tajul Islam Tanvir',
    profile: 'https://avatars.githubusercontent.com/u/121679880?v=4',
    path: 'https://github.com/niaz-abir',
  },
  {
    title: 'Amran Hossen',
    profile: 'https://avatars.githubusercontent.com/u/105711432?v=4',
    path: 'https://github.com/AJAmran',
  },
];

const Footer = () => {
  return (
    <footer className="container flex justify-center items-center pt-24 pb-20 mx-auto text-center">
      <div className="text-sm text-center">
        <Link to="/">
          <h1 className="py-2 text-xl font-extrabold text-white shadow-sm">
            Scouts<span className="text-accent-500">poll</span>
          </h1>
        </Link>
        <ul className="flex justify-center">
          {footer_menu?.map(({ title, link }, i) => (
            <li className="list-none" key={i}>
              <Link className="flex px-2 hover:text-blue-600" to={link}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <h3 className="text-center text-lg font-semibold pt-3">
          Development Team
        </h3>
        <ul className="flex justify-center pt-3 pb-6">
          {contributors?.map(({ title, profile, path }, i) => (
            <a href={path} target="_blank" key={i}>
              <img
                className="w-10 rounded-full border border-slate-500 shadow-sm mx-3"
                src={profile}
                alt=""
                title={title}
              />
            </a>
          ))}
        </ul>
        <p>
          Copyright © 2023 - All right reserved by Team{' '}
          <Link to="/" className="font-bold text-green-500">
            Script Scouts
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
