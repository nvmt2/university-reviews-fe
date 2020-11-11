import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
//importing local file
import { myGetDate } from "components/helper/getDate";
import { topicMutation, topicQuery } from "query/topic";
//material-ui
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

function DialogUpdate(props) {
  const { slug } = useParams();
  const { open, onClose, data } = props;
  const [updateTopic, { data: dataUpdate }] = useMutation(
    topicMutation.UPDATE_TOPIC
  );
  // default value tags
  const [optionTag, setOptionTag] = useState([
    "bão",
    "cơ sở vật chất",
    "thân thiện",
    "hài hước",
  ]);

  //handle event close and update
  const [input, setInput] = useState({
    id: slug,
    title: data.title,
    content: data.content,
    date: myGetDate(),
    tags: data.tags,
  });
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
      ],
    });
    console.log("INPUT", input);
  };
  console.log("RENDER_DIALOG");
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
        <DialogTitle id="form-dialog-title">Cập nhập nội dung</DialogTitle>
        <DialogContent>
          <TextField
            label="Chủ đề bài đăng"
            name="title"
            type="text"
            variant="outlined"
            margin="dense"
            fullWidth
            onChange={handleOnChange}
            defaultValue={data.title}
          />

          <TextField
            label="Nội dung"
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
                // console.log("VALUE", option);
                return <Chip label={option} {...getTagProps({ index })} />;
              })
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Thẻ"
                placeholder="Thẻ liên quan"
                name="tags"
                onChange={handleOnChange}
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            Hủy
          </Button>
          <Button variant="outlined" color="primary" onClick={handleUpdate}>
            Cập nhập
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogUpdate;
