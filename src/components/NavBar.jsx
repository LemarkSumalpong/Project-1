

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
    <nav className="flex items-center justify-between px-6 py-4   border-b border-gray-200 ">
      <div className="flex items-center">
      <img src={LogoFinal} alt="logo" /> 
      <span className="ml-0.5 text-xl font-bold text-blue-900">Peak Store</span>
      </div>
      <ul className="flex space-x-6">
        {NavItems.map((item) => (
          <li key={item.name} className='relative group'>
            <a href={item.href} className="hover:text-blue">
              {item.name}
            </a>
            {item.subItems && (
              <ul className="absolute left-0 mt-2 hidden group-hover:block text-block rounded-full">
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
      <div className="relative flex w-full gap-2 md:w-max">
        <Search size={20} / >
        <input type="text" placeholder="search here" className='px-3 py-1 border border-gray-300 rounded-full'></input>
      </div>
    </nav>
  );
};

export default NavBar;
