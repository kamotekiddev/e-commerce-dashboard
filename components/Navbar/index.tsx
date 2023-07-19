import { UserButton } from "@clerk/nextjs";

import Navlinks from "./Navlinks";
import StoreSwitcher from "./StoreSwitcher";

const Navbar = () => {
  return (
    <div className="border-b">
      <div className="flex items-center p-4 px-6 gap-4">
        <div>
          <StoreSwitcher
            items={[
              {
                label: "Bike Shop",
                value: "23444",
              },
              {
                label: "Shoe Store",
                value: "23455",
              },
              {
                label: "Suit Store",
                value: "23410",
              },
            ]}
          />
        </div>
        <div>
          <Navlinks />
        </div>
        <div className="ml-auto flex items-center gag-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
