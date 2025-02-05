import React, { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

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
} from "@mui/material";

import Confetti from "react-confetti";
// import useWindowSize from 'react-use/lib/useWindowSize'
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { Template } from "../template";
// import {Edit,DeleteForever} from '@material-ui/icons';
import NoCrashIcon from "@mui/icons-material/NoCrash";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
import MaterialTable from "material-table";
import { tableIcons } from "../../components/TableIcons";
import { connect } from "react-redux";
import MyBox from "../../components/MyBox";

import {
  getAllCarPools,
  createNewPool,
  reduceCarPoolSeatbyId,
  deletePoolById,
} from "../../redux/actions/EmployeeAction/AuthAction";
// import LoadingOverlay from 'react-loading-overlay';
import { styled, useTheme } from "@mui/material/styles";
import BeatLoader from "react-spinners/BeatLoader";
import { DeleteForever, MapOutlined } from "@material-ui/icons";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
const useStyles = styled((theme) => ({
  root: {
    // backgroundColor: 'white',
    borderRadius: 10,
    padding: "20px 16px",
  },
  row: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  IconButton: {
    padding: 0,
    [theme.breakpoints.up("md")]: {
      paddingRight: 10,
    },
  },
}));

const CarPooling = (props) => {
  const form = useRef();
  const [open, setOpen] = useState(false);
  const [openEmailForm, setOpenEmailForm] = useState(false);
  const [employeeMasterData, setEmployeeMasterData] = React.useState([]);
  const [dataRows, setDataRows] = React.useState([]);
  const [curentPoolId, setCurentPoolId] = React.useState(0);
  const [curentPoolProviderEmail, setCurentPoolProviderEmail] = React.useState(
    "sun123chandramauli@gmail.com"
  );
  const [seekerAddress, setSeekerAddress] = React.useState("");
  const [seekerUserName, setSeekerUserName] = React.useState("");
  const [seekerEmail, setSeekerEmail] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [deloitteEmail, setDelloiteEmail] = React.useState("");
  const [vacentSeat, setVacentSeat] = React.useState("");
  const [officeLocation, setofficeLocation] = React.useState("");
  const [destinationAddress, setdestinationAddress] = React.useState("");
  const [officeLeaveTime, setofficeLeaveTime] = React.useState("");
  const [logedUserName, setLogedUserName] = React.useState(0);
  const [logedUserEmail, setLogedUserEmail] = React.useState("");
  const [isConfettiVisible, setIsConfettiVisible] = useState(false);
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const handleClosePopUp = () => {
    setIsPopUpVisible(false);
    setIsConfettiVisible(false);
    props.getAllCarPools();
  };
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handleDeloitteEmailChange = (e) => {
    setDelloiteEmail(e.target.value);
  };
  const handleVacentSeat = (e) => {
    setVacentSeat(e.target.value);
  };
  const handleOfficeLocationChange = (e) => {
    setofficeLocation(e.target.value);
  };
  const handlDestinationChange = (e) => {
    setdestinationAddress(e.target.value);
  };
  const handlOfficeLeaveChange = (e) => {
    setofficeLeaveTime(e.target.value);
  };
  const handleSeekerAddress = (e) => {
    setSeekerAddress(e.target.value);
  };
  const handleSeekerUserName = (e) => {
    setSeekerUserName(e.target.value);
  };
  const handleSeekerEmail = (e) => {
    setSeekerEmail(e.target.value);
  };
  useEffect(() => {
    props.getAllCarPools();
    setLogedUserName(localStorage.getItem("loggedInUserName"));
    setLogedUserEmail(localStorage.getItem("loggedInUserEmail"));
  }, []);
  const handleSubmit = () => {
    // Handle form submission
    var loggedDeloitteEmail = localStorage.getItem("loggedInUserEmail");
    const data = {
      userName: localStorage.getItem("loggedInUserName")
        ? localStorage.getItem("loggedInUserName")
        : "Suraj Chandramauli",
      deloitteEmail: loggedDeloitteEmail
        ? loggedDeloitteEmail
        : "surajchandramauli@gmail.com",
      vacantSeats: vacentSeat,
      officeLocation: officeLocation,
      destination: destinationAddress,
      leaveTime: officeLeaveTime,
    };
    props.onSubmit(data);
    props.getAllCarPools();
    handleClose();
    setIsPopUpVisible(true);
    setIsConfettiVisible(true);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleEmailFormOpen = () => {
    setOpenEmailForm(true);
  };

  const handleEmailFormClose = () => {
    setOpenEmailForm(false);
  };
  useEffect(() => {
    // console.log(props.allCarPoolsData);
    if (props.allCarPoolsData && props.allCarPoolsData.length > 0) {
      setEmployeeMasterData(props.allCarPoolsData);
    }
  }, [props.allCarPoolsData, props.onSubmit]);

  useEffect(() => {
    if (employeeMasterData && employeeMasterData.length > 0) {
      var Arr = [];
      {
        employeeMasterData.map((emp) => Arr.push(emp));
      }
      setDataRows(Arr);
    }
    // console.log(dataRows);
  }, [employeeMasterData]);
  // const { className } = props;
  const classes = useStyles();
  // const theme = useTheme();

  const isDesktop = true;
  var templateParams = {
    seeker_name: localStorage.getItem("loggedInUserName")
      ? localStorage.getItem("loggedInUserName")
      : "Suraj Chandramauli",
    provider_email: curentPoolProviderEmail
      ? curentPoolProviderEmail
      : "sun123chandramauli@gmail.com",
    seeker_complete_message: seekerAddress
      ? seekerAddress
      : "Maruti gali 1 sector 22 gurgaon",
    seeker_email: seekerEmail ? seekerEmail : "sun123chandramauli@gmail.com",
  };
  function sendEmail() {
    //localStorage.getItem('loggedInUserName')
    handleEmailFormClose();
    emailjs
      .send(
        "service_08kufou",
        "template_19sae39",
        templateParams,
        "LUkK4j2A2vBwfcij4"
      )
      .then(
        (result) => {
          // console.log(result)
          toast.success(
            "Your Car pool request has been sent with details provided"
          );
          props.reduceCarPoolSeatbyId(curentPoolId);
          props.getAllCarPools();
          setIsPopUpVisible(true);
          setIsConfettiVisible(true);
        },
        (error) => {
          // console.log(error.text);
          toast.error("Sorry cant sent your request");
        }
      );
  }
  function handleBookById(id, deloitteEmail) {
    setCurentPoolId(id);
    setCurentPoolProviderEmail(deloitteEmail);
    handleEmailFormOpen();
    // window.location.reload();
  }
  function handleDeleteById(id) {
    props.deletePoolById(id);
    props.getAllCarPools();
  }

  function handleMapSearch(address) {
    // setCurentPoolId(id)
    window.open(`https://www.google.com/maps/search/?q=${address}`, "_blank");
    // window.location.reload();
  }
  const columns = [
    {
      field: "userName",
      title: "EMPLOYEE NAME",
      editable: "never",
      type: "string",
    },
    {
      field: "deloitteEmail",
      title: "EMAIL",
      type: "string",
      editable: "never",
    },

    {
      field: "officeLocation",
      title: "PICK UP",
      type: "string",
      editable: "never",
    },
    {
      field: "destination",
      title: "DROP OFF",
      type: "string",
      editable: "never",
    },
    {
      field: "vacantSeats",
      title: "AVAILABLE SEATS",
      type: "string",
      editable: "never",
    },
    {
      field: "leaveTime",
      title: "TIME",
      type: "string",
      editable: "never",
    },

    {
      field: "Actions",
      title: "ACTIONS",
      type: "string",
      editable: "never",
      render: (rowData) => (
        <div style={{ whiteSpace: "nowrap" }}>
          {logedUserEmail != rowData.deloitteEmail && (
            <IconButton
              classes={{ root: classes.IconButton }}
              onClick={() =>
                handleBookById(rowData.poolId, rowData.deloitteEmail)
              }
            >
              <NoCrashIcon color="primary" />
            </IconButton>
          )}

          {(logedUserName == rowData.userName ||
            logedUserEmail == rowData.deloitteEmail) && (
            <IconButton
              classes={{ root: classes.IconButton }}
              onClick={() => handleDeleteById(rowData.poolId)}
            >
              <DeleteForever color="error" />
            </IconButton>
          )}
          {/* < Link to='https://www.google.com'> 
          </Link> */}

          {/* <a href={'www.google.com'} target="_blank" rel="noopeer noreferrer"> */}
          <IconButton
            classes={{ root: classes.IconButton }}
            onClick={() => handleMapSearch(rowData.destination)}
          >
            <PlaceRoundedIcon sx={{ color: "#9ACD66" }} />
            {/* <PlaceRoundedIcon color="primary"/> */}
          </IconButton>
          {/* </a> */}
        </div>
      ),
    },
  ];
  // const { width, height } = useWindowSize()
  return (
    <Template>
      <div
        style={{
          fontSize: 32,
          marginTop: "-40px",
          marginBottom: "60px",
          fontWeight: "bolder",
          marginLeft: "40px",
        }}
      >
        Go Green : Available car pools
        <MyBox
          width="15px"
          height="15px"
          borderRadius="100%"
          sx={{
            backgroundColor: "#9ACD66",
            marginTop: "-22px",
            marginLeft: "460px",
          }}
        />
      </div>
      <div
      //  className={clsx(classes.root, className)}
      >
        <div sx={{}}>
          <Button
            variant="contained"
            sx={{ marginLeft: "78rem" }}
            onClick={handleOpen}
            style={{ marginTop: "-100px" }}
          >
            Create Pool
          </Button>
          <br />
          <Dialog open={openEmailForm} onClose={handleClose}>
            <DialogTitle>Request for a seat</DialogTitle>
            <DialogContent>
              <br />

              <TextField
                id="outlined-multiline-static"
                label="Email"
                value={seekerEmail}
                onChange={handleSeekerEmail}
                fullWidth
                sx={{ marginBottom: "1rem" }}
              />
              <TextField
                id="outlined-multiline-static"
                label="Message"
                value={seekerAddress}
                onChange={handleSeekerAddress}
                fullWidth
                sx={{ marginBottom: "1rem" }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleEmailFormClose}>Cancel</Button>
              {props.loading ? (
                <div>
                  <BeatLoader
                    color={"rgb(54,215,183)"}
                    loading={props.loading}
                    size={6}
                  />
                </div>
              ) : (
                <Button
                  variant="contained"
                  onClick={sendEmail}
                  disabled={
                    !(seekerEmail && seekerEmail.length > 0) ||
                    !(seekerAddress && seekerAddress.length > 0)
                  }
                >
                  Submit
                </Button>
              )}
            </DialogActions>
          </Dialog>

          {isConfettiVisible && (
            <Confetti
              width={1500}
              height={1000}
              numberOfPieces={400}
              run={isConfettiVisible}
              colors={[
                "#009688",
                "#7FFFD4",
                "#98FB98",
                "#ADFF2F",
                "#BFFF00",
                "#CDDC39",
              ]}
            />
          )}
          {isPopUpVisible && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 100,
                background: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <div style={{ textAlign: "center", padding: "10px" }}>
                Congratulations You are going Green with Deloitte !
                <br />
                <br />
                <button
                  onClick={handleClosePopUp}
                  style={{
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  OK
                </button>
              </div>
            </div>
          )}

          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Create a Car Pool</DialogTitle>
            <DialogContent>
              {/* Form content */}
              <br />

              <TextField
                id="outlined-multiline-static"
                label="Available seats"
                value={vacentSeat}
                onChange={handleVacentSeat}
                fullWidth
                sx={{ marginBottom: "1rem" }}
              />
              <TextField
                id="outlined-multiline-static"
                label="Pickup Location"
                value={officeLocation}
                onChange={handleOfficeLocationChange}
                fullWidth
                sx={{ marginBottom: "1rem" }}
              />
              <TextField
                id="outlined-multiline-static"
                label="Drop Location"
                value={destinationAddress}
                onChange={handlDestinationChange}
                fullWidth
                sx={{ marginBottom: "1rem" }}
              />
              <TextField
                id="outlined-multiline-static"
                label="Time"
                value={officeLeaveTime}
                onChange={handlOfficeLeaveChange}
                fullWidth
                sx={{ marginBottom: "1rem" }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button
                variant="contained"
                onClick={handleSubmit}
                disabled={
                  !(vacentSeat && vacentSeat.length > 0) ||
                  !(officeLocation && officeLocation.length > 0) ||
                  !(destinationAddress && destinationAddress.length > 0) ||
                  !(officeLeaveTime && officeLeaveTime.length > 0)
                }
              >
                Submit
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <div
          className={clsx({
            // [classes.row]: isDesktop
          })}
        ></div>
        {employeeMasterData && employeeMasterData.length > 0 ? (
          <MaterialTable
            components={{
              Toolbar: (props) => (
                <div
                  style={{
                    height: "0px",
                    marginTop: "0px",
                  }}
                ></div>
              ),
            }}
            title={" "}
            editable={true}
            icons={tableIcons}
            columns={columns}
            data={dataRows}
            style={{ marginTop: "-18px" }}
            options={{
              maxBodyHeight: "100vh",
              search: false,
              filtering: true,
              headerStyle: {
                //backgroundColor: "#0ba6ff",
                backgroundColor: "#7BAA23",
                color: "White",
                whiteSpace: "nowrap",
                fontSize: "1.1em",
                padding: 10,
                textAlign: "center",
              },
              cellStyle: {
                fontSize: "0.9375em",
                textAlign: "center",
                borderRight: "1px solid #EEEEEE",
                padding: "5px 7px",
              },
              pageSize: 10,
              pageSizeOptions: [10, 15, 50, dataRows.length],
            }}
          />
        ) : (
          <h6>There is no data to show now.</h6>
        )}
      </div>
    </Template>
  );
};

const mapStateToProps = (state) => {
  return {
    allCarPoolsData: state.testMockApiDataSetup.allCarPoolsData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllCarPools: () => dispatch(getAllCarPools()),
    reduceCarPoolSeatbyId: (id) => dispatch(reduceCarPoolSeatbyId(id)),
    deletePoolById: (id) => dispatch(deletePoolById(id)),
    onSubmit: (data) => dispatch(createNewPool(data)),
    // getEmployeeById: (id) => dispatch(getEmployeeById(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarPooling);
