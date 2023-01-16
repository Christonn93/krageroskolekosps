import NewsCard from "~/components/infoCards/infoCards";

export default function Index() {
  return (
    <>
    <div className="container">
      <div className="container-fluid d-flex flex-column gap-4">
        <h1>Velkommen til kragerø Skole korps</h1>
        <p>Her på nettsidene våre finner du oppdaterte nyheter og korpsets historie. Kom snart innom igjen for vi oppdaterer med ujevne mellomrom med både nyheter og historien vår. Er det noe du lurer på finner du aktuell kontaktinformasjon under fanen om oss. </p>
      </div>
      <div className="container-fluid d-flex flex-column gap-4">
        <h2>Nyhetsoppdatering fra NMF</h2>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>    
    </div>

    </>
  );
}
