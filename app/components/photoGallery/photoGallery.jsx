const PhotoGallery = () => {

    const image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
    const alt = 'alt text'

 return (
  <div className="container gallery-container">
   <div className="tz-gallery">
    <div className="row">
     <div className="col-sm-12 col-md-4">
      <img src={image} alt={alt}/>
     </div>
     <div className="col-sm-6 col-md-4">
     <img src={image} alt={alt}/>
     </div>
     <div className="col-sm-6 col-md-4">
     <img src={image} alt={alt}/>
     </div>
     <div className="col-sm-12 col-md-8">
     <img src={image} alt={alt}/>
     </div>
     <div className="col-sm-6 col-md-4">
     <img src={image} alt={alt}/>
     </div>
     <div className="col-sm-6 col-md-4">
      <img src={image} alt={alt}/>
     </div>
    </div>
   </div>
  </div>
 );
};

export default PhotoGallery;
