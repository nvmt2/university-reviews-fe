import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useQuery } from "@apollo/client";

//import Component and local file.
import Categories from "./Categories";
import CardTopic from "./CardTopic";
import Banner from "./Banner";
import { topicQuery } from "query/topic";
import LoadingIcon from "common/loading/LoadingIcon";
import "./style/topic.css";
import "./style/categories.css";
//importing material-ui
import Pagination from "@material-ui/lab/Pagination";

function Index({ location }) {
  const { slug } = useParams();
  let history = useHistory();
  const [tag, setTag] = useState();
  //call api get all of topics
  const { data, loading, error } = useQuery(topicQuery.GET_ALL_TOPICS, {
    variables: {
      id: slug,
      tag,
    },
  });

  useEffect(() => {
    //Check current param with array params in data
    if (error) history.push("/notfound");
  }, [data, loading, error, tag]); // render when data, loading or error variables have a new value

  let contentTopic = !loading && !error && !!data && data.allTopics;
  const nameUniversity = !!contentTopic && data.allTopics[0].university.name;

  //handle event : when user click tag in Categories component, so re-render CardTopic component by tag which clicked by user
  const handleClickTag = (tag) => {
    setTag(tag);
  };
  console.log("re-render index.js Topic");

  return (
    <>
      <NavLink
        style={{ display: "none" }}
        to={() => {
          return {
            pathname: `${location.pathname}/comments`,
          };
        }}
      >
        comment
      </NavLink>
      <div className="topic">
        {!!nameUniversity && <Banner name={nameUniversity} />}

        <div className="container">
          <div className="main-topic">
            <div className="row">
              <div className="col-md-8 items-topics">
                {!!contentTopic ? (
                  contentTopic.map((item, index) => (
                    <CardTopic key={index} {...item} />
                  ))
                ) : (
                  <LoadingIcon />
                )}
              </div>
              {/* show list tags at right */}
              <div className="col-md-3 group-categories-topic">
                <Categories handleEvent={handleClickTag} />
              </div>
              <div className="col-md-8 mb-5 ">
                <div style={{ width: "50%", margin: "auto" }}>
                  <Pagination
                    count={20}
                    color="primary"
                    shape="rounded"
                    variant="outlined"
                    size="medium"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Index;
