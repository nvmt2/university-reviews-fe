import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { commentMutation } from "query/comment";
import { useParams } from "react-router-dom";
//importing local file
import { commentQuery } from "query/comment";
import DeleteOutlineRoundedIcon from "@material-ui/icons/DeleteOutlineRounded";
import parse from "html-react-parser";
//material-ui
import Button from "@material-ui/core/Button";

function ContentComment(props) {
  const { slug } = useParams();
  const { id, content, user } = props;
  const [deleteComment, { data }] = useMutation(commentMutation.REMOVE_COMMENT);
  const handleOnClick = () => {
    deleteComment({
      variables: {
        id: id,
      },
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
  console.log("RENDER_CONTENT");
  return (
    <div className="item-content-comment">
      <div className="item-news-comment">
        <p>{parse(`${content}`)}</p>
        <p>-{user.username} -</p>
      </div>
      <div className="like-comment">
        <Button
          style={{
            display: user.id !== "5f9a40681a488a2238f7dd53" && "none",
          }}
          onClick={handleOnClick}
          className="button-remove"
          variant="contained"
          startIcon={<DeleteOutlineRoundedIcon />}
          size="small"
        >
          Xóa
        </Button>
      </div>
    </div>
  );
}

export default ContentComment;
