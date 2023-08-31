import React from 'react';
import { Link } from 'react-router-dom';

const CONTRIBUTORS = [
  {
    name: 'Upal Barua',
    image:
      'https://scontent.fcgp1-1.fna.fbcdn.net/v/t39.30808-1/356212462_274400028580061_2241878473493247835_n.jpg?stp=dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeF4GbTEBGjvG5P6SHeaTXKJmrUzO3EWz0KatTM7cRbPQgEPiGpXXFvWJTJn8etAmUaLGbzqCO2FgdPnTSY4Aoqm&_nc_ohc=Tg7ZgKwj8OAAX-sPuuT&_nc_oc=AQnERIwbzZn6_Mo2OUj7DP95RBMM9AuRYwTJzDjHjjc8mzGAspJKZBbQ-uxc8OxyBSc&_nc_ht=scontent.fcgp1-1.fna&oh=00_AfAdKqEBZVnwpkeh9EyYW3zdfrxLwyFhsBkIuXcCUeN_dw&oe=64E7B9D6',
    portfolio: '',
  },
  {
    name: 'Ashfaque Niaz',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPaCz5Iy9aMYF---8YCbw1va9JUMrQl4dGbm9gVeJEM_1o9bDvh4VB4UgaCDgjR--R90&usqp=CAU',
    portfolio: '',
  },
  {
    name: 'Amran Hossen',
    image:
      'https://scontent.fcgp1-1.fna.fbcdn.net/v/t39.30808-6/242016078_937981900129233_7300859466883836325_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH49jkGx_0bUsnwyGBN4Bt56T8bilxM3ZbpPxuKXEzdlilEXe-zG2M1-8Hs57kP0bOVPWEkbjEJxmjL6McIhkkJ&_nc_ohc=vQ77SuP1KZYAX8vcu9O&_nc_zt=23&_nc_ht=scontent.fcgp1-1.fna&oh=00_AfCWh58Hu3h4XnS1UE8VBvh2D2-KpNC8gms8WTmjU2odVQ&oe=64E714B7',
    portfolio: '',
  },
  {
    name: 'Tanvir evan',
    image:
      'https://scontent.fcgp1-1.fna.fbcdn.net/v/t39.30808-6/311044883_1636962126699651_853105400426640729_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG7VzX1leB_6SMt2U70wQo0FaJNK7jgN2IVok0ruOA3Yhsq3CJ9hmDbpUQspkj5Cyz7NFZE_tyZgF7gbcMoSHrG&_nc_ohc=ZpiBwhXscj4AX-q1md6&_nc_zt=23&_nc_ht=scontent.fcgp1-1.fna&oh=00_AfBFyG7fUli77RPf5VZ-JkzFWrgE-SFjLXRK3sNnz5hHCg&oe=64E88A12',
    portfolio: '',
  },
  {
    name: 'Atif Ador',
    image:
      'https://scontent.fcgp4-1.fna.fbcdn.net/v/t39.30808-6/365268435_943090976762288_8921103280587411513_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGhhea4jfVGIlVLAlSIR1mQWQ4516vJCc9ZDjnXq8kJzwLt5QyrfxOZzEhkBK2UGXddFpKlRmuC6pzWb0_Mld2B&_nc_ohc=MmZ0h8PgIGEAX8-OYOl&_nc_zt=23&_nc_ht=scontent.fcgp4-1.fna&oh=00_AfCK4_Zgd1bP6VAfqBaGdMtKn_xq_HDMF-svPHShwCqmaA&oe=64E8367C',
    portfolio: '',
  },
  {
    name: 'Imran Hasan',
    image:
      'https://scontent.fcgp4-1.fna.fbcdn.net/v/t39.30808-1/362605870_209021395463846_4785272798097789709_n.jpg?stp=c0.20.1765.1765a_dst-jpg_s160x160&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGHvJTJ27cHfvfhPsneSe5cdpgTy3yGN2J2mBPLfIY3Yh1xKAwNeqymA9GnJr7CJq7h8xWC0-FR1EdwyYiBxE80&_nc_ohc=vem6he7UZ3wAX-accKM&_nc_ht=scontent.fcgp4-1.fna&oh=00_AfDaJH5ru94JXMpaRwRb1jNqFPlx6OO7R3sQn_OtWAVUCg&oe=64E8CF09',
    portfolio: '',
  },
];

const Footer = () => {
  return (
    <footer className="container flex flex-col gap-4 justify-between py-5 max-w-7xl sm:flex-row sm:pt-8 md:pt-12">
      <div className="w-56">
        <Link to="/">
          <h2 className="text-2xl font-bold text-white">
            Scouts<span className="text-accent-500">pole</span>
          </h2>
        </Link>
        <p className="text-primary-300">
          &copy; All right reserved by team Script Scouts
        </p>
      </div>
      <div>
        <p className="mb-2 text-lg font-medium capitalize md:mb-4 text-primary-300">
          Let's meet our contributors
        </p>
        <div className="flex">
          {CONTRIBUTORS.map(({ name, portfolio, image }) => (
            <Link key={name} to={portfolio} className="px-1">
              <img
                className="object-cover overflow-hidden w-8 h-8 rounded-full"
                src={image}
                alt={name}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
