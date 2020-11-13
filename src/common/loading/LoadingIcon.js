import React from "react";

function LoadingIcon() {
  const styleLoading = {
    full: {
      position: "absolute",
      width: "70%",
      height: "100%",
      backgroundImage: `url('https://s3.us-east-2.amazonaws.com/jms-s3-cx-rel-p-pmc4/assets/profilejms/images/loading.gif')`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center top",
      backgroundSize: "100px 100px",
    },
  };
  return <div style={styleLoading.full}></div>;
}

export default LoadingIcon;
