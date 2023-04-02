import React from "react";
import Link from "../Link/Link";

const Navbar = () => {
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
    <div>
      <ul className="md:flex gap-8 font-bold">
        {routes.map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
<h1>hello</h1>;
