import React from "react";
import "./Galery.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Gallery from 'react-photo-gallery';


function Galery() {
  const PHOTO_SET = [
    {
      src: 'https://i.insider.com/5c79a8cfeb3ce837863155f5?width=750&format=jpeg&auto=webp',
      alt: "Toi",
      width: 2,
      height: 1,
      className: "img-gallery"
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzmD_Q3YQQK427OmgL4rb05I_zctIENrmSEg&usqp=CAU',
      width: 2.5,
      height: 1
    },
    {
      src: 'https://www.cambridgema.gov/-/media/Images/sharedphotos/departmentphotos/animal.jpg?mw=1920',
      width: 2,
      height: 1
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTE8DNaueiFY75tpijtS097UT4iiHAW7WOolg&usqp=CAU',
      width: 1.5,
      height: 1
    },
    {
      src: 'https://images.ctfassets.net/9l3tjzgyn9gr/photo-112402/19dee2e6d21904e3762aecd9b1e061c0/112402-rabbit-lucky-animals-510x600.jpg?fm=jpg&fl=progressive&q=50&w=1200',
      width: 0.4,
      height: 1
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzmD_Q3YQQK427OmgL4rb05I_zctIENrmSEg&usqp=CAU',
      width: 1,
      height: 1
    },
    
  ];
  return (
    <div>
    <div className="view-intro">
    <img src="/assets/intro/logo.png" className="logo-intro" alt="logo" />
    <FavoriteIcon />
    <p className="count-view">0</p>
    <VisibilityIcon />
  </div>
    <div className="container">
    
      <div className="under">
        <p className="infor-intro">admin.duytan</p>
        <div className="row dates-intro">
          <p className="date-intro ">07/05/2020</p>
          <p className="date-intro">4:30:PM</p>
          <p className="date-intro">- 89 lượt đọc</p>
        </div>
      </div>

      <h1 className="title-galery">Các hoạt động của trường</h1>


      <Gallery photos={PHOTO_SET} onClick={(event)=>{
        console.log("EVNET", event)
      }} />
     
    
    </div>
    </div>
  );
}

export default Galery;
