import React from "react";
import { useMutation } from "@apollo/client";
import { commentMutation } from "query/comment";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
//importing local file
import { commentQuery } from "query/comment";
import DeleteOutlineRoundedIcon from "@material-ui/icons/DeleteOutlineRounded";
import parse from "html-react-parser";
//material-ui
import IconButton from "@material-ui/core/IconButton";

function ContentComment(props) {
  const { slug } = useParams();
  const { id, content, user } = props;
  const [deleteComment] = useMutation(commentMutation.REMOVE_COMMENT);
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
  // Authorization
  const state = useSelector((state) => state.login.data.id);
  const checkAuthor = () => {
    let result = state === user.id ? "block" : "none";
    return { display: result };
  };
  console.log("RENDER_CONTENT");
  return (
    <div className="item-content-comment">
      <div className="item-news-comment">
        <p>{parse(`${content}`)}</p>
        <p>-{user.username} -</p>
      </div>
      <div className="like-comment">
        <IconButton
          style={checkAuthor()}
          onClick={handleOnClick}
          aria-label="delete"
          color="primary"
        >
          <DeleteOutlineRoundedIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default ContentComment;
