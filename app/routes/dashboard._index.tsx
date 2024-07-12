import { getAuth } from "@clerk/remix/ssr.server";
import {
  redirect,
  type LoaderFunction,
  type MetaFunction,
} from "@remix-run/node";
export const meta: MetaFunction = () => {
  return [
    { title: "Study Buddy | Dashboard" },
    { name: "description", content: "Study Buddy!" },
  ];
};


export default function Index() {
  return (
    <div className="mt-9 flex flex-col gap-9 md:overflow-hidden">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold ">Whatever we want this to be </h1>
      </section>
    </div>
  );
}
