import React, { useEffect, useState, useRef } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Divider from "@mui/material/Divider";
import { connect } from "react-redux";
import { Template } from "../template";
import { useNavigate } from "react-router-dom";
import MyBox from "../../components/MyBox";
import {
  getAllOwnCreatedProjects,
  getAllEmployessByProjectId,
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

const ViewAllOwnProjects = (props) => {
  useEffect(() => {
    var loggedId = localStorage.getItem("loggedInUserId");

    props.getAllOwnCreatedProjects(loggedId);
  }, []);

  const history = useNavigate();
  function handleViewAllEmpApplied(projectId) {
    props.getAllEmployessByProjectId(projectId);
    history("/ViewEmployeesApplied/" + projectId);
  }

  return (
    <Template>
      <div
        style={{
          fontSize: 32,
          marginTop: "-40px",
          marginBottom: "60px",
          fontWeight: "bolder",
          marginLeft: "140px",
          fontFamily: "sans-serif",
        }}
      >
        My Created Projects
        <MyBox
          width="15px"
          height="15px"
          borderRadius="100%"
          sx={{
            backgroundColor: "#7BAA23",
            marginTop: "-22px",
            marginLeft: "310px",
          }}
        />
      </div>
      <Grid
        container
        spacing={3}
        sx={{ paddingLeft: "150px", marginTop: "-35px" }}
      >
        {props.allOwnCreatedProjects.length > 0
          ? props.allOwnCreatedProjects.map((project) => (
              <Grid item xs={10} sm={10} key={project.projectId}>
                <Card
                  sx={{
                    maxWidth: 1400,
                    // bgcolor: "#F2F2F2",
                    bgcolor: "#fff",
                    color: "#000",
                    border: "1px solid #7BAA23",
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
                      </>
                    }
                    onClick={() => handleViewAllEmpApplied(project.projectId)}
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
                        {new Date(project.createdAt).toLocaleDateString() +
                          " " +
                          new Date(project.createdAt).toLocaleTimeString()}
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
                      <div sx={{ marginBottom: "10px" }}>
                        <Button
                          variant="contained"
                          //  sx={{ marginBottom: "1rem", marginLeft: "78rem" }}
                          sx={{
                            fontSize: "15px",
                            marginBottom: "1rem",
                            marginLeft: "915px",
                            marginTop: "-100px",
                          }}
                          onClick={() =>
                            handleViewAllEmpApplied(project.projectId)
                          }
                        >
                          View Applicants
                        </Button>
                      </div>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            ))
          : "There is nothing to show"}
      </Grid>
    </Template>
  );
};
const mapStateToProps = (state) => {
  return {
    allOwnCreatedProjects: state.testMockApiDataSetup.allOwnCreatedProjects,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllOwnCreatedProjects: (createdById) =>
      dispatch(getAllOwnCreatedProjects(createdById)),
    getAllEmployessByProjectId: (pId) =>
      dispatch(getAllEmployessByProjectId(pId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewAllOwnProjects);
