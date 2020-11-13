import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

function LoadingText() {
  return (
    <div>
      <Skeleton width={240} />
      <Skeleton width={280} />
      <Skeleton width={280} animation="wave" />
    </div>
  );
}

export default LoadingText;
