import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import {
  getEmployeeById,
  createFollowConnection,
  getAllFollowers,
  getAllFollowing,
  getIncentivePoints,
  unfollowEmployee,
} from "../../redux/actions";
// My Components
import MyBox from "../../components/MyBox";
import { Typography } from "antd";
// Material UI components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";

import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Divider } from "@mui/material";

// My assets
import dp from "../../assets/images/surajProfile.jpg";
import bg from "../../assets/images/deloitte_building10.jpg";
import breakpoints from "../../assets/base/breakpoints";

//icons
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

//alert
import Footer from "../../components/Footer";

import MyBio from "../../components/MyBio";
import OtherFutureGoals from "../../components/OtherFutureGoals";
import ProfileInfoCard from "../../components/ProfileInfoCard";
import AboutWebsite from "../../components/AboutWebiste";
import AdditionalFeatures from "../../components/AdditionalFeature";

import { Template } from "../template";

const OtherViewProfile = (props) => {
  const [isFollowingHovered, setIsFollowingHovered] = useState(false);
  const [isFollowerHovered, setIsFollowerHovered] = useState(false);

  const history = useNavigate();
  const [loogedUserId, setLoggedUserId] = useState(1);
  const [loogedUserName, setLoogedUserName] = useState("");
  const [openFollower, setOpenFollower] = useState(false);

  const handleFollowersClick = () => {
    setOpenFollower(true);
  };

  const handleFollowersClose = () => {
    setOpenFollower(false);
  };
  const followers = [
    { id: 1, name: "Ashana" },
    { id: 2, name: "Suraj" },
    { id: 3, name: "Ritik" },
    { id: 4, name: "Manas" },

    // Add more followers as needed
  ];
  const [openFollowing, setOpenFollowing] = useState(false);

  const handleFollowingClick = () => {
    setOpenFollowing(true);
  };

  const handleFollowingClose = () => {
    setOpenFollowing(false);
  };
  const followings = [
    { id: 1, name: "Ashana" },
    { id: 2, name: "Suraj" },
    { id: 3, name: "Ritik" },

    // Add more followers as needed
  ];

  function handleViewFollowerFollowing(id) {
    history("/otherViewProfile/" + id);
    props.getEmployeeById(id);
  }
  const firstChar = props.empDetails.name
    ? props.empDetails.name.charAt(0)
    : "A";

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

    // event that calling the handleTabsOrientation
    window.addEventListener("resize", handleTabsOrientation);

    // calling handleTabsOrientation to set the state in initial value
    handleTabsOrientation();

    // removing event listener on unmounting
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation, showDivider]);

  const handleSetTabValue = (event, newValue) => {
    setTabValue(newValue);
  };

  // tab style
  let tabStyle = {
    opacity: 1,
  };
  // icon style
  let iconStyle = {
    verticalAlign: "middle",
    marginRight: "0.5rem",
  };
  const followForm = {
    empId: props.empDetails.userId,

    followedById: loogedUserId,

    empName: props.empDetails.name,

    followedByName: loogedUserName,
  };
  function handleFollow() {
    if (
      props.allFollowingList?.some((item) => item.followedById == loogedUserId)
    ) {
      var pathname = window.location.pathname;
      var empId = pathname.substring(pathname.lastIndexOf("/") + 1);
      props.unfollowEmployee(empId, loogedUserId);
      props.getEmployeeById(empId);
    } else props.onSubmit(followForm);
  }

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
            margin: "4px",
            transition: "background-color 0.1s ease-in-out",
            "&.Mui-selected": {
              // backgroundColor: theme.palette.secondary.main,
              // transition: "background-color 1s ease-in-out",
              // color: theme.palette.font.main,
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

  useEffect(() => {
    var loggedId = localStorage.getItem("loggedInUserId");
    var loggedUserName = localStorage.getItem("loggedInUserName");
    setLoogedUserName(loggedUserName);
    setLoggedUserId(loggedId);
    var pathname = window.location.pathname;
    var empId = pathname.substring(pathname.lastIndexOf("/") + 1);
    if (empId) {
      props.getEmployeeById(empId);
      props.getAllFollowers(empId);
      props.getAllFollowing(empId);
      props.getIncentivePoints(empId);
    }
  }, []);
  useEffect(() => {
    var pathname = window.location.pathname;
    var empId = pathname.substring(pathname.lastIndexOf("/") + 1);
    if (empId) {
      props.getEmployeeById(empId);
      props.getAllFollowers(empId);
      props.getAllFollowing(empId);
      props.getIncentivePoints(empId);
    }
  }, [props.getEmployeeById]);
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
            // backgroundColor: theme.palette.primary.main,
            // border: `1px solid ${theme.palette.font.dark}`,
          }}
        >
          {/* container for all grid items with spacing between them 3 and vertically centered */}
          {
            <Box>
              <Box
                xs={12}
                md={6}
                xl={4}
                sx={{ ml: "auto", textAlign: "center" }}
                id="name"
              >
                {/* Centered grid item */}
                <MyBox></MyBox>
              </Box>
            </Box>
          }
          {
            <Grid
              container
              spacing={3}
              // alignItems="center"
              // justifyContent="center"
            >
              <Grid item>
                <Avatar
                  alt="Profile Pic"
                  // src={props.empDetails.profileImgUrl}
                  sx={{ width: 70, height: 70, bgcolor: "#7BAA23" }}
                >
                  {firstChar}
                </Avatar>
              </Grid>

              <Grid item>
                <MyBox
                  // color={theme.palette.font.main}
                  // fontSize={theme.typography.h4.fontSize}
                  fontSize="25px"
                  fontWeight="600"
                  // fontFamily={theme.typography.h4.fontFamily}
                  // fontWeight={theme.typography.h4.fontWeight}
                  textTransform={"uppercase"}
                >
                  {props.empDetails.name}
                </MyBox>
                <MyBox
                  // color={theme.palette.font.light}
                  color="#3B3B3B"
                  fontSize="20px"
                  fontWeight="450"

                  // fontFamily={theme.typography.h5.fontFamily}
                  // fontWeight={theme.typography.h5.fontWeight}
                >
                  {props.empDetails.designation}
                </MyBox>
              </Grid>

              <Grid item>
                <Typography
                  onClick={handleFollowersClick}
                  onMouseEnter={() => setIsFollowingHovered(true)}
                  onMouseLeave={() => setIsFollowingHovered(false)}
                  style={{
                    fontSize: "25px",
                    textDecoration: "none",
                    color: isFollowingHovered ? "#000" : "#7BAA23",
                    marginLeft: "300px",
                    marginTop: "-5px",
                  }}
                >
                  Following
                </Typography>
                <Dialog open={openFollower} onClose={handleFollowersClose}>
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
              <Grid item>
                <a
                  onClick={handleFollowingClick}
                  onMouseEnter={() => setIsFollowerHovered(true)}
                  onMouseLeave={() => setIsFollowerHovered(false)}
                  style={{
                    fontSize: "25px",
                    textDecoration: "none",
                    color: isFollowerHovered ? "#000" : "#7BAA23",
                    marginTop: "50px",
                  }}
                >
                  Followers
                </a>
                <Dialog open={openFollowing} onClose={handleFollowingClose}>
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
                              src={following.followedByName?.charAt(0)}
                              alt={
                                following.followedByName
                                  ? following.followedByName
                                  : ""
                              }
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
              <Grid item sx={{ marginLeft: "450px" }}>
                <Button
                  variant="contained"
                  onClick={() => handleFollow()}
                  style={{ backgroundColor: "#7BAA23" }}
                >
                  {props.allFollowingList?.some(
                    (item) => item.followedById == loogedUserId
                  ) ? (
                    <b>Unfollow</b>
                  ) : (
                    <b>Follow</b>
                  )}
                </Button>
              </Grid>
              <Grid item></Grid>
            </Grid>
          }

          <Box mt={2} mb={3}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6} xl={4}>
                <MyBio />
              </Grid>

              <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
                {showDivider && (
                  <Divider
                    orientation="vertical"
                    // color={theme.palette.alt.main}
                  />
                )}

                <ProfileInfoCard />

                {/* <AboutWebsite /> */}
              </Grid>

              <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
                {showDivider && (
                  <Divider
                    orientation="vertical"
                    // color={theme.palette.alt.main}
                  />
                )}

                {/* <AdditionalFeatures /> */}
                {<OtherFutureGoals />}
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
    onSubmit: (data) => dispatch(createFollowConnection(data)),
    getIncentivePoints: (id) => dispatch(getIncentivePoints(id)),
    unfollowEmployee: (eId, logId) => dispatch(unfollowEmployee(eId, logId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OtherViewProfile);
