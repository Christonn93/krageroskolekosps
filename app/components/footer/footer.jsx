const Footer = () => {
  const companyName = `krageroskolekorps.no`
  const date = new Date().getFullYear();
  const copyright = `Copyright ${companyName} ${date}`;

    return (
  <footer className="d-flex flex-column gap-2 align-items-center">
   <div></div>
   <span className="footerHr"></span>
   <div className="p-4">
    {copyright}
   </div>
  </footer>
 );
}
export default Footer;

