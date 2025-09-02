import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import LogoFinal from "../assets/LogoFinal.png";

const NavItems = [
  { name: "Home", href: "#home" },
  { name: "Shop", href: "#shop" },
  {
    name: "Category",
    href: "#category",
    subItems: [
      { name: "Books", href: "#book" },
      { name: "Electronics", href: "#electronics" },
      { name: "Clothing", href: "#clothing" },
      { name: "Accessories", href: "#accessories" },
      { name: "Sales", href: "#sales" },
    ],
  },
  { name: "Cart", href: "#cart" },
];

export const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-yellow-200 shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img src={LogoFinal} alt="logo" className="h-10 w-auto" />
          <span className="text-2xl font-bold text-blue-900">Peak Store</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          {NavItems.map((item) => (
            <li key={item.name} className="relative group">
              <a
                href={item.href}
                className="hover:text-blue-700 font-medium transition-colors"
              >
                {item.name}
              </a>
              {item.subItems && (
                <ul className="absolute left-0 mt-2 w-44 hidden group-hover:block bg-white text-black shadow-lg rounded-md">
                  {item.subItems.map((sub) => (
                    <li key={sub.name}>
                      <a
                        href={sub.href}
                        className="block px-4 py-2 hover:bg-blue-100 transition"
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

        {/* Search Bar */}
        <div className="relative hidden md:flex items-center w-64">
          <Search size={18} className="absolute left-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search here"
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-blue-900"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-yellow-100 px-6 py-4 space-y-4">
          {NavItems.map((item) => (
            <div key={item.name} className="border-b border-gray-300 pb-2">
              <a href={item.href} className="block font-medium text-blue-900">
                {item.name}
              </a>
              {item.subItems && (
                <ul className="pl-4 mt-2 space-y-1 text-gray-700">
                  {item.subItems.map((sub) => (
                    <li key={sub.name}>
                      <a
                        href={sub.href}
                        className="block py-1 hover:text-blue-600"
                      >
                        {sub.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Mobile Search */}
          <div className="relative mt-4">
            <Search size={18} className="absolute left-3 text-gray-500" />
            <input
              type="text"
              placeholder="Search here"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
