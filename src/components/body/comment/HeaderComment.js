import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import { useQuery } from "@apollo/client";
import { useParams, useHistory, NavLink } from "react-router-dom";
import { useMutation } from "@apollo/client";
//importing local file
import { topicMutation } from "query/topic";
import { topicQuery } from "query/topic";
import DialogUpdate from "./DialogUpdate";
//importing material UI
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";

function HeaderComment() {
  const history = useHistory();
  const { slug } = useParams();
  //call api get one topic
  const { data, loading, error } = useQuery(topicQuery.GET_TOPIC, {
    variables: {
      id: slug,
    },
  });
  // call api for remove topic
  const [deleteTopic, { data: response }] = useMutation(
    topicMutation.DELTETE_TOPIC
  );
  const handleDelete = () => {
    deleteTopic({
      variables: {
        id: slug,
      },
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
  // handle editor topic
  const [openDialog, setOpenDialog] = useState(false);
  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  useEffect(() => {
    if (!!response)
      history.push(`/topics/${response.deleteTopic.university.id}`);
  }, [data, loading, error, response]);
  const contentHeaderComment = !loading && !error && !!data && data.Topic;
  return (
    <>
      {!!contentHeaderComment ? (
        <>
          <div className="banner-comment">
            {/* header of topic */}
            <div className="container">
              <h2 className="title-banner-comment">
                {contentHeaderComment.title}
              </h2>
              <div className="sub-header-comment row">
                <div className="col-md-3">
                  <a href="." className=" group-user-comment">
                    <div className="float-left">
                      <AccountCircleIcon />
                    </div>

                    <div className="infor-user-comment">
                      <p className="title-user-comment">
                        {contentHeaderComment.user.username}
                      </p>
                      <p className="date-topic-comment">
                        {contentHeaderComment.date}
                      </p>
                    </div>
                  </a>
                </div>
                <div
                  className="col-md-8 group-btn-header-comment"
                  style={{
                    display:
                      contentHeaderComment.user.id !==
                        "5f9a40681a488a2238f7dd53" && "none",
                  }}
                >
                  {/* start dialog */}
                  <DialogUpdate
                    open={openDialog}
                    onClose={handleClose}
                    data={contentHeaderComment}
                  />
                  {/* end dialog */}
                  <Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    startIcon={<EditIcon />}
                    onClick={handleClickOpen}
                  >
                    Chỉnh sửa
                  </Button>
                  <br />
                  <Button
                    size="small"
                    color="secondary"
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    onClick={handleDelete}
                  >
                    Xóa
                  </Button>
                </div>

                <div className="col-md-1 group-like-comment">
                  <ThumbDownAltOutlinedIcon />
                  <ThumbUpOutlinedIcon />
                </div>
              </div>
            </div>
          </div>
          {/* content of topic */}
          <div className="container news-comment ">
            <p className="content-comment">
              {parse(`${contentHeaderComment.content}`)}
            </p>
            <Chip
              label={contentHeaderComment.tags}
              icon={<DoneIcon />}
              clickable
              size="small"
              variant="outlined"
              className=""
            />
          </div>
        </>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
}

export default HeaderComment;
