const ContactForm = () => {
 return (
  <form className="container mt-5">
   <div className="mb-3">
    <label for="name" className="form-label">
     Navn: 
    </label>
    <input type="name" class="form-control" id="name" placeholder="Ola Norman" />
   </div>

   <div className="mb-3">
    <label for="email" className="form-label">
     E-post
    </label>
    <input type="email" class="form-control" id="email" placeholder="Ola.Norman@epost.no" />
   </div>

   <div className="mb-3">
    <label for="melding" className="form-label">
     Melding:
    </label>
    <textarea className="form-control" id="melding" rows="3"></textarea>
   </div>

   <div className="mb-3">
   <button className="btn btn-success">Send melding</button>
   </div>

  </form>
 );
};

export default ContactForm;
