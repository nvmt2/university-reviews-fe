import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
//import local file
import { topicMutation, topicQuery } from "query/topic";
import { myGetDate } from "components/helper/getDate";
import "./style/main.css";

//material-ui
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";

function Index() {
  const { slug } = useParams();
  const history = useHistory();
  const [input, setInput] = useState({
    title: "",
    content: "",
    tags: "",
    date: myGetDate(),
    idUser: "5f9a40681a488a2238f7dd53",
    idUniversity: slug,
  });

  //handle call api create new topic and check valid of form
  const [createNewTopic, { data }] = useMutation(topicMutation.CREATE_TOPIC);
  const handleClick = () => {
    if (input.content === "" || input.title === "") {
      alert("Phải điền tiều đề và nội dung của bài đăng");
      return false;
    }
    createNewTopic({
      variables: input,
      refetchQueries: [
        {
          query: topicQuery.GET_ALL_TOPICS,
          variables: {
            id: localStorage["slugUniversity"],
          },
        },
      ],
    });
  };
  //handle input Tag chip
  const [optionTag, setOptionTag] = useState([
    "bão",
    "cơ sở vật chất",
    "thân thiện",
    "hài hước",
  ]);

  useEffect(() => {
    if (!!data) {
      history.push(`/topics/${data.createTopic.id}/comments`);
    }
  }, [data, createNewTopic, history]);
  return (
    <div className="container">
      <div className="row">
        <div className="offset-md-2 col-md-8">
          <div className="form-flex-container">
            <h4 className="text-center">Đăng bài</h4>
            <form>
              <div>
                <TextField
                  label="Chủ đề bài đăng"
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
                  label="Nội dung"
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
                      label="Thẻ"
                      placeholder="Thẻ liên quan"
                      onChange={(e) => {
                        console.log("INPUt", input);
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
            <div className="btn-new-post">
              <Button variant="outlined" color="primary" onClick={handleClick}>
                Đăng bài
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
