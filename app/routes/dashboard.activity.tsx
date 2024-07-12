import { LoaderFunction, redirect } from "@remix-run/node";
import { getAuth } from "@clerk/remix/ssr.server";
import { createClerkClient } from "@clerk/remix/api.server";
import { useLoaderData } from "@remix-run/react";
import LoaderSpinner from "~/components/LoaderSpinner";
import ProfileCard from "~/components/ProfileCard";

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);

  if (!userId) {
    return redirect("/sign-in?redirect_url=" + args.request.url);
  }

  const user = await createClerkClient({
    secretKey: process.env.CLERK_SECRET_KEY,
  }).users.getUser(userId);
  console.log(user)
  return { user: user };
};

export default  function Profile() {
  let { user } =  useLoaderData<typeof loader>();
  if (!user) return <LoaderSpinner />;

  return (
    <section className="mt-9 flex flex-col">
      <h1 className="text-20 font-bold text-black max-md:text-center">
        Profile
      </h1>
      <div className="mt-6 flex flex-col gap-6 max-md:items-center md:flex-row">
        <ProfileCard
          imageUrl={user?.imageUrl!}
          userFirstName={user?.name!}
        />
      </div>
    </section>
  );
}
