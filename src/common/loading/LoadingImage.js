import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

export default function LoadingImage() {
  return (
    <div>
      <Skeleton variant="circle" width={40} height={40} />
    </div>
  );
}
