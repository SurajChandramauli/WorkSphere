import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  Typography,
  TextField,
  Button,
  IconButton,
  Avatar,
} from "@material-ui/core/";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { connect } from "react-redux";
const PostComments = ({ props }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [editCommentId, setEditCommentId] = useState(0);
  const [loggedInUserId, setLoggedInUserId] = useState(0);
  const commentsRef = useRef();
  useEffect(() => {
    var loggedId = localStorage.getItem("loggedInUserId");

    setLoggedInUserId(parseInt(loggedId));
    var pathname = window.location.pathname;
    var postId = pathname.substring(pathname.lastIndexOf("/") + 1);
    if (postId) {
      props.getSinglePost(postId);
    }
    setComments(props.singlePostDetailsData.comments);
    console.log(props.singlePostDetailsData);
  }, []);
  const commentForm = {
    post: props.singlePostDetailsData.postId,

    authorId: parseInt(localStorage.getItem("loggedInUserId")),

    authorName: localStorage.getItem("loggedInUserName"),

    comment: comment,
  };
  // handling new comments
  const handleComment = async (type) => {
    if (editCommentId !== 0) {
      props.updateCommentById(editCommentId, commentForm);
      setEditCommentId(0);
    } else props.onsubmitComment(commentForm);
    setComment("");
    setComments(props.singlePostDetailsData.comments);
  };
  function handleDeleteCommentById(id) {
    props.deleteCommentById(id);
  }
  function handleEdit(id, com) {
    setEditCommentId(id);
    setComment(com);
  }
  return (
    <div style={{ marginTop: "25px" }}>
      <Typography gutterBottom variant="h6">
        Comments
      </Typography>
      {comments?.map((c, i) => (
        <div key={i} style={{ marginBottom: "24px" }}>
          <Avatar
            style={{
              width: "65px",
              height: "65px",
              backgroundColor: "#7BAA23",
            }}
          >
            <b>{c.authorName.charAt(0)}</b>
          </Avatar>
          <Typography style={{ marginTop: "-60px", marginLeft: "85px" }}>
            <strong> {c.authorName + "  "}</strong>
          </Typography>
          <Typography style={{ marginLeft: "85px" }}>
            {" "}
            {c.comment + " "}
          </Typography>
          {loggedInUserId === c.authorId && (
            <IconButton
              aria-label="delete"
              style={{ color: "#D71F1F", float: "right", marginTop: "-40px" }}
              onClick={() => {
                handleDeleteCommentById(c.commentId);
              }}
            >
              <DeleteIcon
                style={{
                  textAlign: "right",
                }}
              />
            </IconButton>
          )}
          {loggedInUserId === c.authorId && (
            <IconButton
              aria-label="edit"
              style={{ color: "Gray", float: "right", marginTop: "-40px" }}
              onClick={() => {
                handleEdit(c.commentId, c.comment);
              }}
            >
              <EditIcon />
            </IconButton>
          )}
        </div>
      ))}
      <div ref={commentsRef} />
      <TextField
        style={{ marginTop: "10px", width: "900px", color: "" }}
        variant="outlined"
        // label="Comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <br />
      <Button
        style={{
          marginTop: "-87px",
          marginLeft: "910px",
          width: "90px",
          height: "52px",
          backgroundColor: "#7BAA23",
        }}
        disabled={!comment.length}
        color="primary"
        variant="contained"
        onClick={handleComment}
      >
        Comment
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    //  singlePostDetailsData: state.testMockApiDataSetup.singlePostDetailsData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //   getSinglePost: (postId) => dispatch(getSinglePost(postId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostComments);
