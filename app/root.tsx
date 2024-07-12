import {
  Links,
  MetaFunction,
  Outlet,
  Meta,
  ScrollRestoration,
  Scripts,
  json,
  useLoaderData,
} from "@remix-run/react";
import { LinksFunction, LoaderFunction } from "@remix-run/node";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ClerkApp } from "@clerk/remix";
import styles from "./tailwind.css?url";
import { useState } from "react";

export const meta: MetaFunction = () => [
  {
    charset: "utf-8",
    title: "New Remix App",
    viewport: "width=device-width,initial-scale=1",
  },
];
export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const loader: LoaderFunction = (args) => {
  const CONVEX_URL = process.env["CONVEX_URL"]!;
  return rootAuthLoader(args, ({ request }) => {
    return json({ ENV: { CONVEX_URL } });
  });
};

function App() {
  const { ENV } = useLoaderData<typeof loader>();
  const [convex] = useState(() => new ConvexReactClient(ENV.CONVEX_URL));
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ConvexProvider client={convex}>
          <Outlet />
        </ConvexProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default ClerkApp(App);
