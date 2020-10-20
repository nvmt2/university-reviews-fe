import Index from 'components/layout';
import React, { useEffect } from 'react';
import detailUniversityQuery from "query/detail-university";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Loading from "common/Loading";
import "./major.css";


function Major() {
    const { slug } = useParams();
    const { data, loading, error } = useQuery(detailUniversityQuery.GET_MAJOR, {
        variables: {
            id: slug
        }
    })
    useEffect(()=>{

    }, [data, loading, error]);
    
    const contentMajor = !loading && !error && !!data && data.allUniversities[0].detailUniversity.majors


    return (
        <div>
        <table >
            <thead>
                <th scope="col">Nhóm ngành</th>
                <th scope="col">Chuyên ngành</th>
                <th scope="col">Tổ hợp môn</th>
           </thead>
           {
               !!contentMajor ? (
                contentMajor.map((groupMajor, indexGroupMajor) => {
                
                return (
                <tbody key={indexGroupMajor}>
                {
                    groupMajor.majors.map((branchMajor, indexBranchMajor)=>(
                        <tr>
                            {

                                indexBranchMajor === 0 && (
                                    <th scope="row" rowspan={ groupMajor.majors.length }> {groupMajor.name} </th>
                                )
                            }
                            <td>{branchMajor.name}</td>
                            <td>{branchMajor.subject}</td>
                  
                        </tr>
                    ))
                }
               
                </tbody>
                )
           })
               ) : (
                 <Loading />
               )
              
           }
        </table>
           
        </div>
    )
}

export default Major
