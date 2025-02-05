import React, { useMemo, useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  Grid,
  Breadcrumbs,
  Typography,
  Button,
  Select,
  FormLabel,
  InputLabel,
  FormControl,
  MenuItem,
  OutlinedInput,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import TextInputWithLabel from "../../components/TextInputWithLabel.js";
// import { addEmployeeData } from '../../redux/actions';
import countryList from "react-select-country-list";
import {
  onSubmitEditProject,
  getSingleProjectByPId,
} from "../../redux/actions/index.js";
// import BeatLoader from "react-spinners/BeatLoader";
import { Template } from "../template";
import clsx from "clsx";
import { ElectricScooterSharp } from "@mui/icons-material";
const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.secondary.main,
    marginTop: 10,
    borderRadius: 10,
    padding: "27px 29px 27px 29px",
  },
  container: {
    padding: "30px 10px 0px 10px",
  },
  link: {
    // color: theme.palette.text.primary,
    color: "black",
    opacity: 0.3,
    textDecoration: "none",
    border: 0,
    fontSize: 16,
    paddingRight: 10,
  },
  submitContainer: {
    marginRight: -25,
    display: "flex",
    justifyContent: "center",
    paddingTop: 35,
    paddingBottom: 28,
  },
  select: {
    width: "100%",
    marginTop: 10,
  },
  selectedItem: {
    color: "black",
    //height: 40,
    border: "1px solid #E0E0E0",
    width: "100%",
    // marginTop: 9
  },
  inputTwoLine: {
    marginTop: 10,
    width: "100%",
    paddingLeft: 10,
  },
  gridContainer: {
    //  padding: '0px 45px 0px 45px !important'
  },
}));

const CreateProject = (props) => {
  const classes = useStyles();
  const history = useNavigate();
  const [projectName, setProjectName] = React.useState("");
  const [projectDescription, setProjectDescription] = React.useState("");
  const [skillSet, setSkillSet] = React.useState("");
  const [domainSpecific, setDomainSpecific] = React.useState("");
  const [bandLevelReq, setBandLevelReq] = React.useState("");
  const [designationReq, setDesignationReq] = React.useState("");
  const [startDateOfProject, setStartDateOfProject] = React.useState("");
  const [stillOpen, setStillOpen] = React.useState("True");

  useEffect(() => {
    var pathname = window.location.pathname;
    var Id = pathname.substring(pathname.lastIndexOf("/") + 1);
    if (Id) props.getSingleProjectByPId(Id);
  }, []);

  function handleProjectName(newValue) {
    setProjectName(newValue);
  }
  function handleProjectDescription(newValue) {
    setProjectDescription(newValue);
  }
  function handleSkillSet(newValue) {
    setSkillSet(newValue);
  }
  function handleDomainSpecific(event) {
    setDomainSpecific(event);
  }
  function handleBandLevelReq(newValue) {
    setBandLevelReq(newValue);
  }
  function handleStartDateOfProject(newValue) {
    setStartDateOfProject(newValue);
  }
  function handleStillOpen(newValue) {
    setStillOpen(newValue.target.value);
  }
  function handleDesignationReq(newValue) {
    setDesignationReq(newValue);
  }

  var formData = {
    projectName: projectName,
    projectDescription: projectDescription,
    skillSet: skillSet,
    domainSpecific: domainSpecific,
    bandLevelReq: bandLevelReq,
    designationReq: designationReq,
    startDateOfProject: startDateOfProject,
    stillOpen: stillOpen,
    createdById: localStorage.getItem("loggedInUserId"),
    createdByName: localStorage.getItem("loggedInUserName"),
  };
  const handleSubmit = () => {
    var pathname = window.location.pathname;
    var Id = pathname.substring(pathname.lastIndexOf("/") + 1);
    props.onSubmitEditProject(Id, formData);
    history("/viewAllProjects");
  };
  useEffect(() => {
    var pathname = window.location.pathname;
    var Id = pathname.substring(pathname.lastIndexOf("/") + 1);
    if (Id) props.getSingleProjectByPId(Id);
  }, []);
  useEffect(() => {
    if (props.singleProjectDetail) {
      setProjectName(props.singleProjectDetail.projectName);
      setProjectDescription(props.singleProjectDetail.projectDescription);
      setSkillSet(props.singleProjectDetail.skillSet);
      setDomainSpecific(props.singleProjectDetail.domainSpecific);
      setBandLevelReq(props.singleProjectDetail.bandLevelReq);
      setDesignationReq(props.singleProjectDetail.designationReq);
      setStartDateOfProject(props.singleProjectDetail.startDateOfProject);
      setStillOpen(props.singleProjectDetail.stillOpen);
    }
  }, [props.singleProjectDetail]);

  return (
    <Template>
      <div className={classes.root}>
        <Breadcrumbs aria-label="breadcrumb">
          {/* <Link variant='h2' classes={{
                    root: classes.link
                }}
                    to='/'
                >
            
                </Link> */}
          <Typography color="textPrimary" variant="h4">
            Edit Project
          </Typography>
        </Breadcrumbs>
        {props.getSingleProjectByPId && (
          <Card style={{ marginTop: 15 }}>
            <form autoComplete="off" noValidate>
              <div className={classes.container}>
                <Grid
                  container
                  style={{ marginBottom: 16, padding: "0px 25px 0px 25px" }}
                  spacing={2}
                >
                  <Grid
                    item
                    md={3}
                    xs={12}
                    classes={{ root: classes.gridContainer }}
                  >
                    <TextInputWithLabel
                      value={projectName}
                      heading={"Project Name"}
                      twoline="true"
                      prevalue={props.singleProjectDetail.projectName}
                      onChange={handleProjectName}
                    />
                  </Grid>
                  <Grid
                    item
                    md={3}
                    xs={12}
                    classes={{ root: classes.gridContainer }}
                    // style={{ marginTop: 7 }}
                  >
                    <TextInputWithLabel
                      heading={"Skill Set Required"}
                      value={skillSet}
                      twoline="true"
                      prevalue={props.singleProjectDetail.skillSet}
                      onChange={handleSkillSet}
                    />
                  </Grid>

                  <Grid
                    item
                    md={3}
                    xs={12}
                    classes={{ root: classes.gridContainer }}
                    // style={{ marginTop: 7 }}
                  >
                    <TextInputWithLabel
                      heading={"Domain Specific Expertise"}
                      value={domainSpecific}
                      twoline="true"
                      prevalue={props.singleProjectDetail.domainSpecific}
                      onChange={handleDomainSpecific}
                    />
                  </Grid>

                  <Grid
                    item
                    md={3}
                    xs={12}
                    classes={{ root: classes.gridContainer }}
                  >
                    <TextInputWithLabel
                      heading={"Band Level Required"}
                      value={bandLevelReq}
                      twoline="true"
                      prevalue={props.singleProjectDetail.bandLevelReq}
                      onChange={handleBandLevelReq}
                    />
                  </Grid>
                  <Grid
                    item
                    md={3}
                    xs={12}
                    classes={{ root: classes.gridContainer }}
                  >
                    <TextInputWithLabel
                      heading={"Designation Required"}
                      value={designationReq}
                      twoline="true"
                      prevalue={props.singleProjectDetail.designationReq}
                      onChange={handleDesignationReq}
                    />
                  </Grid>

                  <Grid
                    item
                    md={3}
                    xs={12}
                    classes={{ root: classes.gridContainer }}
                  >
                    <TextInputWithLabel
                      heading={"Project Start Date"}
                      value={startDateOfProject}
                      twoline="true"
                      prevalue={props.singleProjectDetail.startDateOfProject}
                      onChange={handleStartDateOfProject}
                    />
                  </Grid>

                  <Grid
                    item
                    md={8}
                    xs={12}
                    classes={{ root: classes.gridContainer }}
                  >
                    <TextInputWithLabel
                      heading={"Project Description"}
                      value={projectDescription}
                      twoline="true"
                      prevalue={props.singleProjectDetail.projectDescription}
                      onChange={handleProjectDescription}
                    />
                  </Grid>

                  <Grid
                    item
                    md={3}
                    xs={9}
                    classes={{ root: classes.gridContainer }}
                  >
                    <FormControl fullWidth>
                      <FormLabel> Project Active</FormLabel>
                      <Select
                        value={stillOpen}
                        prevalue={
                          props.singleProjectDetail.stillOpen ? "True" : "False"
                        }
                        onChange={handleStillOpen}
                      >
                        <MenuItem value={"True"}>True</MenuItem>
                        <MenuItem value={"False"}>False</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </div>
            </form>
          </Card>
        )}
        <div className={classes.submitContainer}>
          <Button color="primary" variant="contained" onClick={handleSubmit}>
            {
              // props.loadingAPI ?
              //     <BeatLoader color={'rgb(54, 215, 183)'} loading={props.loadingAPI} size={6} />
              //     :
              "Modify"
            }
          </Button>
        </div>
      </div>
    </Template>
  );
};
const mapStateToProps = (state) => {
  return {
    singleProjectDetail: state.testMockApiDataSetup.singleProjectDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitEditProject: (id, data) => dispatch(onSubmitEditProject(id, data)),
    getSingleProjectByPId: (id) => dispatch(getSingleProjectByPId(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
