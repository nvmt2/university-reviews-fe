import React, { useEffect } from "react";
import detailUniversityQuery from "query/detail-university";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import LoadingIcon from "common/loading/LoadingIcon";
import Author from "./common/Author";
import "./style/cooperation.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function Cooperation() {
  const { slug } = useParams();
  const { data, loading, error } = useQuery(detailUniversityQuery.GET_PARTNER, {
    variables: {
      id: slug,
    },
  });
  useEffect(() => {}, [data, loading, error]);
  const contentPartner =
    !loading &&
    !error &&
    !!data &&
    data.allUniversities[0].detailUniversity.partner;
  console.log("contentPartner", contentPartner);
  return (
    <div className="container">
      <Author />
      <h1 className="title-cooperation">Các đối tác quan hệ</h1>

      <table>
        <thead>
          <tr>
            <th className="th-cooperation">Tên</th>
            <th className="th-cooperation">Khu vực</th>
            <th className="th-cooperation">Chương trình liên kết</th>
            <th className="th-cooperation">Mô tả</th>
          </tr>
        </thead>
        {!!contentPartner ? (
          <tbody className="tbody-cooperation">
            {contentPartner.map((item, index) => (
              <tr>
                <td className="td-coopreation">{item.name}</td>
                <td className="td-coopreation">{item.state}</td>
                <td className="td-coopreation">{item.description}</td>
                <td className="td-coopreation">
                  <a href={item.link}>{item.link}</a>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td>
                <LoadingIcon />
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
}
