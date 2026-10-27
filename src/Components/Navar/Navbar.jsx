import { PanelTopClose, PanelTopOpen } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const links = (
    <ul className="flex">
      <li className="mr-30 cursor-pointer">Home</li>
      <li className="mr-30 cursor-pointer">About</li>
      <li className="mr-30 cursor-pointer">Shop</li>
      <li className="mr-30 cursor-pointer">Login</li>
    </ul>
  );
  const links2 = (
    <ul className="">
      <li className="mr-30 cursor-pointer">Home</li>
      <li className="mr-30 cursor-pointer">About</li>
      <li className="mr-30 cursor-pointer">Shop</li>
      <li className="mr-30 cursor-pointer">Login</li>
    </ul>
  );

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <nav className="flex  md:mx-20 justify-between">
        <span
          className="flex cursor-pointer mx-auto  md:mx-10"
          onClick={handleOpen}
        >
          {open ? (
            <PanelTopOpen className="md:hidden"></PanelTopOpen>
          ) : (
            <PanelTopClose className="md:hidden"></PanelTopClose>
          )}
          <ul
            className={`absolute ${open ? "top-10" : "-top-40"} duration-1000`}
          >
            {links2}
          </ul>
          <h4 className="ml-4">My Navbar</h4>
        </span>
        <div className="hidden md:flex">{links}</div>
      </nav>
    </div>
  );
};

export default Navbar;
