import React from "react";

import { useMutation } from "@apollo/client";
import { commentMutation } from "query/comment";
import DeleteIcon from "@material-ui/icons/Delete";
import parse from "html-react-parser";

function ContentComment(props) {
  const { id, content, user } = props;
  const [deleteComment, { data }] = useMutation(commentMutation.REMOVE_COMMENT);
  const handleOnClick = () => {
    deleteComment({
      variables: {
        id: id,
      },
    });
  };
  return (
    <div className="item-content-comment">
      <div className="item-news-comment">
        <p>{parse(`${content}`)}</p>
        <p>-{user.username} -</p>
      </div>
      <div className="like-comment">
        <button
          className="btn btn-warning"
          style={{
            display: user.id !== "5f9a40681a488a2238f7dd53" && "none",
          }}
          onClick={handleOnClick}
        >
          Xóa
        </button>
        {/* <DeleteIcon /> */}
      </div>
    </div>
  );
}

export default ContentComment;
