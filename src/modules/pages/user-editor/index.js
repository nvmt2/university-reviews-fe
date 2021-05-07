import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { motion } from 'framer-motion';
//internal modules
import { userEditorMutation } from 'query/user-editor';
import { fetchAccountAction } from 'state/ducks/common/actions/login';
import { pageTransition } from 'common/page-transition/configVarian';
import { typeOfValidation } from 'mixin/typeOfValidation';
//internal components
import { MyContainer } from 'theme/component/MyContainer';
import MyTextField from 'common/text-field/MyTextField';
//multiple i18n
import { useTranslation } from 'react-i18next';

function UserEditor() {
  const { t } = useTranslation();
  //STATE
  const dispatch = useDispatch();
  const history = useHistory();
  const idUser = useSelector((state) => state.login.data.id);
  const [formData, setFormData] = useState({
    idUser,
    passwordUser: '',
    username: '',
  });
  const [updateUserProfile, { data, error, loading }] = useMutation(
    userEditorMutation.EDIT_USER_PROFILE
  );

  //METHOD
  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  //handle button update
  const handleUpdate = (e) => {
    e.preventDefault();
    if (formData.username.length <= 0 || formData.passwordUser.length <= 0)
      alert('Nhập đầy đủ thông tin ở các trường bên dưới ');
    else {
      updateUserProfile({
        variables: formData,
      });
    }
  };
  // handle button Log out: dispatch empty object into login state into reducer and remove localStorage[idUser]
  const handleLogOut = () => {
    dispatch(fetchAccountAction(false));
    localStorage.removeItem('idUser');
    history.push('/login');
  };
  //display image profile when upload
  function loadFile(event) {
    var reader = new FileReader();
    reader.onload = function () {
      var output = document.getElementById('outputUserProfile');
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  //LIFECYCLE
  useEffect(() => {
    !!data && alert('Cập nhập thành công');
    !!error && alert('Lỗi 404');
  }, [data, error, loading]);

  return (
    <MyContainer>
      <motion.div
        className="container user-editor"
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
      >
        <h1 className="text-center">{t('userEditor.title')}</h1>
        <form className="form-user-editor">
          <div id="thay-doi-avatar">
            <div id="display-anh-dai-dien" className="mb-3">
              <label>{t('userEditor.titleImage')}</label>
              <img
                id="outputUserProfile"
                alt="profile user"
                height="150px"
                width="150px"
              />
            </div>
            <div id="them-anh" className="form-group ml-2">
              <input type="file" accept="image/*" onChange={loadFile} />
            </div>
          </div>
          <div>
            {/* <input
              type="text"
              placeholder={t('userEditor.placeHolder.name')}
              className="form-control"
              name="username"
              onChange={handleOnChange}
            /> */}
            <MyTextField
              type="text"
              fullWidth
              label={t('userEditor.placeHolder.name')}
              variant="outlined"
              name="username"
              helperText="Invalid field"
              typeValid={typeOfValidation.VALID_WHITE_SPACE}
              onSetState={setFormData}
              onState={formData}
            />
          </div>
          <div className="form-group form-users">
            <div className="row">
              <input type="radio" name="gioitinh" id="nam" value="Nam" />
              <label>{t('userEditor.placeHolder.male')}</label>
            </div>
            <div className="row">
              <input type="radio" name="gioitinh" id="nu" value="Nu" />
              <label>{t('userEditor.placeHolder.female')}</label>
            </div>
          </div>
          <MyTextField
            type="text"
            multiline
            rows={10}
            fullWidth
            label={t('userEditor.placeHolder.description')}
            variant="outlined"
            name="descriptionInfo"
            helperText="Invalid field"
            typeValid={typeOfValidation.VALID_WHITE_SPACE}
          />
          <MyTextField
            type="password"
            fullWidth
            label={t('userEditor.placeHolder.password')}
            variant="outlined"
            name="passwordUser"
            helperText="Invalid password"
            typeValid={typeOfValidation.VALID_PASSWORD}
            onSetState={setFormData}
            onState={formData}
          />
          {/* <textarea
            name="moTa-thong-tin"
            id="maTa"
            cols="30"
            rows="5"
            placeholder={t('userEditor.placeHolder.description')}
            className="form-control"
          ></textarea> */}
          {/* <input
            type="password"
            id="upd-passwor-1"
            placeholder={t('userEditor.placeHolder.password')}
            className="form-control mb-3"
            name="passwordUser"
            onChange={handleOnChange}
          /> */}
          {/* <input
          type="password"
          id="upd-password-2"
          placeholder="Nhập lại mật khẩu"
          className="form-control"
        /> */}

          <div className="text-right">
            <button id="btn-cap-nhat-tt" className="btn" onClick={handleUpdate}>
              {t('userEditor.btn.update')}
            </button>
          </div>
          <hr />
          <button
            id="btn-huy-tt"
            className="btn btn-outline-danger"
            onClick={handleLogOut}
          >
            {t('userEditor.btn.signOut')}
          </button>
        </form>
      </motion.div>
    </MyContainer>
  );
}

export default UserEditor;
