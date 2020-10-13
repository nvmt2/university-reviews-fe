import React, { useEffect } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import "./../style.css";

function Index({ location }) {

  // const slugs = location.state ? location.state.slugs : [];
  // const checkslugs = (nameSlug) => nameSlug === slug;
  // useEffect(() => {
  //   //Check current param with array params in data
  //   var result = slugs.find(checkslugs);
  //   if (!result) history.push("/error");
  // }, []);
  const { slug } = useParams();
  let history = useHistory();

  useEffect(() => {
    //Check current param with array params in data
    if (!location.state) history.push("/notfound");
  }, []);
  return (
    <div>
      <h1>Chi tiết topic ( Thiện code )</h1>
    </div>
  );
}
export default Index;
