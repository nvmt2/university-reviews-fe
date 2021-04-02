import React from "react";
import Pagination from "@material-ui/lab/Pagination";

function PaginationComment() {
  return (
    <div className="container footer-comment">
      <Pagination
        count={1}
        color="primary"
        shape="rounded"
        variant="outlined"
        size="medium"
      />
    </div>
  );
}

export default PaginationComment;
