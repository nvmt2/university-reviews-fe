import React from 'react';
//internal components
import AppBar from 'layout/components/AppBar';
import Footer from 'layout/components/Footer';
//material-ui icons
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined';
import ScrollToTop from 'react-scroll-up';
import Fab from '@material-ui/core/Fab';

function MyLayout(props) {
  return (
    <div className="parrent-layout">
      <AppBar changeTheme={props.changeTheme} />
      <div id="children" className="child-layout">
        {/* button scoll up */}
        <ScrollToTop showUnder={160} style={{ bottom: 165 }}>
          <Fab size="medium" color="primary" aria-label="scoll-top">
            <div className="rotate-icon">
              <ExpandLessOutlinedIcon />
            </div>
          </Fab>
        </ScrollToTop>
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default MyLayout;
