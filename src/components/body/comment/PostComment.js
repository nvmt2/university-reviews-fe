import React from "react";

import "./PostComment.css";

import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import DeleteIcon from '@material-ui/icons/Delete';

function PostComment() {
  return (
    <div className="PostComment">
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
      <div className="container group-content-comment">
        <div className="item-content-comment">
          <p className="item-news-comment">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            enim ab qui aperiam iste eos voluptate alias iure voluptatum, amet
            culpa, vero, consectetur voluptatem! Reprehenderit aut, tempora,
            quasi suscipit minima fugiat consequatur quas nisi at est maiores ab
            iure vero dolorem rem distinctio? Tempora, eligendi deserunt sint
            perspiciatis quis recusandae
          </p>
          <div className="like-comment">
            <DeleteIcon />
          </div>
        </div>
        <div className="item-content-comment">
          <p className="item-news-comment">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            enim ab qui aperiam iste eos voluptate alias iure voluptatum, amet
            culpa, vero, consectetur voluptatem! Reprehenderit aut, tempora,
            quasi suscipit minima fugiat consequatur quas nisi at est maiores ab
            iure vero dolorem rem distinctio? Tempora, eligendi deserunt sint
            perspiciatis quis recusandae
          </p>
          <div className="like-comment">
            <DeleteIcon />
          </div>
        </div>
      </div>
      <div className="container footer-comment">
        <ul className="row group-id-comment">
          <li>
            <a href="#" className="id-comment">
              <NavigateBeforeIcon />
            </a>
          </li>
          <li>
            <a href="#" className="id-comment">
              1
            </a>
          </li>
          <li>
            <a href="#" className="id-comment">
              2
            </a>
          </li>
          <li>
            <a href="#" className="id-comment">
              3
            </a>
          </li>
          <li>
            <a href="#" className="id-comment">
              4
            </a>
          </li>
          <li>
            <a href="#" className="id-comment">
              5
            </a>
          </li>
          <li>
            <a href="#" className="id-comment">
              6
            </a>
          </li>
          <li>
            <a href="#" className="id-comment">
              <NavigateNextIcon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PostComment;
