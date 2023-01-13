import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

// Style imports
import mainStyles from "~/styles/main.css";
import bootstrapCSS from "bootstrap/dist/css/bootstrap.min.css";
import footerStyle from "~/components/footer/footer.css";
import headerStyle from "~/components/header/header.css"

// Components import
import Footer  from '~/components/footer/footer'
import Header from "./components/header/header";

export const meta = () => ({
 charset: "utf-8",
 title: "New Remix App",
 viewport: "width=device-width,initial-scale=1",
});

export default function App() {
 return (
  <html lang="en">
   <head>
    <Meta />
    <Links />
   </head>
   <body className="d-flex flex-column flex-fill min-vh-100 gap-4">
    <Header />
    <main className="container-fluid d-flex flex-fill flex-lg-row">
    <Outlet />
    <ScrollRestoration />
    </main>
    <Footer />
    <Scripts />
    <LiveReload />
   </body>
  </html>
 );
}

export function links() {
 return [
  {
   rel: "stylesheet",
   href: mainStyles,
  },
  {
    rel: "stylesheet",
    href: bootstrapCSS,
   },
   {
    rel: "stylesheet",
    href: headerStyle,
   },
   {
    rel: "stylesheet",
    href: footerStyle,
   }
 ];
}
