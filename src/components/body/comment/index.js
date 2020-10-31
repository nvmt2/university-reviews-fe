import React from "react";
import { useParams } from "react-router-dom";

//importing component
import PostComment from "./PostComment";
import HeaderComment from "./HeaderComment";
import ContentComment from "./ContentComment";
import PaginationComment from "./PaginationComment";
import "./comment.css";
const Index = ({ location }) => {
  const param = useParams();
  const { state } = location;

  return (
    <div className="comment">
      <HeaderComment {...state} />
      {/* Form which to post comment */}
      <div className="PostComment">
        <PostComment />
        <div className="container group-content-comment">
          <ContentComment />
        </div>
        <PaginationComment />
      </div>
    </div>
  );
};
export default Index;
