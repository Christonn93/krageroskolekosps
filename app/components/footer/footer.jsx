const Footer = () => {
  const companyName = `krageroskolekorps.no`
  const date = new Date().getFullYear();
  const copyright = `Copyright ${companyName} ${date}`;

    return (
  <footer className="d-flex flex-column gap-2 align-items-center">
   <div>
    <button className="btn">Styre login</button>
    <button className="btn">Medlem login</button>
   </div>
   <span className="footerHr"></span>
   <div className="p-4">
    {copyright}
   </div>
  </footer>
 );
}
export default Footer;

