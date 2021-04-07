import React from 'react';
import { useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
//internal modules
import { commentMutation } from 'query/comment';
import { commentQuery } from 'query/comment';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import parse from 'html-react-parser';
//material-ui component
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

function ContentComment(props) {
  //STATE
  const { slug } = useParams();
  const { id, content, user } = props;
  const [deleteComment] = useMutation(commentMutation.REMOVE_COMMENT);
  // Authorization
  const state = useSelector((state) => state.login.data.id);
  const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));
  const classes = useStyles();

  //METHOD
  const checkAuthor = () => {
    let result = state === user.id ? 'block' : 'none';
    return { display: result };
  };
  const handleOnClick = () => {
    deleteComment({
      variables: {
        id: id,
      },
      refetchQueries: [
        {
          query: commentQuery.GET_ALL_COMMENT,
          variables: {
            id: slug,
          },
        },
      ],
    });
  };

  return (
    <div className="item-content-comment">
      <div className="item-news-comment">
        <div className="container">
          <div className="row">
            <div>
              <Avatar
                variant="rounded"
                src={!!user.avatar && user.avatar.publicUrl}
                className={classes.large}
              ></Avatar>
            </div>
            <div className="col-md-7">
              <p className="name-student">{user.username}</p>
              <p className="grade-student">Sinh viên năm 3</p>
            </div>
            <div className="offset-md-3 col-md-1 like-comment">
              <IconButton
                style={checkAuthor()}
                onClick={handleOnClick}
                aria-label="delete"
                color="primary"
                size="large"
              >
                <DeleteOutlineRoundedIcon />
              </IconButton>
            </div>

            <div className="col-md-8">
              <p> {parse(`${content}`)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentComment;
