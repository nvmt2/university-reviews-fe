import Index from 'components/layout';
import React from 'react';
import "./major.css"

function Major() {
    const data = [
        {
            name: "cong nghe",
            group: ["cong nghe thong tin", "an ninh mang"],
        },
        {
            name: "Bac Sy",
            group: ["Bac sy thu y", "Bac sy rang ham mat", "Bac sy tam than"]
        },
        {
            name: "nong lan",
            group: ["Nong lam thuy san", "Nong nghiep", "Cong nghiep", "Danh bat ca"]
        }
        
    ]
    return (
        <div>
        <table >
            <thead>
                <th scope="col">Nhóm ngành</th>
                <th scope="col">Chuyên ngành</th>
                <th scope="col">Tổ hợp môn</th>
           </thead>
           {
               data.map((groupMajor, indexGroupMajor) => {
                
                    return (
                    <tbody key={indexGroupMajor}>
                    {
                        groupMajor.group.map((branchMajor, indexBranchMajor)=>(
                            <tr>
                                {

                                    indexBranchMajor === 0 && (
                                        <th scope="row" rowspan={ groupMajor.group.length }> {groupMajor.name} </th>
                                    )
                                }
                                <td>{branchMajor}</td>
                                <td>A01</td>
                      
                            </tr>
                        ))
                    }
                   
                    </tbody>
                    )
               })
           }
        </table>
           
        </div>
    )
}

export default Major
