import Logo from "./logo";
import { ModeToggle } from "./mode-toggle-button";
import { Navbar } from "./navbar";

const Header = () => {
  return (
    <div className="grid grid-cols-3 justify-center items-center border-b-2 border-black dark:border-white">
      <div>
        <Logo />
      </div>
      <div>
        <Navbar />
      </div>
      <div className="flex justify-end">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
