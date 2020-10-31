import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { commentMutation } from "query/comment";
import "./style/PostComment.css";

function PostComment() {
  const { slug } = useParams();
  const [createNewcomment, { data }] = useMutation(
    commentMutation.CREATE_COMMENT
  );
  const [comment, setComment] = useState({
    content: "",
    idUser: "5f9a40681a488a2238f7dd53",
    idTopic: slug,
  });
  const handleOnChange = (e) => {
    setComment({
      ...comment,
      content: e.target.value,
    });
  };
  const handleClick = () => {
    createNewcomment({
      variables: comment,
    });
  };
  useEffect(() => {}, [comment]);
  console.log("COMMENT", data);
  return (
    <div className="container group-input-post">
      <textarea
        type="text"
        className="input-post"
        placeholder="Viết bình luận ở đây..."
        onChange={handleOnChange}
      />
      <div className="bg-btn-post">
        <button type="submit" className="btn-post" onClick={handleClick}>
          Đăng
        </button>
      </div>
    </div>
  );
}

export default PostComment;
