import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function ContentComment() {
  return (
    <div className="item-content-comment">
      <p className="item-news-comment">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores enim
        ab qui aperiam iste eos voluptate alias iure voluptatum, amet culpa,
        vero, consectetur voluptatem! Reprehenderit aut, tempora, quasi suscipit
        minima fugiat consequatur quas nisi at est maiores ab iure vero dolorem
        rem distinctio? Tempora, eligendi deserunt sint perspiciatis quis
        recusandae
      </p>
      <div className="like-comment">
        <DeleteIcon />
      </div>
    </div>
  );
}

export default ContentComment;
