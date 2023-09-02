import {
  MdHistory,
  MdOutlineCreate,
  MdOutlineHome,
  MdOutlineHowToVote,
} from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts/auth-context';
import LogoutButton from '../logout-button';
import MobileMenu from './mobile-menu';

const MENU_OPTIONS = [
  {
    title: 'Home',
    link: '/',
    Icon: <MdOutlineHome className="text-xl md:text-2xl" />,
  },
  {
    title: 'History',
    link: '/history',
    Icon: <MdHistory className="text-xl md:text-2xl" />,
  },
  {
    title: 'New Poll',
    link: '/new-poll',
    Icon: <MdOutlineCreate className="text-xl md:text-2xl" />,
  },
];

const Navbar = () => {
  const { user } = useAuth();

  return (
    <header className="container flex sticky top-0 z-20 justify-between items-center py-2 md:py-3 bg-primary-800">
      <Link
        className="px-3 py-2 rounded-lg transition-colors hover:bg-primary-700 font-secondary"
        to="/">
        <h1 className="flex items-center text-2xl font-bold text-white">
          <MdOutlineHowToVote className="text-3xl text-accent-500 me-1" />
          Scouts<span className="text-accent-500">poll</span>
        </h1>
      </Link>
      <nav>
        <ul className="hidden gap-2 items-center md:flex">
          {MENU_OPTIONS.map(({ title, link, Icon }) => (
            <li key={link}>
              <NavLink
                className="flex gap-1 items-center px-4 py-2 font-medium rounded-lg transition-colors md:text-lg hover:bg-primary-700 hover:text-white"
                to={link}>
                {Icon}
                {title}
              </NavLink>
            </li>
          ))}
          {user ? (
            <li>
              <LogoutButton />
            </li>
          ) : null}
        </ul>
        <MobileMenu menuOptions={MENU_OPTIONS} />
      </nav>
    </header>
  );
};

export default Navbar;
