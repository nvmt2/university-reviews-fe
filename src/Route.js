import React from "react";
import Layout from "./components/layout";
import routes from "./routes";
import { Route } from "react-router-dom";

function RouteWrapper() {
  return (
    <div>
      <Layout>
        {routes.map((route, index) => {
          return <Route key={index} {...route} />;
        })}
      </Layout>
    </div>
  );
}

export default RouteWrapper;
