import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

//importing component
import PostComment from "./PostComment";
import HeaderComment from "./HeaderComment";
import ContentComment from "./ContentComment";
import PaginationComment from "./PaginationComment";
import { commentQuery } from "query/comment";
import "./style/comment.css";

const Index = ({ location }) => {
  const { slug } = useParams();
  const { state } = location;
  const { data, loading, error } = useQuery(commentQuery.GET_ALL_COMMENT, {
    variables: {
      id: slug,
    },
  });
  const contentComment = !loading && !error && !!data && data.allComments;
  useEffect(() => {}, [data, loading, error]);

  return (
    <div className="comment">
      <HeaderComment {...state} />
      {/* Form which to post comment */}
      <div className="PostComment">
        <PostComment />
        <div className="container group-content-comment">
          {!!contentComment ? (
            contentComment.map((item, index) => <ContentComment {...item} />)
          ) : (
            <h1>Loading</h1>
          )}
        </div>
        <PaginationComment />
      </div>
    </div>
  );
};
export default Index;
