import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';
//internal modules
import { actionCloseDialog } from 'state/ducks/common/actions/dialog';
import { topicMutation, topicQuery } from 'query/topic';
import { userProfileQueries } from 'query/user-profile';
import { myGetDate } from 'helper/getDate';
//internal component
import AlertAuthor from 'common/alert/AlertAuthor';
import TitleDialog from 'common/dialog/TitleDialog';
//material-ui component
import { makeStyles } from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Chip from '@material-ui/core/Chip';
//multiple i18n
import { useTranslation } from 'react-i18next';

const useNewPostDialogStyle = makeStyles((theme) => ({
  myForm: {
    '& > div': {
      marginBottom: 10,
    },
  },
}));

function NewPostDialog() {
  //STATE
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const classes = useNewPostDialogStyle();
  //handle input Tag chip
  const [optionTag, setOptionTag] = useState([
    'bão',
    'cơ sở vật chất',
    'thân thiện',
    'hài hước',
  ]);
  const [input, setInput] = useState({
    title: '',
    content: '',
    tags: '',
    date: myGetDate(),
    idUser: localStorage.getItem('idUser'),
    idUniversity: localStorage.getItem('slugUniversity'),
  });
  //handle call api create new topic and check valid of form
  const [createNewTopic, { data }] = useMutation(topicMutation.CREATE_TOPIC);

  //METHOD
  const handleClose = () => {
    dispatch(actionCloseDialog());
  };
  const handleClickPost = () => {
    if (input.content === '' || input.title === '') {
      alert('Phải điền tiều đề và nội dung của bài đăng');
      return false;
    }
    createNewTopic({
      variables: input,
      refetchQueries: [
        {
          query: topicQuery.GET_ALL_TOPICS,
          variables: {
            id: localStorage['slugUniversity'],
          },
        },
        {
          query: userProfileQueries.GET_PERONAL_TOPIC,
          variables: {
            id: localStorage.getItem('idUser'),
          },
        },
      ],
    });
    handleClose();
  };

  return (
    <Box>
      {!!localStorage.getItem('idUser') ? (
        <div>
          <TitleDialog id="customized-dialog-title" onClose={handleClose}>
            <Typography>{t('formCreate.title')}</Typography>
          </TitleDialog>
          {/* body  */}
          <DialogContent dividers>
            <form className={classes.myForm}>
              <div>
                <TextField
                  label={t('formCreate.placeHolder.topic')}
                  variant="outlined"
                  fullWidth
                  name="title"
                  onChange={(e) =>
                    setInput({
                      ...input,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <TextField
                  label={t('formCreate.placeHolder.content')}
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={15}
                  name="content"
                  onChange={(e) =>
                    setInput({
                      ...input,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <Autocomplete
                  multiple
                  options={optionTag.map((option) => option)}
                  defaultValue={[optionTag[0]]}
                  freeSolo
                  renderTags={(value, getTagProps) =>
                    value.map((option, index) => {
                      return (
                        <Chip label={option} {...getTagProps({ index })} />
                      );
                    })
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label={t('formCreate.placeHolder.tag')}
                      onChange={(e) => {
                        setInput({
                          ...input,
                          tags: e.target.value,
                        });
                      }}
                    />
                  )}
                />
              </div>
            </form>
          </DialogContent>
          {/* end of body */}
          <DialogActions>
            <Button color="secondary" variant="outlined" onClick={handleClose}>
              {t('formCreate.btn.cancel')}
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClickPost}
            >
              {t('formCreate.btn.post')}
            </Button>
          </DialogActions>
        </div>
      ) : (
        <div>
          <TitleDialog id="customized-dialog-title" onClose={handleClose}>
            <Typography>{t('formCreate.title')}</Typography>
          </TitleDialog>
          <DialogContent>
            <AlertAuthor label="để có thể viết bài!" />
          </DialogContent>
        </div>
      )}
    </Box>
  );
}
export default NewPostDialog;
