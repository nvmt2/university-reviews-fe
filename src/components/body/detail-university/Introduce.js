import React, { useEffect } from 'react';
import detailUniversityQuery from "query/detail-university";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import Loading from "common/Loading"

function Introduce() {
    const { slug } = useParams();
    const { data, loading, error } = useQuery(detailUniversityQuery.GET_INTRODUCE, {
        variables: {
            id: slug
        }
    })
    useEffect(()=>{

    }, [data, loading, error]);
    const contentIntroduce = !loading && !error && !!data && data.allUniversities[0].detailUniversity.introduce
    return (
        <div style={{minHeight: "600px"}}>
        {
            !!contentIntroduce ? (
                <span>
                    {
                     parse(`${contentIntroduce}`)
                    }
                </span>
            ) :(
                <Loading />
            )
        }
            Nội dung trang Giới thiệu
        </div>
    )
}

export default Introduce
