import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";
import { sidebarLinks } from "../constants/index";
import { cn } from "~/lib/utils";
import { Link, useLocation } from "@remix-run/react";
// <img src="/icons/logo.svg" alt="logo" width={23} height={27} />
const MobileNav = () => {
  const location = useLocation();

  return (
    <section>
      <Sheet>
        <SheetContent side="left" className="border-none bg-black-1">
          <Link to="/" className="flex cursor-pointer items-center gap-1 pb-10 pl-4">
            <h1 className="text-24 font-extrabold text-white-1 ml-2">Podcastr</h1>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 text-white-1">
                {sidebarLinks.map(({ route, label, imgURL }) => {
                  const isActive = location.pathname === route;

                  return (
                    <SheetClose asChild key={route}>
                      <Link
                        to={route}
                        className={cn("flex gap-3 items-center py-4 max-lg:px-4 justify-start", {
                          'bg-nav-focus border-r-4 border-orange-1': isActive,
                        })}
                      >
                        <img src={imgURL} alt={label} width={24} height={24} />
                        <p>{label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
