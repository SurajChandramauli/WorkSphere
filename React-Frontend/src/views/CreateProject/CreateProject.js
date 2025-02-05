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
  createProject,
  getAllProjects,
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
    // var pathname = window.location.pathname;
    // var Id = pathname.substring(pathname.lastIndexOf("/") + 1);
    // if (Id) props.getEmployeeById(Id);
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
  function handleDesignationReq(newValue){
    setDesignationReq(newValue)
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
    createdByName :  localStorage.getItem("loggedInUserName")
  };
  const handleSubmit = () => {
    // var pathname = window.location.pathname;
    // var Id = pathname.substring(pathname.lastIndexOf("/") + 1);
    props.onSubmit(formData);
    props.getAllProjects();
     history("/viewAllProjects");
  };
  useEffect(() => {
    // var pathname = window.location.pathname;
    // var id = pathname.substring(pathname.lastIndexOf("/") + 1);
    // props.getEmployeeById(id);
  }, []);
 
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
        Create Project
          </Typography>
        </Breadcrumbs>
  
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
                      // prevalue={props.empDetails.name}
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
                      // prevalue={props.empDetails.dateOfBirth}
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
                      // prevalue={props.empDetails.officeLocation}
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
                      // prevalue={props.empDetails.dateOfJoining}
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
                      // prevalue={props.empDetails.dateOfJoining}
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
                      // prevalue={props.empDetails.designation}
                      onChange={handleStartDateOfProject}
                    />
                  </Grid>
                  
                  <Grid
                    item
                    md={6}
                    xs={12}
                    classes={{ root: classes.gridContainer }}
         
                  >
                    <TextInputWithLabel
                      heading={"Project Description"}
                      value={projectDescription}
       
                      twoline="true"
                      // prevalue={props.empDetails.department}
                      onChange={handleProjectDescription}
                    />
                  </Grid>
                 
                </Grid>
              </div>
            </form>
          </Card>
        <div className={classes.submitContainer}>
          <Button color="primary" variant="contained" onClick={handleSubmit} 
          disabled={!(projectName && projectName.length>0) || !(skillSet && skillSet.length>0) || !(bandLevelReq && bandLevelReq.length>0) || !(startDateOfProject && startDateOfProject.length>0) || !(designationReq && designationReq.length>0)}
          >
            {
        
              "Create"
            }
          </Button>
        </div>
      </div>
    </Template>
  );
};
const mapStateToProps = (state) => {
  return {
   // empDetails: state.testMockApiDataSetup.singleEmployeeData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
     onSubmit: (data) => dispatch(createProject(data)),
     getAllProjects: () => dispatch(getAllProjects()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
