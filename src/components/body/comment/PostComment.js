import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
//importing local file
import { commentMutation } from "query/comment";
import { commentQuery } from "query/comment";
import "./style/PostComment.css";
//material-Ui
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

function PostComment() {
  const { slug } = useParams();
  const dispatch = useDispatch();
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
      refetchQueries: [
        {
          query: commentQuery.GET_ALL_COMMENT,
          variables: {
            id: slug,
          },
        },
      ],
    });
  };
  useEffect(() => {}, [comment, data, dispatch]);
  // console.log("RENDER_POST_COMMENT");

  return (
    <div className="container group-input-post">
      <textarea
        type="text"
        className="input-post"
        placeholder="Viết bình luận ở đây..."
        onChange={handleOnChange}
      />
      <div className="bg-btn-post">
        <Button
          type="submit"
          // className="btn-post"
          onClick={handleClick}
          variant="contained"
          color="primary"
          endIcon={<SendIcon />}
          size="small"
        >
          Đăng
        </Button>
      </div>
    </div>
  );
}

export default PostComment;
