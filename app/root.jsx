import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

// Style imports
import mainStyles from "~/styles/main.css";
import bootstrapCSS from "bootstrap/dist/css/bootstrap.min.css";
import footerStyle from "~/components/footer/footer.css";
import headerStyle from "~/components/header/header.css";
import sidebarStyle from "~/components/supporters/sidebarStyle.css"
import photoGalleryStyle from '~/components/photoGallery/photoGalleryStyle.css'
import cardStyle from "~/components/about/organization/cardStyle.css";
import calenderStyle from "./components/calender/calender.css";

// Components import
import Footer from "~/components/footer/footer";
import Header from "./components/header/header";
import RightSide from "./components/supporters/rightSide";
import Calender from "./components/calender/calender";

export const meta = () => ({
 charset: "utf-8",
 title: "Kragerø skole korps",
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
    <main className="d-flex flex-fill flex-lg-row">
     <div className="container-fluid mx-3">
      <div className="row gy-4">
       <div className="col-2">
       <h3>Hva skjer?</h3>
        <Calender />
       </div>
       <div className="col-8">
        <Outlet />
       </div>
       <div className="col-2">
        <RightSide />
       </div>
      </div>
     </div>
    </main>
    <Footer />
    <Scripts />
    <ScrollRestoration />
    <LiveReload />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
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
  },
  {
   rel: "stylesheet",
   href: sidebarStyle,
  },
  {
    rel: "stylesheet",
    href: photoGalleryStyle,
   },
   {
    rel: "stylesheet",
    href: cardStyle,
   },
   {
    rel: "stylesheet",
    href: calenderStyle,
   },
 ];
}
