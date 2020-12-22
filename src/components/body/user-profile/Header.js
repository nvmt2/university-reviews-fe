import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { accountQuery } from "query/account";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Avatar from "@material-ui/core/Avatar";

function Header() {
  const idUser = useSelector((state) => state.login.data.id);
  const { data, loading, error } = useQuery(accountQuery.GET_ACCOUNT, {
    variables: {
      id: idUser,
    },
  });

  useEffect(() => {}, [data, error, loading]);
  return (
    <div className="banner-user">
      <div className="container">
        <div className="group-banner-user">
          <Avatar
            alt="avater of user"
            src={
              !!data && !!data.Account.avatar && data.Account.avatar.publicUrl
            }
          />
          <span className="userName">{!!data && data.Account.username}</span>
        </div>
        <NavLink className="edit-presonal" to="/user/editor">
          Chỉnh sửa trang cá nhân
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
