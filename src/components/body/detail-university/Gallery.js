import React, { useEffect, useState } from 'react';
import detailUniversityQuery from "query/detail-university";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Loading from "common/Loading";
import GalleryImages from 'react-photo-gallery';
import Author from "./common/Author";
import Sticky from "./common/Sticky";
import "./style/gallery.css";

function Gallery() {
    const { slug } = useParams();
    const { data, loading, error } = useQuery(detailUniversityQuery.GET_GALLERY, {
        variables: {
            id: slug
        }
    });
    useEffect(()=>{
        fetchPhoto()
    }, [data, loading, error])
    const galleries = !loading && !error && !!data && data.allUniversities[0].detailUniversity.galeries;

    const [ photoAlbum, setPhotoAlbum ] = useState([]);
    const fetchPhoto = () => {
         if (!!galleries){
            let array = []
            galleries.map(item=>{
                array = [
                    ...array,
                    {
                        src: item.image.publicUrl,
                        alt: "gallery",
                        width: Math.floor(Math.random() * 3) + 1,
                        height: 1,
                        className: "img-gallery"
                    }
                ]
                return "";
            })
            setPhotoAlbum(array)
            }
        }

  
    console.log("photo", photoAlbum);
    
    return (
      <>
      <Sticky />
    <div className="gallery-container container">
    
    <Author />
      <h1 className="title-galery">Các hoạt động của trường</h1>
      {
            !!galleries ? 
            <GalleryImages photos={photoAlbum} />
             :(
               <Loading />
             )
           
        }
    </div>
      </>
 

    )
}

export default Gallery
