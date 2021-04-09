import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
//internal modules
import { myGetDate } from 'helper/getDate';
import { topicMutation, topicQuery } from 'query/topic';
//material-ui components
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
//multiple i18n
import { useTranslation } from 'react-i18next';

function DialogUpdate(props) {
  //STATE
  const { t } = useTranslation();
  const { slug } = useParams();
  const { open, onClose, data } = props;
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
    id: slug,
    title: data.title,
    content: data.content,
    date: myGetDate(),
    tags: data.tags,
  });

  //METHOD
  const handleClose = () => {
    onClose();
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
            id: slug,
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
      <Dialog
        maxWidth="md"
        aria-labelledby="form-dialog-title"
        open={open}
        // onClose={handleClose}
        fullWidth
        transitionDuration={500}
      >
        <DialogTitle id="form-dialog-title">
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
      </Dialog>
    </div>
  );
}

export default DialogUpdate;
