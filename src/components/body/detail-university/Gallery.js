import React, { useEffect } from 'react';
import detailUniversityQuery from "query/detail-university";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";

function Gallery() {
    const { slug } = useParams();
    const { data, loading, error } = useQuery(detailUniversityQuery.GET_GALLERY, {
        variables: {
            id: slug
        }
    })
    useEffect(()=>{

    }, [data, loading, error]);
    const galleries = !loading && !error && !!data && data.allUniversities[0].detailUniversity.galeries
    console.log("Galleries", galleries)

    return (
        <div>
           {
               !!galleries ? (
                galleries.map((item,index)=>{
                    return <div>
                        <img src={item.image.publicUrl} alt=" gallery" style={{ maxHeight: "400px"}} />
                        <p>{item.name}</p>
                    </div>
                })
               ) : (
                   <h5>Loading...</h5>
               )
           }
        </div>
    )
}

export default Gallery
