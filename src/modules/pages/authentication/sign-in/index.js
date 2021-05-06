import React, { useRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, NavLink } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { TweenMax, Power2, Elastic } from 'gsap';
//internal modules
import {
  fetchAccountAction,
  passStatusSingin,
} from 'state/ducks/common/actions/login';
import { loginQuery } from 'query/login';
//material-ui components
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
//multiple i18n
import { useTranslation } from 'react-i18next';

function SignIn() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();
  let formSignIn = useRef(null);
  const [form, setForm] = useState({
    email: '',
    passwordUser: '',
  });
  const { data, loading, error } = useQuery(loginQuery.GET_ACCOUNT, {
    variables: form,
  });

  //handle sign in onSubmit
  const sigin = (event) => {
    event.preventDefault();
    //show alert when sign in fail
    if (data.allAccounts.length === 0) {
      alert('Tài khoản hoặc mật khâu không hợp lệ');
    } else {
      dispatch(fetchAccountAction(data.allAccounts[0]));
      localStorage.setItem('idUser', data.allAccounts[0].id);
      //turn back home-page when sign in success
      history.push('/');
    }
  };
  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    // TweenMax.from(formSignIn, {
    //   duration: 1,
    //   x: 1000,
    //   ease: Power2.in,
    // });
  }, [data, loading, error, history]);

  return (
    <div className="SignIn">
      <div className="container">
        <div
          ref={(el) => {
            formSignIn = el;
          }}
          className="row main-signIn"
        >
          <img
            src="/assets/signIn/SignIn.png"
            className="img-signIn"
            alt="logo"
          />
          <form onSubmit={sigin} className="form-SignIn">
            <h2>{t('signIn.title')}</h2>
            <div className="form-group">
              <span className="title-input">{t('signIn.email')}</span>
              <div className="SignIn-input">
                <MailOutlineIcon />
                <input
                  type="email"
                  name="email"
                  placeholder={t('signIn.placeHolder.email')}
                  onChange={handleOnChange}
                />
              </div>
              <span className="title-input">{t('signIn.password')}</span>
              <div className="SignIn-input">
                <LockOpenIcon />
                <input
                  onChange={handleOnChange}
                  type="password"
                  name="passwordUser"
                  placeholder={t('signIn.placeHolder.password')}
                />
              </div>
              <a href="/" className="forgot">
                {t('signIn.forgotPass')}
              </a>
              <button className="done">{t('signIn.btn.enter')}</button>
              <div className="infor-SignIn">
                <p className="fl-me">{t('signIn.signInBy')}</p>
                <ul className="social-group">
                  <li>
                    <a href="/">
                      <FacebookIcon />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <TwitterIcon />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <GitHubIcon />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="account-signIn">
                <p className="q-account">{t('signIn.askAccount')}</p>
                <NavLink to="/register">{t('signIn.signUp')}</NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SignIn;
