import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Create a set of questions" },
    { name: "description", content: "Create a set of questions or quiz" },
  ];
};

export default function Create() {
  return (
    <div className="mt-9 flex flex-col gap-9 md:overflow-hidden">
      <section className="flex flex-col gap-5">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-black-4">Lets Create something</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
            <div className="bg-primary-2 text-white-1 rounded-lg shadow-lg p-4 flex items-center">
              <span className="font-bold text-lg">Quizzes</span>
            </div>
            <div className="bg-primary-2 text-white-1 rounded-lg shadow-lg p-4 flex items-center">
              <span className="font-bold text-lg">Voice overs</span>
            </div>
            <div className="bg-primary-2 text-white-1 rounded-lg shadow-lg p-4 flex items-center">
              <span className="font-bold text-lg">FlashCards</span>
            </div>
          </div>
        </div>
        <Outlet />
      </section>
    </div>
  );
}
