import React from "react";
import Layout from "./components/layout";
import routes from "./routes";
import { Route, Switch } from "react-router-dom";

function RouteWrapper() {
  return (
    <div>
      <Layout>
        <Switch>
          {routes.map((route, index) => {
            return <Route key={index} {...route} />;
          })}
        </Switch>
      </Layout>
    </div>
  );
}

export default RouteWrapper;
