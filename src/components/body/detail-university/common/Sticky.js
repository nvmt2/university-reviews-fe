import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
//import local file
import LoadingImage from "common/loading/LoadingImage";
import detailUniversityQuery from "query/detail-university";
import "./../style/sticky.css";
//import material-ui
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import VisibilityIcon from "@material-ui/icons/Visibility";

function Sticky() {
  const { slug } = useParams();
  const { data, loading, error } = useQuery(
    detailUniversityQuery.GET_UNIVERSITY,
    {
      variables: {
        id: slug,
      },
    }
  );
  const contentSticky = !loading && !error && data.University;
  useEffect(() => {}, [data, error, loading]);
  return (
    <div>
      <div className="view-intro">
        {!!contentSticky ? (
          <img
            src={contentSticky.logo.publicUrlTransformed}
            className="logo-intro"
            alt="logo"
            title={`Logo of ${contentSticky.code}`}
          />
        ) : (
          <LoadingImage />
        )}
        <ThumbUpIcon color="action" />
        <p className="count-view">0</p>
        <ThumbDownIcon color="action" />
        <VisibilityIcon />
      </div>
    </div>
  );
}

export default Sticky;
