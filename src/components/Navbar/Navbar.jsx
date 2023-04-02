import React, { useState } from "react";
import Link from "../Link/Link";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Contact",
      path: "/contact",
    },
    {
      id: 4,
      name: "Products",
      path: "/products",
    },
    {
      id: 5,
      name: "Services",
      path: "/services",
    },
  ];

  return (
    <nav className="bg-purple-400">
      <div onClick={() => setOpen(!open)} className="md:hidden">
        <span>
          {open ? (
            <XMarkIcon className="h-6 w-6 text-purple-600" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-purple-600" />
          )}
        </span>
      </div>
      <ul
        className={`md:flex gap-8 font-bold absolute md:static duration-500 px-8 py-2 bg-purple-400 ${
          open ? "top-6" : "-top-36"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
<h1>hello</h1>;
