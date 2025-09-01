

import { Search } from 'lucide-react';
import LogoFinal from '../assets/LogoFinal.png';
const NavItems = [
  { name: 'Home', href: '#home'},
  { name: 'Shop', href: '#Shop' },
  {
    name: 'Category',
    href: '#category',
    subItems: [
      { name: 'Books', href: '#book' },
      { name: 'Electronics', href: '#electronics' },
      { name: 'Clothing', href: '#clothing' },
      { name: 'Accessories', href: '#accessories' },
      { name: 'Sales', href: '#sales' },
    ],
  },
  { name: 'Cart', href: '#cart' },
];
export const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-yellow-200">
      <div className="flex items-center gap-2">
      <img src={LogoFinal} alt="logo" className="h-15 w-auto"  /> 
      <span className=" text-xl font-bold text-blue-900">Peak Store</span>
      </div>
      <ul className="flex space-x-6">
        {NavItems.map((item) => (
          <li key={item.name} className='relative group'>
            <a href={item.href} className="hover:text-blue">
              {item.name}
            </a>
            {item.subItems && (
              <ul className="absolute left-0 mt-2 w-40 hidden group-hover:block bg-white text-black shadow-lg rounded-md">
                {item.subItems.map((sub) => (
                  <li key={sub.name}>
                    <a
                      href={sub.href}
                      className="block px-4 py-2 hover:bg-blue-200"
                    >
                      {sub.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div className="relative flex items-center gap-2 md:w-64">
        <Search size={20} className="absolute left-3 text-blue-400" />
        <input
          type="text"
          placeholder="Search here"
          className="w-full pl-10 pr-3 py-1 border border-blue-900 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </nav>
  );
};

export default NavBar;
