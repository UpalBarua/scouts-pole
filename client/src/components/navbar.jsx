// import { Menu, Transition } from "@headlessui/react";
// import { Fragment } from "react";
// import { Link } from "react-router-dom";

<<<<<<< HEAD
// const MENU_OPTIONS = [
//   { title: "Home", link: "/" },
//   { title: "Vote", link: "/" },
//   { title: "New Pole", link: "/new-pole" },
//   { title: "History", link: "/history" },
// ];
=======
const MENU_OPTIONS = [
  { title: 'Home', link: '/' },
  { title: 'Vote', link: '/' },
  { title: 'New Pole', link: '/new-pole' },
  { title: 'History', link: '/history' },
];
>>>>>>> f34d2681a5a3d9fce0f52cccd62ef00865987202

// const Navbar = () => {
  
//   return (
//     <header className="flex justify-between items-center px-6 md:px-4 lg:px-2">
//       <Link to="/">
//         <h1 className="flex font-medium text-black">
//           Scouts <span className="pl-1 font-bold text-purple-600">Pole</span>
//         </h1>
//       </Link>
//       <nav className="hidden pt-2 sm:block">
//         <ul className="flex">
//           {MENU_OPTIONS.map(({ title, link }, i) => (
//             <li key={i} className="px-2 py-2">
//               <Link to={link}>{title}</Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//       <div className="top-16 pt-5 w-56 text-right sm:hidden">
//         <Menu as="div" className="inline-block relative text-left">
//           <div>
//             <Menu.Button className="-mt-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//                 />
//               </svg>
//             </Menu.Button>
//           </div>
//           <Transition
//             as={Fragment}
//             enter="transition ease-out duration-100"
//             enterFrom="transform opacity-0 scale-95"
//             enterTo="transform opacity-100 scale-100"
//             leave="transition ease-in duration-75"
//             leaveFrom="transform opacity-100 scale-100"
//             leaveTo="transform opacity-0 scale-95"
//           >
//             <Menu.Items className="absolute right-0 mt-2 w-56 bg-white rounded-md divide-y divide-gray-100 ring-1 ring-black ring-opacity-5 shadow-lg origin-top-right focus:outline-none">
//               {MENU_OPTIONS.map(({ title, link }, i) => (
//                 <Menu.Item key={i}>
//                   <Link to={link} className="block px-5 py-2">
//                     {title}
//                   </Link>
//                 </Menu.Item>
//               ))}
//             </Menu.Items>
//           </Transition>
//         </Menu>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
