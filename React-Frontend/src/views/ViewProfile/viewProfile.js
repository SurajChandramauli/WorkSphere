import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import {
  getEmployeeById,
  getAllFollowers,
  getAllFollowing,
  getIncentivePoints,
} from "../../redux/actions";
// My Components
import MyBox from "../../components/MyBox";

// Material UI components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import { Button, IconButton } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Box,
  Divider,
  DialogContentText,
  DialogActions,
  DialogContent,
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";

// My assets
import bg from "../../assets/images/deloitte_building10.jpg";
import breakpoints from "../../assets/base/breakpoints";

//icons
//alert
import Footer from "../../components/Footer";

import FutureGoals from "../../components/FutureGoals";
import { Template } from "../template";

import OwnBio from "../../components/OwnBio";
import OwnProfileInfoCard from "../../components/OwnProfileInfoCard";
import { Typography } from "antd";

const ViewProfile = (props) => {
  const [isFollowingHovered, setIsFollowingHovered] = useState(false);
  const [isFollowerHovered, setIsFollowerHovered] = useState(false);

  const [rewardOpen, setRewardOpen] = useState(false);

  const handleRewardOpen = () => {
    setRewardOpen(true);
  };

  const handleRewardClose = () => {
    setRewardOpen(false);
  };
  const [openFollower, setOpenFollower] = useState(false);

  const handleFollowersClick = () => {
    setOpenFollower(true);
  };

  const handleFollowersClose = () => {
    setOpenFollower(false);
  };
  const [openFollowing, setOpenFollowing] = useState(false);

  const handleFollowingClick = () => {
    setOpenFollowing(true);
  };

  const handleFollowingClose = () => {
    setOpenFollowing(false);
  };
  const firstChar = props.empDetails.name
    ? props.empDetails.name.charAt(0)
    : "A";

  const history = useNavigate();
  // //params
  const { tab } = useParams();

  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(tab ? parseInt(tab, 10) : 1);

  // divider
  const [showDivider, setShowDivider] = useState(true);
  useEffect(() => {
    const handleTabsOrientation = () => {
      if (window.innerWidth < breakpoints.values.sm) {
        setTabsOrientation("vertical");
        setShowDivider(false);
      } else {
        setTabsOrientation("horizontal");
        setShowDivider(true);
      }
    };
    window.addEventListener("resize", handleTabsOrientation);

    // calling handleTabsOrientation to set the state in initial value
    handleTabsOrientation();

    // removing event listener on unmounting
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation, showDivider]);
  function handleViewFollowerFollowing(id) {
    props.getEmployeeById(id);
    history("/otherViewProfile/" + id);
  }
  useEffect(() => {
    var id = localStorage.getItem("loggedInUserId");
    props.getAllFollowers(id);
    props.getAllFollowing(id);
    props.getEmployeeById(id);
    props.getIncentivePoints(id);
  }, []);

  const handleSetTabValue = (event, newValue) => {
    setTabValue(newValue);
  };

  function handleEdit(id) {
    history("/editProfile/" + id);
  }

  // tab style
  let tabStyle = {
    // color: theme.palette.font.main,
    opacity: 1,
  };
  // icon style
  let iconStyle = {
    verticalAlign: "middle",
    marginRight: "0.5rem",
  };

  //styels

  const myStyle = createTheme({
    components: {
      MuiTab: {
        styleOverrides: {
          root: {
            minHeight: "25px",
            borderRadius: "8px",
            height: "30px",
            backgroundColor: "transparent",
            opacity: "1",
            // margin: "4px",
            transition: "background-color 0.1s ease-in-out",
            "&.Mui-selected": {
              boxShadow: "2px 2px 3px rgba(0, 0, 0, 0.5)",
            },
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            opacity: "0.5",
          },
        },
      },
    },
  });

  return (
    <Template>
      <ThemeProvider theme={myStyle}>
        <MyBox
          width="100%"
          height="400px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          borderRadius="15px"
          sx={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover", // to cover the given area
            backgroundPosition: "center", // to show image completely
          }}
        />
        <Card
          sx={{
            position: "relative",
            mt: -15,
            mx: 3, // margin left and margin right
            px: 2,
            py: 2,
          }}
        >
          {}
          {
            <div>
              <Grid container spacing={3}>
                <Grid item sx={{}}>
                  <Avatar
                    alt="Profile Pic"
                    // src={props.empDetails.profileImgUrl}
                    sx={{ width: 70, height: 70, bgcolor: "#7BAA23" }}
                    style={{}}
                  >
                    {firstChar}
                  </Avatar>
                </Grid>

                <Grid item>
                  <MyBox
                    fontSize="25px"
                    fontWeight="600"
                    textTransform={"uppercase"}
                    // sx={{marginLeft:"-200px"}}
                  >
                    {props.empDetails.name}
                  </MyBox>
                  <MyBox
                    // color={theme.palette.font.light}
                    color="#3B3B3B"
                    fontSize="20px"
                    fontWeight="450"
                  >
                    {props.empDetails.designation}
                  </MyBox>
                </Grid>

                <Grid item>
                  <Typography
                    onClick={handleFollowersClick}
                    onMouseEnter={() => setIsFollowerHovered(true)}
                    onMouseLeave={() => setIsFollowerHovered(false)}
                    style={{
                      fontSize: "25px",
                      textDecoration: "none",
                      color: isFollowerHovered ? "#000" : "#7BAA23",
                      marginLeft: "300px",
                    }}
                  >
                    Followers
                  </Typography>

                  <Dialog open={openFollower} onClose={handleFollowersClose}>
                    <DialogTitle>
                      <center>FOLLOWERS</center>
                    </DialogTitle>
                    <List
                      sx={{
                        width: "320px",
                        // maxWidth: 360,
                        bgcolor: "background.paper",
                      }}
                    >
                      {props.allFollowingList &&
                        props.allFollowingList.length > 0 &&
                        props.allFollowingList.map((following) => (
                          <ListItem key={following.id}>
                            <ListItemAvatar>
                              <Avatar
                                src={following.followedByName.charAt(0)}
                                alt={following.followedByName}
                                sx={{
                                  width: 60,
                                  height: 60,
                                  bgcolor: "#9ACD66",
                                  marginLeft: "20px",
                                  marginBottom: "5px",
                                }}
                              />
                            </ListItemAvatar>
                            <ListItemText
                              primary={following.followedByName}
                              onClick={() =>
                                handleViewFollowerFollowing(
                                  following.followedById
                                )
                              }
                              primaryTypographyProps={{
                                style: {
                                  fontSize: "20px",
                                  marginLeft: "30px",
                                  marginBottom: "5px",
                                },
                              }}
                            />
                          </ListItem>
                        ))}
                    </List>
                  </Dialog>
                </Grid>
                <Grid item>
                  <Typography
                    onClick={handleFollowingClick}
                    onMouseEnter={() => setIsFollowingHovered(true)}
                    onMouseLeave={() => setIsFollowingHovered(false)}
                    style={{
                      fontSize: "25px",
                      textDecoration: "none",
                      color: isFollowingHovered ? "#000" : "#7BAA23",
                    }}
                  >
                    Following
                  </Typography>
                  <Dialog open={openFollowing} onClose={handleFollowingClose}>
                    <DialogTitle>
                      <center>FOLLOWING</center>
                    </DialogTitle>
                    <List
                      sx={{
                        width: "320px",
                        // maxWidth: 360,
                        bgcolor: "background.paper",
                      }}
                    >
                      {props.allFollowersList &&
                        props.allFollowersList.length > 0 &&
                        props.allFollowersList.map((follower) => (
                          <ListItem key={follower.id}>
                            <ListItemAvatar>
                              <Avatar
                                src={follower.empName?.charAt(0)}
                                alt={follower.empName ? follower.empName : ""}
                                sx={{
                                  width: 60,
                                  height: 60,
                                  bgcolor: "#9ACD66",
                                  marginLeft: "20px",
                                  marginBottom: "5px",
                                }}
                              />
                            </ListItemAvatar>
                            <ListItemText
                              primary={follower.empName}
                              onClick={() =>
                                handleViewFollowerFollowing(follower.empId)
                              }
                              primaryTypographyProps={{
                                style: {
                                  fontSize: "20px",
                                  marginLeft: "30px",
                                  marginBottom: "5px",
                                },
                              }}
                            />
                          </ListItem>
                        ))}
                    </List>
                  </Dialog>
                </Grid>
                <Grid item sx={{ marginLeft: "350px", marginTop: "-10px" }}>
                  <IconButton
                    onClick={() => {
                      handleRewardOpen();
                    }}
                    title="View Reward Instructions"
                  >
                    <Typography
                      paragraph
                      style={{
                        fontSize: "1.5rem",
                      }}
                    >
                      {props.empIncentivePointData > 0
                        ? props.empIncentivePointData
                        : 0}
                    </Typography>
                    <EmojiEventsIcon
                      fontSize="large"
                      style={{ color: "gold" }}
                    />
                  </IconButton>
                  <Dialog open={rewardOpen} onClose={handleRewardClose}>
                    <DialogTitle>
                      <center>
                        <Typography style={{ fontSize: "25px" }}>
                          How its calculated?
                        </Typography>
                        <Divider
                          sx={{
                            backgroundColor: "#7BAA23",
                            width: "300px",
                            height: "1px",
                            marginTop: "3px",
                          }}
                        />
                      </center>
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        <Typography style={{ fontSize: "20px" }}>
                          You create a post :{" "}
                          <Typography
                            style={{
                              fontSize: "20px",
                              fontWeight: 600,
                              color: "#7BAA23",
                              display: "inline",
                            }}
                          >
                            +5
                          </Typography>
                        </Typography>
                        <Typography style={{ fontSize: "20px" }}>
                          Your post gets a Comment :{" "}
                          <Typography
                            style={{
                              fontSize: "20px",
                              fontWeight: 600,
                              color: "#7BAA23",
                              display: "inline",
                            }}
                          >
                            +2
                          </Typography>
                        </Typography>
                        <Typography style={{ fontSize: "20px" }}>
                          Your post gets an UpVote :{" "}
                          <Typography
                            style={{
                              fontSize: "20px",
                              fontWeight: 600,
                              color: "#7BAA23",
                              display: "inline",
                            }}
                          >
                            +1
                          </Typography>
                        </Typography>
                        <Typography style={{ fontSize: "20px" }}>
                          Your post gets a DownVote :{" "}
                          <Typography
                            style={{
                              fontSize: "20px",
                              fontWeight: 600,
                              color: "red",
                              display: "inline",
                            }}
                          >
                            -1
                          </Typography>
                        </Typography>
                        <Typography style={{ fontSize: "20px" }}>
                          You create a Car Pool :{" "}
                          <Typography
                            style={{
                              fontSize: "20px",
                              fontWeight: 600,
                              color: "#7BAA23",
                              display: "inline",
                            }}
                          >
                            +7
                          </Typography>
                        </Typography>
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleRewardClose} color="primary">
                        Close
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Grid>
                <Grid item sx={{ marginLeft: "0px" }}>
                  <Button
                    variant="contained"
                    onClick={() => handleEdit(props.empDetails.userId)}
                    style={{ backgroundColor: "#7BAA23" }}
                  >
                    <b>Edit</b>
                  </Button>
                </Grid>
              </Grid>
            </div>
          }

          <Box mt={2} mb={3}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6} xl={4}>
                <OwnBio />
              </Grid>

              <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
                {showDivider && (
                  <Divider
                    orientation="vertical"
                    // color={theme.palette.alt.main}
                  />
                )}

                <OwnProfileInfoCard />

                {/* <AboutWebsite /> */}
              </Grid>

              <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
                {showDivider && (
                  <Divider
                    orientation="vertical"
                    // color={theme.palette.alt.main}
                  />
                )}

                <FutureGoals />
              </Grid>
            </Grid>
          </Box>
        </Card>
        <Footer />
      </ThemeProvider>
    </Template>
  );
};

const mapStateToProps = (state) => {
  return {
    empDetails: state.testMockApiDataSetup.singleEmployeeData,
    allFollowersList: state.testMockApiDataSetup.allFollowersList,
    allFollowingList: state.testMockApiDataSetup.allFollowingList,
    empIncentivePointData: state.testMockApiDataSetup.empIncentivePointData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEmployeeById: (id) => dispatch(getEmployeeById(id)),
    getAllFollowers: (id) => dispatch(getAllFollowers(id)),
    getAllFollowing: (id) => dispatch(getAllFollowing(id)),
    getIncentivePoints: (id) => dispatch(getIncentivePoints(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewProfile);
