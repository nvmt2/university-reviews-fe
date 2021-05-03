import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
//internal modules
import { fetchUniversityAction } from 'state/ducks/common/actions/home-page';
import homepageQueries from 'query/homepage';
import { fetchAccountAction } from 'state/ducks/common/actions/login';
//internal components
import NotificationCard from 'common/card/CardNotification';
import NavBar from 'common/nav-link/NavBar';
import SearchMaterial from 'common/search-form/SearchMaterial';
//material-ui components
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
//multiple i18n
import { useTranslation } from 'react-i18next';

const useAppBarStyle = makeStyles((theme) => ({
  displayInline: {
    display: 'block',
  },
  backgroundHeader: {
    backgroundColor: '#374548',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'block',
    marginLeft: 15,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing(3),
    width: '60%',
  },
  searchIcon: {
    marginLeft: 30,
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'flex',
  },
}));

export default function PrimarySearchAppBar() {
  //STATE
  const { t, i18n } = useTranslation();
  const classes = useAppBarStyle();
  const history = useHistory();
  const state = useSelector((state) => state);
  const navigationUnAuthentication = [
    {
      name: t('navigationAuthentication.signIn'),
      to: '/login',
    },
    {
      name: t('navigationAuthentication.signUp'),
      to: '/register',
    },
  ];
  const navigationAuthentication = [
    {
      name: t('navigationAuthentication.setting'),
      to: '/user/editor',
    },
    {
      name: t('navigationAuthentication.myPost'),
      to: '/user',
    },
  ];
  let listAva = [
    {
      name: 'Minh Tới',
      src: '/assets/header/avatar/toi.jpg',
      status: t('notification.comment'),
    },
    {
      name: 'Hữu Thiện',
      src: '/assets/header/avatar/thien.jpg',
      status: t('notification.like'),
    },
    {
      name: 'Xuân Sang',
      src: '/assets/header/avatar/sang.jpg',
      status: t('notification.like'),
    },
    {
      name: 'Qúy Thương',
      src: '/assets/header/avatar/thuong.jpg',
      status: t('notification.comment'),
    },
  ];

  const [contentSearch, setContentSearch] = useState({
    first: 5,
    skip: 0,
  });
  const dispatch = useDispatch();
  const { data, loading, error } = useQuery(
    homepageQueries.GET_ALL_UNIVERSITY,
    {
      variables: contentSearch,
    }
  );
  const dataApi = !loading && !error && !!data && data.allUniversities;

  const [anchorElProfile, setAnchorElProfile] = React.useState(null);
  const [anchorElNotification, setAnchorElNotification] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuProfileOpen = Boolean(anchorElProfile);
  const isMenuNotificationOpen = Boolean(anchorElNotification);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMenuClose = () => {
    setAnchorElProfile(null);
    setAnchorElNotification(null);
    handleMobileMenuClose();
  };
  const menuId = 'primary-search-account-menu';
  const renderMenuProfile = (
    <Menu
      anchorEl={anchorElProfile} //Menu open at anchorElProfile position
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuProfileOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose} className={classes.displayInline}>
        {!!state.login.data.id ? (
          <NavBar navigations={navigationAuthentication} />
        ) : (
          <NavBar navigations={navigationUnAuthentication} />
        )}
      </MenuItem>
    </Menu>
  );

  const menuNotificationId = 'primary-search-account-menu';
  const renderMenuNotification = (
    <Menu
      anchorEl={anchorElNotification}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuNotificationId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuNotificationOpen}
      onClose={handleMenuClose}
    >
      {listAva.map((item, index) => (
        <MenuItem onClick={handleMenuClose} key={index}>
          <NotificationCard {...item} />
        </MenuItem>
      ))}
    </Menu>
  );

  //METHOD
  const handleOnchange = (e) => {
    setContentSearch({
      ...contentSearch,
      [e.target.name]: e.target.value,
    });
  };
  const clickSearch = () => {
    dispatch(fetchUniversityAction(dataApi));
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorElProfile(event.currentTarget); //pass position into
  };
  const handleNotificationMenuOpen = (event) => {
    setAnchorElNotification(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  // handle button Log out: dispath empty object into login state into reducer and remove localstorage[idUser]
  const handleLogout = () => {
    dispatch(fetchAccountAction(false));
    localStorage.removeItem('idUser');
    history.push('/login');
  };
  const changeLanguage = (e) => {
    let lng = e.target.value;
    i18n.changeLanguage(lng);
  };
  const items = [
    {
      id: 0,
      name: 'Cobol',
    },
    {
      id: 1,
      name: 'JavaScript',
    },
    {
      id: 2,
      name: 'Basic',
    },
    {
      id: 3,
      name: 'PHP',
    },
    {
      id: 4,
      name: 'Java',
    },
  ];
  const handleOnSearch = () => {
    console.log('handleOnSearch');
  };
  const handleOnSelect = () => {
    console.log('handleOnSelect');
  };
  const handleOnFocus = () => {
    console.log('handleOnFocus');
  };
  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.backgroundHeader}>
        <div className="container my-app-bar">
          <Toolbar>
            <Avatar
              alt="Remy Sharp"
              variant="rounded"
              src="/assets/header/logo.png"
            />
            {/* <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton> */}

            <Typography className={classes.title} variant="h6">
              <NavLink className="name-header" to="/">
                URs
              </NavLink>
            </Typography>
            <SearchMaterial />

            {/* <div className={classes.search}>
              <IconButton aria-label="search" onClick={clickSearch}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
              </IconButton>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                name="nameUniversity"
                onChange={handleOnchange}
              />
            </div> */}
            {/* <div style={{ width: 400, heigh: 500 }}>
              <ReactSearchAutocomplete
                items={items}
                onSearch={handleOnSearch}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                autoFocus
              />
            </div> */}
            <form className="form-list-lang">
              {/* <img
                src="/assets/header/Vietnam.jpg"
                width="40px"
                alt="logo vietnam"
              /> */}
              <select
                name="language"
                className="list-lang"
                onChange={changeLanguage}
              >
                <option>vi</option>
                <option>en</option>
              </select>
            </form>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              {!!state.login.data.id && (
                <IconButton
                  aria-label="show notification about topics"
                  aria-controls={menuNotificationId}
                  aria-haspopup="true"
                  onClick={handleNotificationMenuOpen}
                  color="inherit"
                >
                  <Badge badgeContent={4} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              )}

              <IconButton
                edge="end"
                aria-label="user login"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen} //handle event passing position into state
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              {!!state.login.data.id && (
                <IconButton color="inherit" onClick={handleLogout}>
                  <ExitToAppIcon />
                </IconButton>
              )}
            </div>
          </Toolbar>
        </div>
      </AppBar>
      {renderMenuNotification}
      {renderMenuProfile}
    </div>
  );
}
