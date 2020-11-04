import React from "react";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

function PaginationComment() {
  return (
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
  );
}

export default PaginationComment;
