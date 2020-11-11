import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "react-scroll-up";
import Fab from "@material-ui/core/Fab";
import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";

function Index({ children }) {
  return (
    <div className="parrent-layout">
      <Header />
      {/* short code of { props.children } */}
      <div id="children" className="child-layout">
        <ScrollToTop showUnder={160}>
          <Fab size="medium" color="primary" aria-label="scoll-top">
            <ExpandLessOutlinedIcon />
          </Fab>
        </ScrollToTop>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Index;
