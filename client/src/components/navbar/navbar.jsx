import { Link, NavLink } from 'react-router-dom';
import { MdOutlineCreate, MdHistory, MdOutlineHome } from 'react-icons/md';
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
    title: 'New Pole',
    link: '/new-pole',
    Icon: <MdOutlineCreate className="text-xl md:text-2xl" />,
  },
];

const Navbar = () => {
  return (
    <header className="flex justify-between items-center py-2 md:py-3">
      <Link to="/">
        <h1 className="text-2xl font-bold text-white">
          Scouts<span className="text-accent-500">pole</span>
        </h1>
      </Link>
      <nav>
        <ul className="hidden gap-1 pt-2 md:gap-2 sm:flex">
          {MENU_OPTIONS.map(({ title, link, Icon }) => (
            <li key={link}>
              <NavLink
                className="flex gap-1 items-center px-4 py-2 rounded-md transition-colors text md:text-lg hover:bg-primary-700"
                to={link}>
                {Icon}
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
        <MobileMenu menuOptions={MENU_OPTIONS} />
      </nav>
    </header>
  );
};

export default Navbar;
