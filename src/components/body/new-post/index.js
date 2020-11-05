import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
//import local file
import { topicMutation } from "query/topic";
import "./style/main.css";
//material-ui
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Input } from "@material-ui/core";

function Index() {
  const { slug } = useParams();
  const history = useHistory();
  const [input, setInput] = useState({
    date: "",
    idUser: "5f9a40681a488a2238f7dd53",
    idUniversity: slug,
  });
  const [createNewTopic, { data }] = useMutation(topicMutation.CREATE_TOPIC);
  const handleClick = () => {
    createNewTopic({
      variables: input,
    });

    console.log("ID", data);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="offset-md-2 col-md-8">
          <div className="form-flex-container">
            <h4 className="text-center">Đăng bài</h4>
            <form>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Chủ đề bài đăng"
                  variant="outlined"
                  fullWidth={true}
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
                  id="outlined-basic"
                  label="Nội dung"
                  variant="outlined"
                  fullWidth={true}
                  multiline={true}
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
                <TextField
                  id="outlined-basic"
                  label="Thẻ tag"
                  variant="outlined"
                  fullWidth={true}
                  size="small"
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
