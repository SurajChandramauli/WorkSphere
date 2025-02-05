import React, { useState, useEffect } from "react";
import { Template } from "../template";
import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Collapse,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";
import { connect } from "react-redux";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { styled } from "@mui/material/styles";
import image1 from "../../assets/images/card.png";
import postBg from "../../assets/images/postBg2.png";
import { useNavigate } from "react-router-dom";
import profileImage from "../../assets/images/surajProfile.jpg";
import fun from "../../assets/images/fun2.jpg";
import event from "../../assets/images/event1.jpg";
import webinar from "../../assets/images/webinar.jpg";
import technology from "../../assets/images/technology.png";
import LoadingOverlay from "react-loading-overlay";
import {
  createPosts,
  // getAllPosts,
  getSinglePost,
  upVodeByPostId,
  downVodeByPostId,
  addComment,
  deleteCommentById,
  updateCommentById,
  getEmployeeById,
} from "../../redux/actions/EmployeeAction/AuthAction";
import PostComments from "./PostComments";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const SinglePostDetails = (props) => {
  const firstChar = props.singlePostDetailsData.userName
    ? props.singlePostDetailsData.userName.charAt(0)
    : "A";

  useEffect(() => {
    var pathname = window.location.pathname;
    var postId = pathname.substring(pathname.lastIndexOf("/") + 1);
    if (postId) {
      props.getSinglePost(postId);
    }
    setPost(props.singlePostDetailsData);
  }, []);
  const [loggedInUserName, setLoggedInUserName] = useState("");
  const [loggedInUserId, setLoggedInUserId] = useState(0);
  const [post, setPost] = useState([]);
  const [expanded, setExpanded] = React.useState(true);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };
  const history = useNavigate();

  const handleUpVoteByPostId = (PostId) => {
    // console.log(PostId);
    props.upVodeByPostId(PostId);
    var pathname = window.location.pathname;
    var postId = pathname.substring(pathname.lastIndexOf("/") + 1);
    if (postId) {
      props.getSinglePost(postId);
    }
    // setPost(props.singlePostDetailsData)
  };
  const handleDownVoteByPostId = (PostId) => {
    // console.log(PostId);
    props.downVodeByPostId(PostId);
    var pathname = window.location.pathname;
    var postId = pathname.substring(pathname.lastIndexOf("/") + 1);
    if (postId) {
      props.getSinglePost(postId);
    }
    //  setPost(props.singlePostDetailsData)
  };
  function viewOtherEmployeeDetails(id) {
    props.getEmployeeById(id);
    history("/otherViewProfile/" + id);
  }
  return (
    <Template>
              <LoadingOverlay
          active={props.loading}
          spinner
          styles={{
            spinner: (base) => ({
              ...base,
              width: "50px",
              "& svg circle": {
                stroke: "#045FB4",
              },
            }),
            overlay: (base) => ({
              ...base,
              background: "rgba(52, 52, 52, 0)",
            }),
            content: (base) => ({
              ...base,
              color: "black",
            }),
          }}
          text="Loading post Please wait ..."
          // className={classes.spinner}
        ></LoadingOverlay>
      <Grid container sx={{ marginTop: "100px", paddingLeft: "220px" }}>
        <Grid item sm={12} key={props.singlePostDetailsData.postId}>
          <div style={{ maxWidth: "1000px" }}>
            <Card
              sx={{
                bgcolor: "white",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
            >
              <CardHeader
                avatar={
                  <Avatar
                    sx={{
                      bgcolor: "#7BAA23",
                      width: "60px",
                      height: "60px",
                    }}
                    aria-label="recipe"
                  >
                    <b>{firstChar}</b>
                  </Avatar>
                }
                action={
                  <>
                    <IconButton
                      aria-label="UpVote"
                      style={{ color: "#006EB3" }}
                      onClick={() => {
                        handleUpVoteByPostId(
                          props.singlePostDetailsData.postId
                        );
                      }}
                      title="Like"
                    >
                      <ThumbUpAltIcon />
                      <p style={{ fontSize: "18px", padding: "2px" }}>
                        {" " + props.singlePostDetailsData.vote + ""}
                      </p>
                    </IconButton>
                    <IconButton
                      aria-label="UpVote"
                      style={{ color: "#D21F3C" }}
                      onClick={() => {
                        handleDownVoteByPostId(
                          props.singlePostDetailsData.postId
                        );
                      }}
                      title="Dislike"
                    >
                      <ThumbDownAltIcon />
                      <p style={{ fontSize: "18px", padding: "2px" }}>
                        {" " + props.singlePostDetailsData.dvote + ""}
                      </p>
                    </IconButton>
                  </>
                }
                title={
                  <Typography
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 800,
                    }}
                    onClick={() => viewOtherEmployeeDetails(props.singlePostDetailsData.userId)}
                  >
                    {props.singlePostDetailsData.userName}
                  </Typography>
                }
                subheader={
                  <Typography
                    style={{
                      fontSize: "1rem",
                    }}
                  >
                    {props.singlePostDetailsData.officeLocation}
                  </Typography>
                }
              />
      
              {props.singlePostDetailsData.type == "Technology" && (
                <CardMedia
                  component="img"
                  height="300"
                  image={technology}
                  alt="Posts"
                />
              )}
              {props.singlePostDetailsData.type == "Webinar" && (
                <CardMedia
                  component="img"
                  height="300"
                  image={webinar}
                  alt="Posts"
                />
              )}
              {props.singlePostDetailsData.type == "Event" && (
                <CardMedia
                  component="img"
                  height="300"
                  image={event}
                  alt="Posts"
                />
              )}
              {props.singlePostDetailsData.type == "Humour" && (
                <CardMedia
                  component="img"
                  height="300"
                  image={fun}
                  alt="Posts"
                />
              )}
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <div>
                    <Typography
                      style={{
                        fontSize: "1rem",
                      }}
                    >
                      {new Date(
                        props.singlePostDetailsData.postTimeStamp
                      ).toLocaleDateString() +
                        " " +
                        new Date(
                          props.singlePostDetailsData.postTimeStamp
                        ).toLocaleTimeString()}
                    </Typography>
                  </div>
                  <Typography
                    variant="h5"
                    paragraph
                    style={{
                      fontSize: "1.3rem",
                      marginTop: "10px",
                      textTransform: "uppercase",
                      fontWeight: 800,
                    }}
                  >
                    {props.singlePostDetailsData.type}
                  </Typography>
                  <Typography
                    paragraph
                    style={{
                      fontSize: "1.2rem",
                      marginTop: "-20px",
                    }}
                  >
                    {props.singlePostDetailsData.description}
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
            <PostComments props={props} />
          </div>
        </Grid>
      </Grid>
    </Template>
  );
};

const mapStateToProps = (state) => {
  return {
    singlePostDetailsData: state.testMockApiDataSetup.singlePostDetailsData,
    loading: state.testMockApiDataSetup.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (data) => dispatch(createPosts(data)),
    onsubmitComment: (data) => dispatch(addComment(data)),
    getSinglePost: (postId) => dispatch(getSinglePost(postId)),
    upVodeByPostId: (id) => dispatch(upVodeByPostId(id)),
    downVodeByPostId: (id) => dispatch(downVodeByPostId(id)),
    deleteCommentById: (id) => dispatch(deleteCommentById(id)),
    updateCommentById: (id, data) => dispatch(updateCommentById(id, data)),
    getEmployeeById: (id) => dispatch(getEmployeeById(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePostDetails);
