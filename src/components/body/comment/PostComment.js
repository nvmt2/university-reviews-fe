import React from "react";

import "./PostComment.css";

import ThumbUpIcon from "@material-ui/icons/ThumbUp";

import DeleteIcon from "@material-ui/icons/Delete";

function PostComment() {
  return (
    <div className="container group-input-post">
      <textarea
        type="text"
        className="input-post"
        placeholder="Viết bình luận ở đây..."
      />
      <div className="bg-btn-post">
        <button type="submit" className="btn-post">
          Đăng
        </button>
      </div>
    </div>
  );
}

export default PostComment;
