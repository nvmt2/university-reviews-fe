import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useSelector } from "react-redux";
//importing local file
import { commentMutation } from "query/comment";
import { commentQuery } from "query/comment";
import "./style/PostComment.css";
//material-Ui
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import Alert from "@material-ui/lab/Alert";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

function PostComment() {
  const idAuthor = useSelector((state) => state.login.data.id);
  const { slug } = useParams();
  const dispatch = useDispatch();
  const [createNewcomment, { data }] = useMutation(
    commentMutation.CREATE_COMMENT
  );
  const [comment, setComment] = useState({
    content: "",
    idUser: idAuthor,
    idTopic: slug,
  });
  const [open, setOpen] = useState(false);
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
  };
  useEffect(() => {}, [comment, data, dispatch]);
  // console.log("RENDER_POST_COMMENT");

  return (
    <div className=" group-input-post">
      <textarea
        type="text"
        className="input-post"
        placeholder="Viết bình luận ở đây..."
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
          Đăng
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
            Đăng bình luận thành công !
          </Alert>
        </Collapse>
      </div>
    </div>
  );
}

export default PostComment;
