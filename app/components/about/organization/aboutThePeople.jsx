const AboutThePeople = () => {
 const peopleArray = [
  {
   image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
   name: "Ola Norman",
   role: "Dirigent",
   num: "+454545454",
   email: "email.email@email.com",
  },
  {
   image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
   name: "Kari Norman",
   role: "Sekretær",
   num: "+454545454",
   email: "email.email@email.com",
  },
  {
   image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
   name: "Jens Arne Norman",
   role: "Admin",
   num: "+454545454",
   email: "email.email@email.com",
  },
 ];

 const display = [];

 peopleArray.forEach((e) => {
    const email = `mailto:${e.email}`
    const phone = `tel:${e.num}`

    display.push(
   <div className="col">
    <div className="card card-size">
     <img src={e.image} />
     <div className="card-body">
      <h2>Navn: {e.name}</h2>
      <p>Rolle: {e.role}</p>
      <h4>Kontakt info</h4>
      <ul className="list-group">
       <li className="list-group-item"><a href={email}>Email</a></li>
       <li className="list-group-item"><a href={phone}>Telefon</a></li>
      </ul>
     </div>
    </div>
   </div>
  );
 });

 return (
  <div className="row row-cols-1 row-cols-md-4 g-4 justify-content-center mt-3">
  {display}
  </div>
 );
};

export default AboutThePeople;
