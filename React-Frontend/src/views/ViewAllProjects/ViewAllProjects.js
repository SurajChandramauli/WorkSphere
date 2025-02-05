import React, { useEffect, useState, useRef } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MyBox from "../../components/MyBox";
import {
  Typography,
  Divider,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import { connect } from "react-redux";
import { Template } from "../template";
import { useNavigate } from "react-router-dom";
import TextInputWithLabel from "../../components/TextInputWithLabel.js";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import {
  getAllProjects,
  deleteProjectById,
  applyOnProject,
  getAllProjectsAppliedByOwn,
  getSingleProjectByPId,
} from "../../redux/actions/index.js";

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

const ViewAllProjects = (props) => {


  useEffect(() => {
    var loggedId = localStorage.getItem("loggedInUserId");
    var loggedUser = localStorage.getItem("loggedInUserName");

    setLoggedInUserId(parseInt(loggedId));
    setLoggedInUserName(loggedUser);
    props.getAllProjects();
  }, []);

  const [loggedInUserName, setLoggedInUserName] = useState("");
  const [loggedInUserId, setLoggedInUserId] = useState(0);
  const [searchFilter, setSearchFilter] = useState("");
  const [stillOpenFilter, setStillOpenFilter] = useState("All");

  const history = useNavigate();
  function handleViewOnProject() {
    //props.getSinglePost(postid);
    history("/yourCretedProjects/" + loggedInUserId);
  }

  const handleStillOpenFilter = (event) => {
    setStillOpenFilter(event.target.value);
  };

  useEffect(() => {
    if (props.getAllProjectsData) console.log(props.getAllProjectsData);
  }, []);
  function handleDeleteProjectById(id) {
    props.deleteProjectById(id);
    props.getAllProjects();
  }

  function handleEditByProjectId(id) {
    props.getSingleProjectByPId(id);
    history("/editProject/" + id);
  }
  function handleMyAppliedProjects() {
    props.getAllProjectsAppliedByOwn(loggedInUserId);
    history("/ownAppliedProject/" + loggedInUserId);
  }

  function handleCreateProject() {
    //props.getSinglePost(postid);
    history("/createProject");
  }

  function handleSearchFilter(newValue) {
    setSearchFilter(newValue);
  }

  function handleApplyOnProject(pId, uId) {
    props.applyOnProject(uId, pId);
  }
  return (
    <Template>
      <div
        style={{
          fontSize: 32,
          marginTop: "-40px",
          marginBottom: "60px",
          fontWeight: "bolder",
          marginLeft:"150px"
        }}
      >
        Project Placer
        <MyBox
          width="15px"
          height="15px"
          borderRadius="100%"
          sx={{
            backgroundColor: "#9ACD66",
            marginTop: "-22px",
            marginLeft: "210px",
          }}
        />
      </div>
      <Grid container style={{}}>
        <Grid
          item
          // classes={{ root: classes.gridContainer }}
          style={{ marginLeft: 150 }}
        >
          <Button
            variant="contained"
            sx={{ marginBottom: "0rem", bgcolor: "#7BAA23" }}
            onClick={handleMyAppliedProjects}
          >
            My Applications
          </Button>
        </Grid>
        {localStorage.getItem("loggedInUserBand") !== "B8" &&
          localStorage.getItem("loggedInUserBand") !== "B7" &&
          localStorage.getItem("loggedInUserBand") !== "b7" &&
          localStorage.getItem("loggedInUserBand") !== "b8" && (
            <Grid
              item
              // classes={{ root: classes.gridContainer }}
              style={{ marginLeft: 30 }}
            >
              <Button
                variant="contained"
                sx={{ marginBottom: "0rem", bgcolor: "#7BAA23" }}
                onClick={handleViewOnProject}
              >
                My Projects
              </Button>
            </Grid>
          )}
        {localStorage.getItem("loggedInUserBand") !== "B8" &&
          localStorage.getItem("loggedInUserBand") !== "B7" &&
          localStorage.getItem("loggedInUserBand") !== "b7" &&
          localStorage.getItem("loggedInUserBand") !== "b8" && (
            <Grid
              item
              // classes={{ root: classes.gridContainer }}
              style={{ marginLeft: 30 }}
            >
              <Button
                variant="contained"
                sx={{ marginBottom: "0rem", bgcolor: "#7BAA23" }}
                onClick={handleCreateProject}
              >
                Create Project
              </Button>
            </Grid>
          )}
        {localStorage.getItem("loggedInUserBand") !== "B8" &&
        localStorage.getItem("loggedInUserBand") !== "B7" &&
        localStorage.getItem("loggedInUserBand") !== "b7" &&
        localStorage.getItem("loggedInUserBand") !== "b8" ? (
          <Grid
            item
            // classes={{ root: classes.gridContainer }}
            // style={{ marginTop: 7 }}
            style={{ marginLeft: 330, marginTop: -20 }}
          >
            <TextInputWithLabel
              // heading={"Seach Projects"}
              // label="Outlined"
              placeholder="Search ..."
              height="45px"
              width="300"
              // backgroundColor="#000"
              // color="#fff"
              border="2px solid #7BAA23"
              value={searchFilter}
              twoline="true"
              onChange={handleSearchFilter}
            />
            <InputLabel
              style={{
              
                  width: "130px",
                  marginTop: "-110px",
                  marginBottom: "26px",
                  marginLeft: "-130px",
                  color: "Black",
              
              }}
            >
              Status
            </InputLabel>
            <Select
              value={stillOpenFilter}
              onChange={handleStillOpenFilter}
              style={{
                width: "100px",
                // marginTop: "-60px",
                marginLeft: "-130px",
                // backgroundColor :"#fff"
                height:"45px"

              }}
            >
              {/* <br/> */}
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="True">Active</MenuItem>
              <MenuItem value="False">Inactive</MenuItem>
            </Select>
          </Grid>
        ) : (
          <Grid
            item
            // classes={{ root: classes.gridContainer }}
            // style={{ marginTop: 7 }}
            style={{ marginLeft: 680, marginTop: -20 }}
          >
            <TextInputWithLabel
              // heading={"Seach Projects"}
              // label="Outlined"
              placeholder="Search ..."
              height="45px"
              width="300"
              // backgroundColor="#000"
              // color="#fff"
              border="2px solid #7BAA23"
              value={searchFilter}
              twoline="true"
              onChange={handleSearchFilter}
            />
            <InputLabel
              style={{
                width: "130px",
                marginTop: "-110px",
                marginBottom: "26px",
                marginLeft: "-130px",
                color: "Black",
              }}
            >
              Status
            </InputLabel>
            <Select
              value={stillOpenFilter}
              onChange={handleStillOpenFilter}
              style={{
                width: "100px",
                // marginTop: "-160px",
                marginLeft: "-130px",
                height:"45px"
                // backgroundColor :"#fff"
              }}
            >
              {/* <br/> */}
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="True">Active</MenuItem>
              <MenuItem value="False">Inactive</MenuItem>
            </Select>
          </Grid>
        )}

        <Grid
          item
          // classes={{ root: classes.gridContainer }}
          // style={{ marginTop: 7 }}
          style={{ marginLeft: 5, marginTop: 2 }}
        >
          <SearchIcon style={{ fontSize: "40px", color: "#7BAA23" }} />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={3}
        sx={{ paddingLeft: "150px", marginTop: "20px" }}
      >
        {props.getAllProjectsData.length > 0
          ? props.getAllProjectsData.map((project) => (
              <Grid item xs={10} sm={10} key={project.projectId}>
                {(stillOpenFilter == "All" ||
                  project.stillOpen == stillOpenFilter) && (
                  <div>
                    {(project.createdByName?.includes(searchFilter) ||
                      project.projectName?.includes(searchFilter) ||
                      project.projectDescription?.includes(searchFilter) ||
                      project.skillSet?.includes(searchFilter) ||
                      project.bandLevelReq?.includes(searchFilter) ||
                      project.designationReq?.includes(searchFilter) ||
                      project.stillOpen?.includes(searchFilter)) && (
                      <div>
                        <Card
                          sx={{
                            maxWidth: 1400,
                            bgcolor: "#fff",
                            // bgcolor:"#F5F5F5",
                            color: "#000",
                            border: "1px solid #7BAA23",
                            borderRadius: "20px",
                          }}
                        >
                          <CardHeader
                            sx={{
                              marginLeft: "15px",
                              marginTop: "15px",
                              marginRight: "15px",
                            }}
                            avatar={
                              <Avatar
                                sx={{
                                  bgcolor: "#7BAA23",
                                  width: "70px",
                                  height: "70px",
                                }}
                                aria-label="recipe"
                              >
                                <b>{project.createdByName.charAt(0)}</b>
                              </Avatar>
                            }
                            action={
                              <>
                                {project.stillOpen === "True" ? (
                                  <Avatar
                                    variant="rounded"
                                    sx={{
                                      bgcolor: "#7BAA23",
                                      width: "110px",
                                      height: "50px",
                                    }}
                                    style={{ fontSize: "18px" }}
                                  >
                                    ACTIVE
                                  </Avatar>
                                ) : (
                                  <Avatar
                                    variant="rounded"
                                    sx={{
                                      bgcolor: "#D71F1F",
                                      width: "110px",
                                      height: "50px",
                                    }}
                                    style={{}}
                                  >
                                    INACTIVE
                                  </Avatar>
                                )}

                                {loggedInUserId === project.createdById && (
                                  <IconButton
                                    aria-label="delete"
                                    style={{
                                      color: "#D71F1F",
                                      marginLeft: "-95px",
                                      marginTop: "-85px",
                                    }}
                                    onClick={() => {
                                      handleDeleteProjectById(
                                        project.projectId
                                      );
                                    }}
                                  >
                                    <DeleteIcon />
                                  </IconButton>
                                )}
                                {loggedInUserId === project.createdById && (
                                  <IconButton
                                    aria-label="edit"
                                    style={{
                                      color: "grey",
                                      marginTop: "-85px",
                                    }}
                                    onClick={() => {
                                      handleEditByProjectId(project.projectId);
                                    }}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                )}
                              </>
                            }
                            title={
                              <Typography
                                style={{
                                  fontSize: "1.2rem",
                                  fontWeight: 550,
                                  color: "#3B3B3B",
                                }}
                              >
                                {project.createdByName}
                              </Typography>
                            }
                            subheader={
                              <Typography
                                style={{
                                  fontSize: "1.0rem",
                                  // fontWeight: 530,
                                  color: "#3B3B3B",
                                }}
                              >
                                {new Date(
                                  project.createdAt
                                ).toLocaleDateString() +
                                  " " +
                                  new Date(
                                    project.createdAt
                                  ).toLocaleTimeString()}
                              </Typography>
                            }
                          />
                          <Divider
                            variant="middle"
                            sx={{ backgroundColor: "#7BAA23" }}
                          />

                          <CardContent style={{ marginLeft: "20px" }}>
                            <Typography
                              color="#000"
                              fontSize={25}
                              fontWeight={700}
                              textTransform={"uppercase"}
                            >
                              {project.projectName}
                            </Typography>
                            <br />
                            <Typography
                              color="#000"
                              fontSize={22}
                              textTransform={"uppercase"}
                            >
                              Details :
                            </Typography>
                            <Typography
                              color="#3B3B3B"
                              fontSize={20}
                              marginLeft={14}
                              marginTop={-4}
                            >
                              {project.projectDescription}
                            </Typography>
                          </CardContent>
                          <Collapse
                            in={true}
                            timeout="auto"
                            unmountOnExit
                            style={{ marginLeft: "20px" }}
                          >
                            <CardContent>
                              <Typography color="#000" fontSize={20}>
                                DESIGNATION :
                              </Typography>
                              <Typography
                                color="#3B3B3B"
                                fontSize={20}
                                marginTop={-3.8}
                                marginLeft={20}
                              >
                                {project.designationReq}
                              </Typography>
                              <br />
                              <Typography color="#000" fontSize={20}>
                                BAND LEVEL :
                              </Typography>
                              <Typography
                                color="#3B3B3B"
                                fontSize={20}
                                marginTop={-3.8}
                                marginLeft={18}
                              >
                                {project.bandLevelReq}
                              </Typography>
                              <br />
                              <Typography color="#000" fontSize={20}>
                                SKILLS :
                              </Typography>
                              <Typography
                                color="#3B3B3B"
                                fontSize={20}
                                marginTop={-3.8}
                                marginLeft={12}
                              >
                                {project.skillSet}
                              </Typography>
                              <br />
                              <Typography
                                color="#000"
                                fontSize={20}
                                marginTop={0}
                                marginLeft={0}
                              >
                                Start Date :
                              </Typography>
                              <Typography
                                color="#3B3B3B"
                                fontSize={20}
                                marginTop={-3.8}
                                marginLeft={14}
                              >
                                {project.startDateOfProject}
                              </Typography>
                              <br />

                              {/* <div sx={{ marginBottom: "10px" }}> */}
                              {(loggedInUserId !== project.createdById && project.stillOpen !== "False") && (
                                <Button
                                  variant="contained"
                                  sx={{
                                    fontSize: "20px",
                                    marginBottom: "1rem",
                                    marginLeft: "970px",
                                    marginTop: "-100px",
                                  }}
                                  onClick={() => {
                                    handleApplyOnProject(
                                      project.projectId,
                                      loggedInUserId
                                    );
                                  }}
                                >
                                  Apply
                                </Button>
                              )}
                              {/* </div> */}
                            </CardContent>
                          </Collapse>
                        </Card>
                      </div>
                    )}
                  </div>
                )}
              </Grid>
            ))
          : "There is nothing to show"}
      </Grid>
    </Template>
  );
};
const mapStateToProps = (state) => {
  return {
    getAllProjectsData: state.testMockApiDataSetup.getAllProjectsData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllProjects: () => dispatch(getAllProjects()),
    deleteProjectById: (id) => dispatch(deleteProjectById(id)),
    applyOnProject: (uId, pId) => dispatch(applyOnProject(uId, pId)),
    getAllProjectsAppliedByOwn: (id) =>
      dispatch(getAllProjectsAppliedByOwn(id)),
    getSingleProjectByPId: (id) => dispatch(getSingleProjectByPId(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewAllProjects);
