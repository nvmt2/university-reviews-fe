import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
//internal modules
import { routes } from 'constant/routes-main';
//internal components
import Layout from 'layout';
import FrameDialog from 'common/dialog/FrameDialog';

function RouterWrapper(props) {
  return (
    <div>
      <Router>
        <AnimatePresence exitBeforeEnter>
          <Layout changeTheme={props.changeTheme}>
            <Switch>
              {routes.map((route, index) => {
                return <Route key={index} {...route} />;
              })}
            </Switch>
            <FrameDialog />
          </Layout>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default RouterWrapper;
