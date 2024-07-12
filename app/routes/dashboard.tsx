import { LinksFunction, LoaderFunction } from "@remix-run/node";
import { Links, Meta, MetaFunction, Outlet, redirect } from "@remix-run/react";
import LeftSidebar from "~/components/LeftSidebar";
import MobileNav from "~/components/MobileNav";
import RightSidebar from "~/components/RightSidebar";
import { Toaster } from "~/components/ui/toaster";
import { getAuth } from "@clerk/remix/ssr.server";

export const meta: MetaFunction = () => [
  {
    charset: "utf-8",
    title: "New Remix App",
    viewport: "width=device-width,initial-scale=1",
  },
];

export const loader: LoaderFunction = async (args) => {
  const { userId, sessionId, getToken } = await getAuth(args);

  if (!userId) {
    return redirect("/sign-in?redirect_url=" + args.request.url);
  }

  return {};
};

export default function DashboardLayout() {
  return (
    <div className="relative flex flex-col">
      <main className="relative flex">
        <LeftSidebar />
        <section className="flex min-h-screen flex-1 flex-col px-4 sm:px-14">
          <div className="mx-auto flex w-full max-w-5xl flex-col max-sm:px-4">
            <div className="flex h-16 items-center justify-between md:hidden">
              <MobileNav />
            </div>
            <div className="flex flex-col md:pb-14">
              <Toaster />
              <Outlet />
            </div>
          </div>
        </section>
        <RightSidebar />
      </main>
    </div>
  );
}
