import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
//import local file
import { topicQuery } from "query/topic";
import { useParams } from "react-router-dom";
import MyProgress from "common/loading/MyProgress";
import LinearProgress from "@material-ui/core/LinearProgress";

function Categories(props) {
  const { slug } = useParams();
  const { data, loading, error } = useQuery(topicQuery.GET_TAGS, {
    variables: {
      idUniversity: slug,
    },
  });
  useEffect(() => {}, [data, loading, error]);
  const listTags = !loading && !error && data.allTopics;
  // remove the same elements in array
  let uniqueTags =
    !!listTags &&
    listTags.filter(
      (arr, index, self) => index === self.findIndex((t) => t.tags === arr.tags)
    );

  console.log("uniqueTags", uniqueTags);
  return (
    <div>
      <p className="title-categories-topic">Chuyên mục nổi bật</p>
      <div className="category-topic">
        {!!uniqueTags ? (
          uniqueTags.map((item, index) => (
            <button
              key={index}
              className="content-category-topic"
              onClick={() => props.handleEvent(item.tags)}
            >
              {item.tags}
            </button>
          ))
        ) : (
          /* <MyProgress />  */
          <h1>...</h1>
        )}
      </div>
    </div>
  );
}

export default Categories;
