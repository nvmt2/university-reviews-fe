import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { useSelector } from 'react-redux';
//internal modules
import { commentMutation } from 'query/comment';
import { commentQuery } from 'query/comment';
//material-Ui components
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
//multiple i18n
import { useTranslation } from 'react-i18next';

function PostComment() {
  //STATE
  const { t } = useTranslation();
  const idAuthor = useSelector((state) => state.login.data.id);
  const { slug } = useParams();
  const [createNewcomment, { data }] = useMutation(
    commentMutation.CREATE_COMMENT
  );
  const [comment, setComment] = useState({
    content: '',
    idUser: idAuthor,
    idTopic: slug,
  });
  const [open, setOpen] = useState(false);

  //METHOD
  const handleOnChange = (e) => {
    setComment({
      ...comment,
      content: e.target.value,
    });
  };
  //handle remove comment event
  const handleClick = () => {
    createNewcomment({
      variables: comment,
      refetchQueries: [
        {
          query: commentQuery.GET_ALL_COMMENT,
          variables: {
            id: slug,
          },
        },
      ],
    });
    setOpen(true);
    //auto close alert after 1s
    setTimeout(function () {
      setOpen(false);
    }, 1000);
  };

  return (
    <div className=" group-input-post">
      <textarea
        type="text"
        className="input-post"
        placeholder={t('comment.formPost.placeholder')}
        onChange={handleOnChange}
      />
      <div className="bg-btn-post">
        <Button
          type="submit"
          // className="btn-post"
          onClick={handleClick}
          variant="contained"
          endIcon={<SendIcon />}
          size="small"
          color="primary"
        >
          {t('comment.formPost.btnPost')}
        </Button>

        <Collapse in={open}>
          <Alert
            color="info"
            action={
              <IconButton
                aria-label="close"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            {t('comment.formPost.notificationSuccess')}
          </Alert>
        </Collapse>
      </div>
    </div>
  );
}

export default PostComment;
