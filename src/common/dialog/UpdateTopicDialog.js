import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { useSelector, useDispatch } from 'react-redux';
//internal modules
import { myGetDate } from 'helper/getDate';
import { topicMutation, topicQuery } from 'query/topic';
import { actionCloseDialog } from 'state/ducks/common/actions/dialog';
//material-ui components
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
//multiple i18n
import { useTranslation } from 'react-i18next';

function UpdateTopicDialog() {
  //STATE
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.dialog.payload);
  // const { open, onClose, data } = props;
  const [updateTopic, { data: dataUpdate }] = useMutation(
    topicMutation.UPDATE_TOPIC
  );
  // default value tags
  const [optionTag, setOptionTag] = useState([
    'bão',
    'cơ sở vật chất',
    'thân thiện',
    'hài hước',
  ]);
  //handle event close and update
  const [input, setInput] = useState({
    id: data.id,
    title: data.title,
    content: data.content,
    date: myGetDate(),
    tags: data.tags,
  });

  //METHOD
  const handleClose = () => {
    dispatch(actionCloseDialog());
  };
  const handleOnChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleUpdate = () => {
    updateTopic({
      variables: input,
      refetchQueries: [
        {
          query: topicQuery.GET_TOPIC,
          variables: {
            id: data.id,
          },
        },
        {
          query: topicQuery.GET_ALL_TOPICS,
          variables: {
            id: localStorage['slugUniversity'],
          },
        },
      ],
    });
  };

  //LIFECYCLE
  useEffect(() => {
    if (!!dataUpdate) handleClose();
  }, [dataUpdate]);
  return (
    <div>
      <DialogTitle id="form-dialog-title" onClose={handleClose}>
        {t('comment.dialogUpdate.title')}
      </DialogTitle>
      <DialogContent>
        <TextField
          label={t('comment.dialogUpdate.titleForm.topic')}
          name="title"
          type="text"
          variant="outlined"
          margin="dense"
          fullWidth
          onChange={handleOnChange}
          defaultValue={data.title}
        />

        <TextField
          label={t('comment.dialogUpdate.titleForm.content')}
          name="content"
          type="text"
          variant="outlined"
          margin="dense"
          fullWidth
          multiline
          rows={15}
          onChange={handleOnChange}
          defaultValue={data.content}
        />
        <Autocomplete
          multiple
          options={optionTag.map((option) => option)}
          defaultValue={[data.tags]}
          freeSolo
          renderTags={(value, getTagProps) =>
            value.map((option, index) => {
              return <Chip label={option} {...getTagProps({ index })} />;
            })
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label={t('comment.dialogUpdate.titleForm.tag')}
              placeholder={t('comment.dialogUpdate.placeHolder.tag')}
              name="tags"
              onChange={handleOnChange}
            />
          )}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          {t('comment.dialogUpdate.btn.cancel')}
        </Button>
        <Button variant="outlined" color="primary" onClick={handleUpdate}>
          {t('comment.dialogUpdate.btn.update')}
        </Button>
      </DialogActions>
    </div>
  );
}

export default UpdateTopicDialog;
