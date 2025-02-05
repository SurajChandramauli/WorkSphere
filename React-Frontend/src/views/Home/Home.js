import React, { useState, useEffect } from "react";
import { Template } from "../template";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  DialogActions,
  TextField,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  ButtonBase,
} from "@mui/material";
import { connect } from "react-redux";
import AddCommentIcon from "@mui/icons-material/AddComment";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { styled } from "@mui/material/styles";
import image1 from "../../assets/images/card.png";
import postBg from "../../assets/images/postBg2.png";
import fun from "../../assets/images/fun2.jpg";
import event from "../../assets/images/event1.jpg";
import webinar from "../../assets/images/webinar.jpg";
import technology from "../../assets/images/technology.png";

import { useNavigate } from "react-router-dom";

import {
  createPosts,
  getAllPosts,
  deletePostById,
  upVodeByPostId,
  downVodeByPostId,
  getSinglePost,
  updatePostById,
  getEmployeeById,
} from "../../redux/actions/EmployeeAction/AuthAction";
import Footer from "../../components/Footer";

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

const Home = (props) => {
  const [posts, setPosts] = useState([]);
  const [likesSorted, setLikesSorted] = useState([]);
  const [commentsSorted, setCommentsSorted] = useState([]);
  const [sortType, setSortType] = useState("Latest");
  useEffect(() => {
    if (props.allPostsData && props.allPostsData.length > 0) {
      setPosts(props.allPostsData);
      var sortedPostsByLikes = props.allPostsData?.sort(
        (a, b) => b.vote - a.vote
      );
      setLikesSorted(sortedPostsByLikes);
      var sortedPostsByComments = props.allPostsData?.sort(
        (a, b) => b.comments?.length - a.comments?.length
      );
      setCommentsSorted(sortedPostsByComments);
    }
  }, [props.allPostsData, sortType]);

  useEffect(() => {
    props.getAllPosts();
  }, [props.singlePostDetailsData, sortType]);
  useEffect(() => {
    var loggedId = localStorage.getItem("loggedInUserId");
    var loggedUser = localStorage.getItem("loggedInUserName");

    setLoggedInUserId(parseInt(loggedId));
    setLoggedInUserName(loggedUser);

    props.getAllPosts();
    setPosts(props.allPostData);
    var sortedPostsByLikes = props.allPostsData?.sort(
      (a, b) => b.vote - a.vote
    );
    setLikesSorted(sortedPostsByLikes);
    var sortedPostsByComments = props.allPostsData?.sort(
      (a, b) => b.comments?.length - a.comments?.length
    );
    setCommentsSorted(sortedPostsByComments);
  }, [
    props.allPostData,
    props.upVodeByPostId,
    props.deletePostById,
    props.createPosts,
    sortType,
  ]);
  const [expanded, setExpanded] = React.useState(true);
  const [postTypeLabel, setPostTypeLabel] = useState("Post Type");
  const [officeLocationLabel, setOfficeLocationLabel] =
    useState("Office Location");

  const [postTypeFilter, setPostTypeFilter] = useState("All");
  const [officeLocationFilter, setOfficeLocationFilter] = useState("All");
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [caption, setCaption] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [postType, setPostType] = useState("");
  const [officeLocation, setOfficeLocation] = useState("");
  const [loggedInUserName, setLoggedInUserName] = useState("");
  const [loggedInUserId, setLoggedInUserId] = useState(0);
  const [vote, setVote] = useState(0);
  const [dvote, setDVote] = useState(0);
  const [editId, setEditId] = useState(0);
  const handlePostTypeChange = (event) => {
    setPostType(event.target.value);
    setPostTypeLabel(event.target.value);
  };
  const handleOfficeLocationChange = (event) => {
    setOfficeLocation(event.target.value);
    setOfficeLocationLabel(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEditOpen = (id) => {
    props.getSinglePost(id);
    setEditId(id);
    setPostType(props.singlePostDetailsData.type);
    setOfficeLocation(props.singlePostDetailsData.officeLocation);
    setDescription(props.singlePostDetailsData.description);
    setVote(props.singlePostDetailsData.vote);
    setDVote(props.singlePostDetailsData.dvote);
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handleUpVoteByPostId = (PostId) => {
    props.upVodeByPostId(PostId);
    props.getAllPosts();
    setVote(props.singlePostDetailsData.vote);
  };
  const handleDownVoteByPostId = (PostId) => {
    props.downVodeByPostId(PostId);
    props.getAllPosts();
    setDVote(props.singlePostDetailsData.dvote);
  };
  useEffect(() => {
    var loggedId = localStorage.getItem("loggedInUserId");
    var loggedUser = localStorage.getItem("loggedInUserName");

    setLoggedInUserId(parseInt(loggedId));
    setLoggedInUserName(loggedUser);

    props.getAllPosts();
  }, [
    props.getAllPosts,
    props.upVodeByPostId,
    props.deletePostById,
    props.createPosts,
    props.singlePostDetailsData,
    vote,
    dvote,
    sortType,
    props.allPostData,
  ]);

  const postForm = {
    description: description,
    officeLocation: officeLocation,
    postImgUrl:
      "https://demos.creative-tim.com/material-dashboard-react/static/media/bg-profile.af1219a742e09fc7b612.jpeg",
    type: postType,
    userId: loggedInUserId,
    userName: loggedInUserName,
    vote: vote,
    dvote: dvote,
  };
  const history = useNavigate();
  function handlePostDetails(postid) {
    props.getSinglePost(postid);
    history("/postDetails/" + postid);
  }
  const handleSubmitEdit = () => {
    props.onSubmitEditPost(postForm, editId);
    handleClose();
    handleEditClose();
  };
  function handleClearAll() {
    setPostType("");
    setOfficeLocation("");
    setDescription("");
    setVote(0);
    setDVote(0);
  }
  const handleSubmit = () => {
    props.onSubmit(postForm);
    handleClearAll();
    handleClose();
    handleEditClose();
  };

  function handleDeletePostById(id) {
    props.deletePostById(id);
    props.getAllPosts();
  }

  const handleChangePostTypeFilter = (event) => {
    setPostTypeFilter(event.target.value);
  };
  const handleChangeOfficeLocationFilter = (event) => {
    setOfficeLocationFilter(event.target.value);
  };
  const handleChangeSortType = (event) => {
    setSortType(event.target.value);
  };
  function viewOtherEmployeeDetails(id) {
    props.getEmployeeById(id);
    history("/otherViewProfile/" + id);
  }
  return (
    <Template>
      <Button
        variant="contained"
        sx={{ marginLeft: "220px", bgcolor: "#7BAA23", height: "53px" }}
        onClick={handleOpen}
      >
        Create Post
      </Button>

      <InputLabel
        style={{
          // width: "150px" ,
          marginTop: "-90px",
          marginBottom: "30px",
          marginLeft: "630px",
          // color:"#fff"
        }}
      >
        Post Type
      </InputLabel>
      <Select
        value={postTypeFilter}
        onChange={handleChangePostTypeFilter}
        style={{
          width: "150px",
          marginTop: "-80px",
          marginLeft: "630px",
          // backgroundColor :"#fff"
        }}
      >
        {/* <br/> */}
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="Technology">Technology</MenuItem>
        <MenuItem value="Webinar">Webinar</MenuItem>
        <MenuItem value="Event">Event</MenuItem>
        <MenuItem value="Humour">Humour</MenuItem>
      </Select>
      <InputLabel
        id="demo-simple-select-label"
        style={{
          // width: "150px" ,
          marginTop: "-92px",
          marginBottom: "30px",
          marginLeft: "800px",
          // color:"#fff"
        }}
      >
        Location
      </InputLabel>
      <Select
        value={officeLocationFilter}
        onChange={handleChangeOfficeLocationFilter}
        style={{
          width: "150px",
          marginTop: "-100px",
          marginLeft: "800px",
          // backgroundColor:"#fff"
        }}
      >
        <MenuItem value="All">All</MenuItem>
        {/* <MenuItem value="Ahmedabad">Ahmedabad</MenuItem> */}
        <MenuItem value="Bengaluru">Bengaluru</MenuItem>
        <MenuItem value="Chennai">Chennai</MenuItem>
        <MenuItem value="Gurugram">Gurugram</MenuItem>
        <MenuItem value="Hyderabad">Hyderabad</MenuItem>
        {/* <MenuItem value="Kolkata">Kolkata</MenuItem> */}
        <MenuItem value="Mumbai">Mumbai</MenuItem>
        <MenuItem value="Pune">Pune</MenuItem>
      </Select>
      <InputLabel
        style={{
          // width: "150px" ,
          marginTop: "-90px",
          marginBottom: "30px",
          marginLeft: "1050px",
          // color:"#fff"
        }}
      >
        Sort By
      </InputLabel>
      <Select
        value={sortType}
        onChange={handleChangeSortType}
        style={{
          width: "150px",
          marginTop: "-80px",
          marginLeft: "1050px",
          // backgroundColor:"#fff"
        }}
      >
        <MenuItem value="Likes">Up Vote</MenuItem>
        <MenuItem value="Comments">Comments</MenuItem>
        <MenuItem value="Latest">Latest</MenuItem>
      </Select>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create New Post</DialogTitle>
        <DialogContent>
          <FormControl fullWidth>
            <Typography>{postTypeLabel}</Typography>
            <Select
              value={postType}
              onChange={handlePostTypeChange}
              onClose={() => setPostTypeLabel("Post Type")} // Reset label when dropdown closes
              onOpen={() => setPostTypeLabel(postType)} // Set selected value as label when dropdown opens
            >
              <MenuItem value="Technology">Technology</MenuItem>
              <MenuItem value="Webinar">Webinar</MenuItem>
              <MenuItem value="Event">Event</MenuItem>
              <MenuItem value="Humour">Humour</MenuItem>
            </Select>
            <br />
          </FormControl>
          <FormControl fullWidth>
            <Typography>{officeLocationLabel}</Typography>
            <Select
              value={officeLocation}
              onChange={handleOfficeLocationChange}
              onClose={() => setOfficeLocationLabel("Office Location")} // Reset label when dropdown closes
              onOpen={() => setOfficeLocationLabel(officeLocation)} // Set selected value as label when dropdown opens
            >
              {/* <MenuItem value="Ahmedabad">Ahmedabad</MenuItem> */}
              <MenuItem value="Bengaluru">Bengaluru</MenuItem>
              <MenuItem value="Chennai">Chennai</MenuItem>
              <MenuItem value="Gurugram">Gurugram</MenuItem>
              <MenuItem value="Hyderabad">Hyderabad</MenuItem>
              {/* <MenuItem value="Kolkata">Kolkata</MenuItem> */}
              <MenuItem value="Mumbai">Mumbai</MenuItem>
              <MenuItem value="Pune">Pune</MenuItem>
            </Select>
            <br />
          </FormControl>

          <Typography>Post Description</Typography>
          <TextField
            id="outlined-multiline-static"
            // label="Post Description"
            rows={4}
            value={description}
            onChange={handleDescriptionChange}
            fullWidth
            sx={{ marginBottom: "1rem", width: "400px" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={
              !(description && description.length > 0) ||
              !(officeLocation && officeLocation.length > 0) ||
              !(postType && postType.length > 0)
            }
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openEdit} onClose={handleEditClose}>
        <DialogTitle>Edit Post</DialogTitle>
        <DialogContent>
          <TextField
            id="outlined-multiline-static"
            label="Post Description"
            rows={4}
            value={description}
            preValue={props.singlePostDetailsData.description}
            onChange={handleDescriptionChange}
            fullWidth
            sx={{ marginBottom: "1rem" }}
          />

          <FormControl fullWidth>
            <InputLabel>{officeLocationLabel}</InputLabel>
            <Select
              value={officeLocation}
              onChange={handleOfficeLocationChange}
              onClose={() => setOfficeLocationLabel("Office Location")} // Reset label when dropdown closes
              onOpen={() => setOfficeLocationLabel(officeLocation)} // Set selected value as label when dropdown opens
            >
              {/* <MenuItem value="Ahmedabad">Ahmedabad</MenuItem> */}
              <MenuItem value="Bengaluru">Bengaluru</MenuItem>
              <MenuItem value="Chennai">Chennai</MenuItem>
              <MenuItem value="Gurugram">Gurugram</MenuItem>
              <MenuItem value="Hyderabad">Hyderabad</MenuItem>
              {/* <MenuItem value="Kolkata">Kolkata</MenuItem> */}
              <MenuItem value="Mumbai">Mumbai</MenuItem>
              <MenuItem value="Pune">Pune</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Post Type</InputLabel>
            <Select value={postType} onChange={handlePostTypeChange}>
              <MenuItem value="Tech">Tech</MenuItem>
              <MenuItem value="Webinar">Webinar</MenuItem>
              <MenuItem value="Events">Events</MenuItem>
              <MenuItem value="Fun">Fun</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose}>Cancel</Button>
          <Button variant="contained" onClick={() => handleSubmit()}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      {/* <center> */}
      <Grid container sx={{ marginTop: "50px", paddingLeft: "220px" }}>
        {sortType == "Likes" && posts?.length > 0
          ? posts
              ?.sort((a, b) => b.vote - a.vote)
              .map((post) => (
                <Grid item sm={12} key={post.postId}>
                  {(post.type === postTypeFilter || postTypeFilter === "All") &&
                    (post.officeLocation === officeLocationFilter ||
                      officeLocationFilter === "All") && (
                      <div>
                        <Card
                          sx={{
                            maxWidth: 1000,
                            bgcolor: "white",
                            border: "1px solid #ccc",
                            borderRadius: "8px",
                          }}
                        >
                          <CardHeader
                            style={{ color: "#000" }}
                            avatar={
                              <Avatar
                                sx={{
                                  bgcolor: "#7BAA23",
                                  width: "60px",
                                  height: "60px",
                                }}
                                aria-label="recipe"
                              >
                                <b>{post.userName.charAt(0)}</b>
                              </Avatar>
                            }
                            action={
                              <>
                                <IconButton
                                  aria-label="UpVote"
                                  style={{ color: "#006EB3" }}
                                  onClick={() => {
                                    handleUpVoteByPostId(post.postId);
                                  }}
                                  title="UpVote"
                                >
                                  <ThumbUpAltIcon />
                                  <p
                                    style={{ fontSize: "18px", padding: "2px" }}
                                  >
                                    {" " + post.vote + ""}
                                  </p>
                                </IconButton>
                                <IconButton
                                  aria-label="DownVote"
                                  style={{ color: "#D21F3C" }}
                                  onClick={() => {
                                    handleDownVoteByPostId(post.postId);
                                  }}
                                  title="DownVote"
                                >
                                  <ThumbDownAltIcon />
                                  <p
                                    style={{ fontSize: "18px", padding: "2px" }}
                                  >
                                    {" " + post.dvote + ""}
                                  </p>
                                </IconButton>

                                {loggedInUserId === post.userId && (
                                  <IconButton
                                    aria-label="delete"
                                    style={{ color: "#D71F1F" }}
                                    onClick={() => {
                                      handleDeletePostById(post.postId);
                                    }}
                                    title="Delete Post"
                                  >
                                    <DeleteIcon />
                                  </IconButton>
                                )}
                                {/* <> */}
                                <IconButton
                                  style={{
                                    color: "#006EB3",
                                    // marginLeft:"900px",
                                    // marginTop:"-200px",
                                  }}
                                  onClick={() => handlePostDetails(post.postId)}
                                  title="Add Comment"
                                >
                                  <AddCommentIcon fontSize="large" />

                                  <Typography
                                    paragraph
                                    style={{
                                      fontSize: "1.5rem",
                                      marginTop: "11px",
                                      marginRight: "4px",
                                    }}
                                  >
                                    {post.comments?.length + " "}
                                  </Typography>
                                </IconButton>
                                {/* </> */}
                              </>
                            }
                            title={
                              <Typography
                                style={{
                                  fontSize: "1.4rem",
                                  fontWeight: 800,
                                }}
                                onClick={() =>
                                  viewOtherEmployeeDetails(post.userId)
                                }
                              >
                                {post.userName}
                              </Typography>
                            }
                            subheader={
                              <Typography
                                style={{
                                  fontSize: "1rem",
                                }}
                              >
                                {post.officeLocation}
                              </Typography>
                            }
                          />

                          {(post.type == "Technology" ||
                            post.type == "Tech") && (
                            <CardMedia
                              component="img"
                              height="300"
                              image={technology}
                              alt="Posts"
                            />
                          )}
                          {post.type == "Webinar" && (
                            <CardMedia
                              component="img"
                              height="300"
                              image={webinar}
                              alt="Posts"
                            />
                          )}
                          {(post.type == "Event" || post.type == "Events") && (
                            <CardMedia
                              component="img"
                              height="300"
                              image={event}
                              alt="Posts"
                            />
                          )}
                          {(post.type == "Humour" || post.type == "Fun") && (
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
                                    post.postTimeStamp
                                  ).toLocaleDateString() +
                                    " " +
                                    new Date(
                                      post.postTimeStamp
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
                                {post.type}
                              </Typography>

                              <Typography
                                paragraph
                                style={{
                                  fontSize: "1.2rem",
                                  marginTop: "-20px",
                                }}
                              >
                                {post.description}
                              </Typography>
                            </CardContent>
                          </Collapse>
                        </Card>
                        <br />
                      </div>
                    )}
                </Grid>
              ))
          : ""}
        {sortType == "Comments" && posts?.length > 0
          ? posts
              ?.sort((a, b) => b.comments?.length - a.comments?.length)
              .map((post) => (
                <Grid item sm={12} key={post.postId}>
                  {(post.type === postTypeFilter || postTypeFilter === "All") &&
                    (post.officeLocation === officeLocationFilter ||
                      officeLocationFilter === "All") && (
                      <div>
                        <Card
                          sx={{
                            maxWidth: 1000,
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
                                <b>{post.userName.charAt(0)}</b>
                              </Avatar>
                            }
                            action={
                              <>
                                <IconButton
                                  aria-label="UpVote"
                                  style={{ color: "#006EB3" }}
                                  onClick={() => {
                                    handleUpVoteByPostId(post.postId);
                                  }}
                                  title="UpVote"
                                >
                                  <ThumbUpAltIcon />
                                  <p
                                    style={{ fontSize: "18px", padding: "2px" }}
                                  >
                                    {" " + post.vote + ""}
                                  </p>
                                </IconButton>
                                <IconButton
                                  aria-label="DownVote"
                                  style={{ color: "#D21F3C" }}
                                  onClick={() => {
                                    handleDownVoteByPostId(post.postId);
                                  }}
                                  title="DownVote"
                                >
                                  <ThumbDownAltIcon />
                                  <p
                                    style={{ fontSize: "18px", padding: "2px" }}
                                  >
                                    {" " + post.dvote + ""}
                                  </p>
                                </IconButton>

                                {loggedInUserId === post.userId && (
                                  <IconButton
                                    aria-label="delete"
                                    style={{ color: "#D71F1F" }}
                                    onClick={() => {
                                      handleDeletePostById(post.postId);
                                    }}
                                    title="Delete Post"
                                  >
                                    <DeleteIcon />
                                  </IconButton>
                                )}
                                <IconButton
                                  style={{
                                    color: "#006EB3",
                                    // marginLeft:"900px",
                                    // marginTop:"-200px",
                                  }}
                                  onClick={() => handlePostDetails(post.postId)}
                                  title="Add Comment"
                                >
                                  <AddCommentIcon fontSize="large" />

                                  <Typography
                                    paragraph
                                    style={{
                                      fontSize: "1.5rem",
                                      marginTop: "11px",
                                      marginRight: "4px",
                                    }}
                                  >
                                    {post.comments?.length + " "}
                                  </Typography>
                                </IconButton>
                              </>
                            }
                            title={
                              <Typography
                                style={{
                                  fontSize: "1.4rem",
                                  fontWeight: 800,
                                }}
                                onClick={() =>
                                  viewOtherEmployeeDetails(post.userId)
                                }
                              >
                                {post.userName}
                              </Typography>
                            }
                            subheader={
                              <Typography
                                style={{
                                  fontSize: "1rem",
                                }}
                              >
                                {post.officeLocation}
                              </Typography>
                            }
                          />
                          {(post.type == "Technology" ||
                            post.type == "Tech") && (
                            <CardMedia
                              component="img"
                              height="300"
                              image={technology}
                              alt="Posts"
                            />
                          )}
                          {post.type == "Webinar" && (
                            <CardMedia
                              component="img"
                              height="300"
                              image={webinar}
                              alt="Posts"
                            />
                          )}
                          {(post.type == "Event" || post.type == "Events") && (
                            <CardMedia
                              component="img"
                              height="300"
                              image={event}
                              alt="Posts"
                            />
                          )}
                          {(post.type == "Humour" || post.type == "Fun") && (
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
                                    post.postTimeStamp
                                  ).toLocaleDateString() +
                                    " " +
                                    new Date(
                                      post.postTimeStamp
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
                                {post.type}
                              </Typography>

                              <Typography
                                paragraph
                                style={{
                                  fontSize: "1.2rem",
                                  marginTop: "-20px",
                                }}
                              >
                                {post.description}
                              </Typography>
                            </CardContent>
                          </Collapse>
                        </Card>
                        <br />
                      </div>
                    )}
                </Grid>
              ))
          : ""}

        {sortType == "Latest" && posts?.length > 0
          ? posts
              .sort(
                (a, b) => new Date(b.postTimeStamp) - new Date(a.postTimeStamp)
              )
              .map((post) => (
                <Grid item sm={12} key={post.postId}>
                  {(post.type === postTypeFilter || postTypeFilter === "All") &&
                    (post.officeLocation === officeLocationFilter ||
                      officeLocationFilter === "All") && (
                      <div>
                        <Card
                          sx={{
                            maxWidth: 1000,
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
                                <b>{post.userName.charAt(0)}</b>
                              </Avatar>
                            }
                            action={
                              <>
                                <IconButton
                                  aria-label="UpVote"
                                  style={{ color: "#006EB3" }}
                                  onClick={() => {
                                    handleUpVoteByPostId(post.postId);
                                  }}
                                  title="UpVote"
                                >
                                  <ThumbUpAltIcon />
                                  <p
                                    style={{ fontSize: "18px", padding: "2px" }}
                                  >
                                    {" " + post.vote + ""}
                                  </p>
                                </IconButton>
                                <IconButton
                                  aria-label="DownVote"
                                  style={{ color: "#D21F3C" }}
                                  onClick={() => {
                                    handleDownVoteByPostId(post.postId);
                                  }}
                                  title="DownVote"
                                >
                                  <ThumbDownAltIcon />
                                  <p
                                    style={{ fontSize: "18px", padding: "2px" }}
                                  >
                                    {" " + post.dvote + ""}
                                  </p>
                                </IconButton>

                                {loggedInUserId === post.userId && (
                                  <IconButton
                                    aria-label="delete"
                                    style={{ color: "#D71F1F" }}
                                    onClick={() => {
                                      handleDeletePostById(post.postId);
                                    }}
                                    title="Delete Post"
                                  >
                                    <DeleteIcon />
                                  </IconButton>
                                )}
                                <IconButton
                                  style={{
                                    color: "#006EB3",
                                    // marginLeft:"900px",
                                    // marginTop:"-200px",
                                  }}
                                  onClick={() => handlePostDetails(post.postId)}
                                  title="Add Comment"
                                >
                                  <AddCommentIcon fontSize="large" />

                                  <Typography
                                    paragraph
                                    style={{
                                      fontSize: "1.5rem",
                                      marginTop: "11px",
                                      marginRight: "4px",
                                    }}
                                  >
                                    {post.comments?.length + " "}
                                  </Typography>
                                </IconButton>
                              </>
                            }
                            title={
                              <Typography
                                style={{
                                  fontSize: "1.4rem",
                                  fontWeight: 800,
                                }}
                                onClick={() =>
                                  viewOtherEmployeeDetails(post.userId)
                                }
                              >
                                {post.userName}
                              </Typography>
                            }
                            subheader={
                              <Typography
                                style={{
                                  fontSize: "1rem",
                                }}
                              >
                                {post.officeLocation}
                              </Typography>
                            }
                          />

                          {(post.type == "Technology" ||
                            post.type == "Tech") && (
                            <CardMedia
                              component="img"
                              height="300"
                              image={technology}
                              alt="Posts"
                            />
                          )}
                          {post.type == "Webinar" && (
                            <CardMedia
                              component="img"
                              height="300"
                              image={webinar}
                              alt="Posts"
                            />
                          )}
                          {(post.type == "Event" || post.type == "Events") && (
                            <CardMedia
                              component="img"
                              height="300"
                              image={event}
                              alt="Posts"
                            />
                          )}
                          {(post.type == "Humour" || post.type == "Fun") && (
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
                                    post.postTimeStamp
                                  ).toLocaleDateString() +
                                    " " +
                                    new Date(
                                      post.postTimeStamp
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
                                {post.type}
                              </Typography>

                              <Typography
                                paragraph
                                style={{
                                  fontSize: "1.2rem",
                                  marginTop: "-20px",
                                }}
                              >
                                {post.description}
                              </Typography>
                            </CardContent>
                          </Collapse>
                        </Card>
                        <br />
                      </div>
                    )}
                </Grid>
              ))
          : ""}
      </Grid>
      <br />
      <Footer />
      {/* </center> */}
    </Template>
  );
};

const mapStateToProps = (state) => {
  return {
    allPostsData: state.testMockApiDataSetup.allPostsData,
    singlePostDetailsData: state.testMockApiDataSetup.singlePostDetailsData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (data) => dispatch(createPosts(data)),
    onSubmitEditPost: (data, id) => dispatch(updatePostById(data, id)),
    getAllPosts: () => dispatch(getAllPosts()),
    deletePostById: (id) => dispatch(deletePostById(id)),
    upVodeByPostId: (id) => dispatch(upVodeByPostId(id)),
    downVodeByPostId: (id) => dispatch(downVodeByPostId(id)),
    getSinglePost: (postId) => dispatch(getSinglePost(postId)),
    getEmployeeById: (id) => dispatch(getEmployeeById(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
