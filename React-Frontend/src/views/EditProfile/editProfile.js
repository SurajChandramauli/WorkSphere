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
  getEmployeeById,
  updateUserProfile,
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

const EditProfile = (props) => {
  const classes = useStyles();
  const history = useNavigate();
  const [name, setName] = React.useState("");
  const [band, setBand] = React.useState("");
  const [department, setDepartment] = React.useState("");
  const [dateOfBirth, setDateOfBirth] = React.useState("");
  const [officeLocation, setOfficeLocation] = React.useState("");
  const [dateOfJoining, setDateOfJoining] = React.useState("");
  const [reportingManager, setReportingManager] = React.useState("");
  const [designation, setDesignation] = React.useState("");
  const [primarySkill, setPrimarySkill] = React.useState("");
  const [allSkills, setAllSkills] = React.useState("");
  const [domainExpertise, setDomainExpertise] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [totalExp, setTotalExp] = React.useState("");
  const [personalEmail, setpersonalEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [hobbies, setHobbies] = React.useState("");
  const [linkedInUrl, setLinkedInUrl] = React.useState("");
  const [aboutMe, setAboutMe] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [onProject, setOnProject] = React.useState("");
  const countriesList = useMemo(() => countryList().getLabels(), []);
  useEffect(() => {
    var pathname = window.location.pathname;
    var Id = pathname.substring(pathname.lastIndexOf("/") + 1);
    if (Id) props.getEmployeeById(Id);
  }, []);

  function handleName(newValue) {
    setName(newValue);
  }
  function handleband(newValue) {
    setBand(newValue);
  }
  function handleDepartment(newValue) {
    setDepartment(newValue);
  }
  function handledateOfBirth(event) {
    setDateOfBirth(event);
  }
  function handleofficeLocation(newValue) {
    setOfficeLocation(newValue);
  }
  function handledateOfJoining(newValue) {
    setDateOfJoining(newValue);
  }
  function handlereportingManager(newValue) {
    setReportingManager(newValue);
  }
  function handledesignation(e) {
    setDesignation(e);
  }
  function handlePrimarySkill(newValue) {
    setPrimarySkill(newValue);
  }
  function handleAllSkill(newValue) {
    setAllSkills(newValue);
  }
  function handleDomainExpertise(newValue) {
    setDomainExpertise(newValue);
  }
  function handleGender(newValue) {
    setGender(newValue);
  }
  function handleTotalExp(newValue) {
    setTotalExp(newValue);
  }
  function handlePersonalEmail(event) {
    setpersonalEmail(event);
  }
  function handlePhone(event) {
    setPhoneNumber(event);
  }
  function handleHobies(event) {
    setHobbies(event);
  }
  function handleLinkedIn(event) {
    setLinkedInUrl(event);
  }
  function handleAboutMe(event) {
    setAboutMe(event);
  }
  function handleAddress(event) {
    setAddress(event);
  }
  function handleOnProject(event) {
    setOnProject(event.target.value);
  }
  var formData = {
    name: name,
    deloitteEmpId: props.empDetails.deloitteEmpId,
    deloitteEmail: props.empDetails.deloitteEmail,
    dateOfJoining: dateOfJoining,
    dateOfBirth: dateOfBirth,
    department: department,
    band: band,
    designation: designation,
    reportingManager: reportingManager,
    officeLocation: officeLocation,
    address: address,
    primarySkill: primarySkill,
    allSkills: allSkills,
    onProject: onProject,
    profileImgUrl:
      "https://solartribune.com/wp-content/uploads/2018/08/NuScale-Power-Module.jpg",
    linkedInUrl: linkedInUrl,
    onProject: onProject == "Yes" ? true : false,
    personalEmail: personalEmail,
    phoneNumber: phoneNumber,
    totalExp: totalExp,
    aboutMe: aboutMe,
    hobbies: hobbies,
    password: props.empDetails.password,
    gender: gender,
    domainExpertise: domainExpertise,
  };
  const handleSubmit = () => {
    var pathname = window.location.pathname;
    var Id = pathname.substring(pathname.lastIndexOf("/") + 1);
    props.onSubmit(Id, formData);
    history("/viewProfile");
  };
  useEffect(() => {
    var pathname = window.location.pathname;
    var id = pathname.substring(pathname.lastIndexOf("/") + 1);
    props.getEmployeeById(id);
  }, []);
  useEffect(() => {
    if (props.empDetails) {
      setName(props.empDetails.name);

      setBand(props.empDetails.band);

      setDepartment(props.empDetails.department);

      setDateOfBirth(props.empDetails.dateOfBirth);

      setOfficeLocation(props.empDetails.officeLocation);

      setDateOfJoining(props.empDetails.dateOfJoining);

      setReportingManager(props.empDetails.reportingManager);

      setDesignation(props.empDetails.designation);

      setPrimarySkill(props.empDetails.primarySkill);

      setAllSkills(props.empDetails.allSkills);

      setDomainExpertise(props.empDetails.domainExpertise);

      setGender(props.empDetails.gender);

      setTotalExp(props.empDetails.totalExp);

      setpersonalEmail(props.empDetails.personalEmail);

      setPhoneNumber(props.empDetails.phoneNumber);

      setHobbies(props.empDetails.hobbies);

      setLinkedInUrl(props.empDetails.linkedInUrl);

      setAboutMe(props.empDetails.aboutMe);

      setAddress(props.empDetails.address);
      var temp = props.empDetails.onProject;

      setOnProject(temp == true ? "Yes" : "No");
    }
  }, [props.empDetails]);
  return (
    <Template>
      <div className={classes.root} style={{ marginTop: "-70px" }}>
        <Breadcrumbs aria-label="breadcrumb">
          {/* <Link variant='h2' classes={{
                    root: classes.link
                }}
                    to='/employee'
                >
                View Profile
                </Link> */}
          <Typography color="textPrimary" variant="h4">
            Modify Profile
          </Typography>
        </Breadcrumbs>
        {props.empDetails && (
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
                      value={name}
                      heading={"Employee Name"}
                      twoline="true"
                      prevalue={props.empDetails.name}
                      onChange={handleName}
                    />
                  </Grid>
                  <Grid
                    item
                    md={3}
                    xs={12}
                    classes={{ root: classes.gridContainer }}
                  >
                    <TextInputWithLabel
                      heading={"Department"}
                      value={name}
                      twoline="true"
                      prevalue={props.empDetails.department}
                      onChange={handleDepartment}
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
                      heading={"Date of Birth"}
                      value={dateOfBirth}
                      twoline="true"
                      prevalue={props.empDetails.dateOfBirth}
                      onChange={handledateOfBirth}
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
                      heading={"Office Location"}
                      value={officeLocation}
                      twoline="true"
                      prevalue={props.empDetails.officeLocation}
                      onChange={handleofficeLocation}
                    />
                  </Grid>

                  <Grid
                    item
                    md={3}
                    xs={12}
                    classes={{ root: classes.gridContainer }}
                  >
                    <TextInputWithLabel
                      heading={"Date of Joining"}
                      value={dateOfJoining}
                      twoline="true"
                      prevalue={props.empDetails.dateOfJoining}
                      onChange={handledateOfJoining}
                    />
                  </Grid>

                  <Grid
                    item
                    md={3}
                    xs={12}
                    classes={{ root: classes.gridContainer }}
                  >
                    <TextInputWithLabel
                      heading={"Designation"}
                      value={designation}
                      twoline="true"
                      prevalue={props.empDetails.designation}
                      onChange={handledesignation}
                    />
                  </Grid>
                  <Grid
                    item
                    md={3}
                    xs={12}
                    classes={{ root: classes.gridContainer }}
                  >
                    <TextInputWithLabel
                      heading={"Band"}
                      value={band}
                      twoline="true"
                      prevalue={props.empDetails.band}
                      onChange={handleband}
                    />
                  </Grid>
                  <Grid
                    item
                    md={3}
                    xs={12}
                    classes={{ root: classes.gridContainer }}
                  >
                    <TextInputWithLabel
                      heading={"Reporting Manager"}
                      value={reportingManager}
                      twoline="true"
                      prevalue={props.empDetails.reportingManager}
                      onChange={handlereportingManager}
                    />
                  </Grid>
                  <Grid
                    item
                    md={3}
                    xs={12}
                    classes={{ root: classes.gridContainer }}
                  >
                    <TextInputWithLabel
                      heading={"Primary Skill"}
                      value={primarySkill}
                      twoline="true"
                      prevalue={props.empDetails.primarySkill}
                      onChange={handlePrimarySkill}
                    />
                  </Grid>

                  <Grid
                    item
                    md={3}
                    xs={12}
                    classes={{ root: classes.gridContainer }}
                  >
                    <TextInputWithLabel
                      heading={"Your All Other Skill Sets"}
                      value={allSkills}
                      twoline="true"
                      prevalue={props.empDetails.allSkills}
                      onChange={handleAllSkill}
                    />
                  </Grid>
                  <Grid
                    item
                    md={3}
                    xs={12}
                    classes={{ root: classes.gridContainer }}
                  >
                    <TextInputWithLabel
                      heading={"Your Domain Expertise"}
                      value={domainExpertise}
                      twoline="true"
                      prevalue={props.empDetails.domainExpertise}
                      onChange={handleDomainExpertise}
                    />
                  </Grid>
                  <Grid
                    item
                    md={3}
                    xs={12}
                    classes={{ root: classes.gridContainer }}
                  >
                    <TextInputWithLabel
                      heading={"Gender"}
                      value={gender}
                      twoline="true"
                      prevalue={props.empDetails.gender}
                      onChange={handleGender}
                    />
                  </Grid>

                  <Grid
                    item
                    md={3}
                    xs={12}
                    classes={{ root: classes.gridContainer }}
                  >
                    <TextInputWithLabel
                      heading={"Experience"}
                      value={totalExp}
                      twoline="true"
                      prevalue={props.empDetails.totalExp}
                      onChange={handleTotalExp}
                    />
                  </Grid>
                  <Grid
                    item
                    md={3}
                    xs={12}
                    classes={{ root: classes.gridContainer }}
                  >
                    <TextInputWithLabel
                      heading={"Personal Email"}
                      value={personalEmail}
                      twoline="true"
                      prevalue={props.empDetails.personalEmail}
                      onChange={handlePersonalEmail}
                    />
                  </Grid>

                  <Grid
                    item
                    md={3}
                    xs={12}
                    classes={{ root: classes.gridContainer }}
                  >
                    <TextInputWithLabel
                      heading={"Phone Number"}
                      value={phoneNumber}
                      twoline="true"
                      prevalue={props.empDetails.phoneNumber}
                      onChange={handlePhone}
                    />
                  </Grid>
                  <Grid
                    item
                    md={3}
                    xs={12}
                    classes={{ root: classes.gridContainer }}
                  >
                    <TextInputWithLabel
                      heading={"Hobbies"}
                      value={hobbies}
                      twoline="true"
                      prevalue={props.empDetails.hobbies}
                      onChange={handleHobies}
                    />
                  </Grid>
                  <Grid
                    item
                    md={2}
                    xs={12}
                    classes={{ root: classes.gridContainer }}
                  >
                    <TextInputWithLabel
                      heading={"LinkedIn Profile URL"}
                      value={linkedInUrl}
                      twoline="true"
                      prevalue={props.empDetails.linkedInUrl}
                      onChange={handleLinkedIn}
                    />
                  </Grid>

                  <Grid
                    item
                    md={5}
                    xs={12}
                    classes={{ root: classes.gridContainer }}
                  >
                    <TextInputWithLabel
                      heading={"About Me :)"}
                      value={aboutMe}
                      twoline="true"
                      prevalue={props.empDetails.aboutMe}
                      onChange={handleAboutMe}
                    />
                  </Grid>
                  <Grid
                    item
                    md={5}
                    xs={12}
                    classes={{ root: classes.gridContainer }}
                  >
                    <TextInputWithLabel
                      heading={"Your address"}
                      value={address}
                      twoline="true"
                      prevalue={props.empDetails.address}
                      onChange={handleAddress}
                    />
                  </Grid>
                  <Grid
                    item
                    md={3}
                    xs={9}
                    classes={{ root: classes.gridContainer }}
                  >
                    <FormControl fullWidth>
                      <FormLabel>On Project</FormLabel>
                      <Select
                        value={onProject}
                        prevalue={
                          props.empDetails.onProject == true ? "Yes" : "No"
                        }
                        onChange={handleOnProject}
                      >
                        <MenuItem value={"Yes"}>Yes</MenuItem>
                        <MenuItem value={"No"}>No</MenuItem>
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
    empDetails: state.testMockApiDataSetup.singleEmployeeData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (id, data) => dispatch(updateUserProfile(id, data)),
    getEmployeeById: (id) => dispatch(getEmployeeById(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
