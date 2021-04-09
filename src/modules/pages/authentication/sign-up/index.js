import React, { useRef, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TweenMax, Power2, Bounce } from 'gsap';
import { useMutation } from '@apollo/client';
//internal modules
import { loginMutation } from 'query/login';
//material-ui components
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
//multiple i18n
import { useTranslation } from 'react-i18next';

function SignUp() {
  //STATE
  const { t } = useTranslation();
  let formSignUp = useRef(null);
  const [dataForm, setDataForm] = useState({
    username: '',
    email: '',
    passwordUser: '',
  });
  const [passwordAgain, setPasswordAgain] = useState('');
  const [register, { data, error }] = useMutation(loginMutation.CREATE_ACCOUNT);

  //METHOD
  const handleOnChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };
  const handOnChangePasswordAgain = (e) => {
    setPasswordAgain(e.target.value);
  };
  const signUp = (event) => {
    event.preventDefault();
    if (passwordAgain !== dataForm.passwordUser) alert('Mật khẩu không trùng');
    else {
      register({
        variables: dataForm,
      });
    }
  };
  //LIFECYCLE
  useEffect(() => {
    // TweenMax.from(title, {
    //   duration: 0.8,
    //   y: -1000,
    //   ease: Bounce,
    // });
    TweenMax.from(formSignUp, {
      duration: 0.8,
      delay: 0,
      y: -1250,
      ease: Power2.in,
    });
  }, []);
  useEffect(() => {
    if (!!data) alert('Đăng ký thành công');
    if (!!error) {
      alert('Email này đã tồn tại');
    }
  }, [data, error]);

  return (
    <div className="SignUp">
      <div className="container">
        <div
          ref={(el) => {
            formSignUp = el;
          }}
          className="row main-signIn"
        >
          <img
            src="/assets/signIn/SignIn.png"
            className="img-signIn"
            alt="logo"
          />
          <form
            // ref={(el) => {
            //   formSignUp = el;
            // }}
            className="form-SignUp"
            onSubmit={signUp}
          >
            <h2>{t('SignUp.title')}</h2>
            <div className="form-group">
              <span className="title-input">
                {t('SignUp.titleForm.userName')}
              </span>
              <div className="SignUp-input">
                <AccountCircleIcon />
                <input
                  type="text"
                  placeholder={t('SignUp.placeHolder.userName')}
                  name="username"
                  onChange={handleOnChange}
                  required
                />
              </div>
              <span className="title-input">{t('SignUp.titleForm.email')}</span>
              <div className="SignUp-input">
                <MailOutlineIcon />
                <input
                  type="email"
                  placeholder={t('SignUp.placeHolder.email')}
                  name="email"
                  onChange={handleOnChange}
                  required
                />
              </div>
              <span className="title-input">
                {t('SignUp.titleForm.password')}
              </span>
              <div className="SignUp-input">
                <LockOpenIcon />
                <input
                  type="password"
                  placeholder={t('SignUp.placeHolder.password')}
                  name="passwordUser"
                  onChange={handleOnChange}
                  required
                />
              </div>
              <span className="title-input">
                {t('SignUp.titleForm.confirmPassword')}
              </span>
              <div className="SignUp-input">
                <LockOpenIcon />
                <input
                  type="password"
                  placeholder={t('SignUp.placeHolder.confirmPassword')}
                  name="passwordAgain"
                  onChange={handOnChangePasswordAgain}
                  required
                />
              </div>
              <NavLink className="acc" to="/login">
                {t('SignUp.askAccount')}
              </NavLink>
              <button className="done">{t('SignUp.btn.enter')}</button>
              <div className="infor">
                <p>{t('SignUp.followTxt')}</p>
                <a href="https://www.facebook.com/messages/t/3555565087788394">
                  https://www.facebook/cs41.04
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
