import { MdOutlineHowToVote } from 'react-icons/md';
import { Link } from 'react-router-dom';

const FOOTER_MENU = [
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

const CONTRIBUTORS = [
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
    path: 'https://github.com/MD-TANVIR7462',
  },
  {
    title: 'Amran Hossen',
    profile: 'https://avatars.githubusercontent.com/u/105711432?v=4',
    path: 'https://github.com/AJAmran',
  },
];

const Footer = () => {
  return (
    <footer className="container flex flex-col gap-3 justify-center items-center py-10 mx-auto text-center">
      <h2 className="flex items-center text-2xl font-bold text-white font-secondary">
        <MdOutlineHowToVote className="text-3xl text-accent-500 me-1" />
        Scouts<span className="text-accent-500">poll</span>
      </h2>
      {/* <ul className="flex justify-center">
          {FOOTER_MENU?.map(({ title, link }, i) => (
            <li className="list-none" key={i}>
              <Link className="flex px-2 hover:text-blue-600" to={link}>
                {title}
              </Link>
            </li>
          ))}
        </ul> */}
      <h3 className="text-lg font-semibold">Development Team</h3>
      <ul className="flex gap-2 justify-center items-center sm:gap-4">
        {CONTRIBUTORS?.map(({ title, profile, path }) => (
          <a href={path} target="_blank" key={path}>
            <img
              className="w-8 rounded-full border shadow-sm sm:w-12 border-primary-600"
              src={profile}
              alt={title}
              title={title}
            />
          </a>
        ))}
      </ul>
      <p className="px-5 pt-4 text-sm text-primary-300">
        Copyright © 2023 - All right reserved by Team{' '}
        <Link to="/" className="font-bold text-accent-500">
          Script Scouts
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
