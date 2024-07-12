import { SignedIn, UserButton, useUser } from "@clerk/remix";
import { Link } from "@remix-run/react";
import React from "react";
import Header from "./Header";
import { cn } from "~/lib/utils";

const RightSidebar = () => {
  const { user } = useUser();
  return (
    <section className={cn("right_sidebar h-[calc(100vh-5px)]")}>
      <SignedIn>
        <Link to={`/profile`} className="flex gap-3 pb-12">
          <UserButton />
          <div className="flex w-full items-center justify-between">
            <h1 className="text-16 truncate font-semibold">
              {user?.firstName} {user?.lastName}
            </h1>
            <img
              src="/icons/right-arrow.svg"
              alt="arrow"
              width={24}
              height={24}
            />
          </div>
        </Link>
      </SignedIn>
      <section>
        <Header headerTitle="Quizzes Created" LinkLabel="See all" />
      </section>
      <section className="flex flex-col gap-8 pt-12">
        <Header headerTitle="Lesson Plans" LinkLabel="Edit" />
      </section>
    </section>
  );
};

export default RightSidebar;
