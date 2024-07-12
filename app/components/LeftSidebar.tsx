import { sidebarLinks } from "../constants";
import { cn } from "~/lib/utils";
import { SignedIn, SignedOut, useClerk } from "@clerk/remix";
import { Link, useLocation, useNavigate } from "@remix-run/react";
import React from "react";
import { Button } from "./ui/button";
// <img src="/icons/logo.svg" alt="logo" width={23} height={27} />

const LeftSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signOut } = useClerk();

  return (
    <section className={cn("left_sidebar h-[calc(100vh-5px)]")}>
      <nav className="flex flex-col gap-6">
        <Link
          to="/"
          className="flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center"
        >
          <h1 className="text-24 font-extrabold text-primary-1 max-lg:hidden">
            Study Buddy
          </h1>
        </Link>

        {sidebarLinks.map(({ route, label }) => {
          const isActive = location.pathname === route;

          return (
            <Link
              to={route}
              key={label}
              className={cn(
                "flex gap-3 items-spread text-16 py-4 font-bold max-lg:pl-4 justify-center lg:justify-start",
                {
                  "bg-nav-focus text-primary-1  border-r-4 border-primary-1":
                    isActive,
                }
              )}
            >
              <p>{label}</p>
            </Link>
          );
        })}
      </nav>
      <SignedOut>
        <div className="flex-center w-full pb-14 max-lg:px-4 lg:pr-8">
          <Button
            asChild
            className="text-16 w-full outline outline-primary-1 font-extrabold hover:bg-supporting-3 hover:text-white-1 button-transition"
          >
            <Link to="/sign-in">Sign in</Link>
          </Button>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="flex-center w-full pb-14 max-lg:px-4 lg:pr-8">
          <Button
            className="text-16 w-full bg-primary-1 font-extrabold text-white-1"
            onClick={() => signOut(() => navigate("/"))}
          >
            Log Out
          </Button>
        </div>
      </SignedIn>
    </section>
  );
};

export default LeftSidebar;
