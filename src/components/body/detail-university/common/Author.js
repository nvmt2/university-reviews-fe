import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
//import local file
import detailUniversityQuery from "query/detail-university";
import LoadingText from "common/loading/LoadingText";
import "./../style/author.css";

function Author() {
  const { slug } = useParams();
  const { data, loading, error } = useQuery(
    detailUniversityQuery.GET_UNIVERSITY,
    {
      variables: {
        id: slug,
      },
    }
  );
  const contentAuthor = !loading && !error && data.University;
  useEffect(() => { }, [data, error, loading]);

  return (
    <div>
      {!!contentAuthor ? (
        <div>
          <p className="infor-intro">{`${contentAuthor.name} - ${contentAuthor.code}`}</p>
          <div className="row dates-intro">
            <p>{contentAuthor.address}</p>
          </div>
        </div>
      ) : (
          <LoadingText />
        )}
    </div>
  );
}
export default Author;
