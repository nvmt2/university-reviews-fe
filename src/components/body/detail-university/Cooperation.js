import React, { useEffect } from 'react';
import detailUniversityQuery from "query/detail-university";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Loading from "common/Loading"

export default function Cooperation() {
    const { slug } = useParams();
    const { data, loading, error } = useQuery(detailUniversityQuery.GET_PARTNER, {
        variables: {
            id: slug
        }
    })
    useEffect(()=>{
    }, [data, loading, error]);
    const contentPartner = !loading && !error && !!data && data.allUniversities[0].detailUniversity.partner
    return (
        <div>
            <table>
                <thead>
                    <th>Tên</th>
                    <th>Khu vực</th>
                    <th>Chương trình liên kết</th>
                    <th>Mô tả</th>
                </thead>
                {
                    !!contentPartner ? (
                        <tbody>
                            {
                                contentPartner.map((item, index)=>(
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.state}</td>
                                <td>{item.description}</td>
                                <td>{item.link}</td>
                            </tr>
                            )
                                
                            )
                            }
                        </tbody>
                    ) : (
                        <Loading />
                    )
                    
                    
                }
                <tbody>

                </tbody>
            </table>
        </div>
    )
}
