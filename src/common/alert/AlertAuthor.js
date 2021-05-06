import React from 'react';
import { NavLink } from 'react-router-dom';
//material-ui component
import Alert from '@material-ui/lab/Alert';

function AlertAuthor(props) {
  let { label, ...rest } = props;
  return (
    <Alert {...rest}>
      <NavLink to="/login">Đăng nhập </NavLink> {label}
    </Alert>
  );
}

export default AlertAuthor;
