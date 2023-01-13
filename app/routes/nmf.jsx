// importing components
import Card from "~/components/infoCards/infoCards";

// Importing class
import cardStyle from '~/components/infoCards/infoCards.css'

export default function Nmf() {
    return (
      <>
      <div className="container-fluid d-flex flex-column">
      <h2>NMF</h2>
      <div className="">
      <Card />
      </div>
      </div>
      </>
    );
  }
  
  export function links() {
    return [
     {
      rel: "stylesheet",
      href: cardStyle,
     }
    ]}