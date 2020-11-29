import React from "react";
import Header from "./Header";
import Appbar from "./Appbar";
import Footer from "./Footer";
import ScrollToTop from "react-scroll-up";
import Fab from "@material-ui/core/Fab";
import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";

function Index({ children }) {
  return (
    <div className="parrent-layout">
      <Appbar />
      {/* short code of { props.children } */}
      <div id="children" className="child-layout">
        {/* button scoll up */}
        <ScrollToTop showUnder={160}>
          <Fab size="medium" color="primary" aria-label="scoll-top">
            <div className="rotate-icon">
              <ExpandLessOutlinedIcon />
            </div>
          </Fab>
        </ScrollToTop>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Index;
