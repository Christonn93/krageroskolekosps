const Calender = () => {
 const eventArray = [
  {
   day_date: "18",
   month_year: "01.2023",
   date: "18.01.2023",
   location: "",
   header: "Event",
   description: "Noe skjer",
  },
  {
   day_date: "18",
   month_year: "01.2023",
   date: "18.01.2023",
   location: "",
   header: "Event",
   description: "Noe skjer",
  },
  {
   day_date: "18",
   month_year: "01.2023",
   date: "18.01.2023",
   location: "",
   header: "Event",
   description: "Noe skjer",
  },
  {
   day_date: "18",
   month_year: "01.2023",
   date: "18.01.2023",
   location: "",
   header: "Event",
   description: "Noe skjer",
  },
 ];

 const display = [];

 eventArray.forEach((e) => {
  const mapLocation = `http://maps.google.com/?q=${e.location}`;

  const d = new Date("July 21, 1983 01:15:00");
  console.log(d);
  let day = d.getDay();

  const option = { weekday: "long" };
  let convertToName = new Intl.DateTimeFormat("en-US", option).format(day);

  function calender() {
   var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
   var month = ["Jan", "Feb", "Mar", "Apr", "May", "jun", "jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
   var d = new Date();
   setText("calender-day", day[d.getDay()]);
   setText("calender-date", d.getDate());
   setText("calender-month-year", month[d.getMonth()] + " " + (1900 + d.getYear()));
  }


  display.push(
   <div className="card mb-3">
    <div className="card-header">
     <div id="calender">
      <p>{convertToName}</p>
      <p>{e.day_date}</p>
      <p>{e.month_year}</p>
     </div>
    </div>
    <div className="card-body">
     <h5 className="card-title">{e.header}</h5>
     <p className="card-text">{e.description}</p>
     <a href={mapLocation}>Sjekk ut hvor det skjer</a>
    </div>
   </div>
  );
 });

 return <>{display}</>;
};

export default Calender;
