import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

//import local file
import FormCreate from "./FormCreate";
import "./style/main.css";
//material-ui
import Alert from "@material-ui/lab/Alert";

function Index() {
  const idAuthor = useSelector((state) => state.login.data.id);
  return (
    <div className="container">
      <div className="row">
        <div className="offset-md-2 col-md-2">
          {!!idAuthor ? (
            {
              /* <FormCreate /> */
            }
          ) : (
            <div className="hold-block-500">
              <Alert color="warning">
                <NavLink to="/login">Đăng nhập </NavLink>để có thể viết bài !
              </Alert>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Index;
