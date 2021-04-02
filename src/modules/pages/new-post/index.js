import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
//internal components
import FormCreate from 'modules/pages/new-post/components/FormCreate';
//material-ui component
import Alert from '@material-ui/lab/Alert';

function NewPost() {
  const idAuthor = useSelector((state) => state.login.data.id);
  return (
    <div className="container">
      <div className="row">
        <div className="offset-md-2 col-md-8">
          {!!idAuthor ? (
            <FormCreate />
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

export default NewPost;
