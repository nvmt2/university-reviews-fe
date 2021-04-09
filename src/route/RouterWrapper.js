import React from 'react';
import Layout from '../layout';
import { routes } from '../constant/routes-main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function RouterWrapper() {
  return (
    <div>
      <Router>
        <AnimatePresence exitBeforeEnter>
          <Layout>
            <Switch>
              {routes.map((route, index) => {
                return <Route key={index} {...route} />;
              })}
            </Switch>
          </Layout>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default RouterWrapper;
