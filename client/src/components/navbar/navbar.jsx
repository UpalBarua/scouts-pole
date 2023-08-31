import { Link, NavLink } from 'react-router-dom';
import { MdOutlineCreate, MdHistory, MdOutlineHome } from 'react-icons/md';
import MobileMenu from './mobile-menu';
import LogoutButton from '../logout-button';
import useUser from '../../hooks/use-user';

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
    title: 'New Pole',
    link: '/new-pole',
    Icon: <MdOutlineCreate className="text-xl md:text-2xl" />,
  },
];

const Navbar = () => {
  const { user } = useUser();

  return (
    <header className="container sticky top-0 z-20 flex items-center justify-between py-2 md:py-3 bg-primary-800">
      <Link to="/">
        <h1 className="text-2xl font-bold text-white">
          Scouts<span className="text-accent-500">pole</span>
        </h1>
      </Link>
      <nav>
        <ul className="items-center hidden gap-1 pt-2 md:gap-2 sm:flex">
          {MENU_OPTIONS.map(({ title, link, Icon }) => (
            <li key={link}>
              <NavLink
                className="flex items-center gap-1 px-4 py-2 transition-colors rounded-lg text md:text-lg hover:bg-primary-700"
                to={link}>
                {Icon}
                {title}
              </NavLink>
            </li>
          ))}
          {user._id ? (
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
