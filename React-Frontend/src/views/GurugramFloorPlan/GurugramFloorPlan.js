import React, { useMemo, useEffect, useState } from "react";
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
  MenuItem,
  OutlinedInput,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import TextInputWithLabel from "../../components/TextInputWithLabel.js";
// import { addEmployeeData } from '../../redux/actions';
import countryList from "react-select-country-list";
// import BeatLoader from "react-spinners/BeatLoader";
import { Template } from "../template.js";
import clsx from "clsx";

import { useNavigate, useParams } from "react-router-dom";
import { getTestMockData } from "../../redux/actions/index.js";
// My Components
import MyBox from "../../components/MyBox.js";

// Material UI components
import Avatar from "@mui/material/Avatar";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Divider } from "@mui/material";

// My assets
import dp from "../../assets/images/surajProfile.jpg";
import bg from "../../assets/images/bg.jpg";
import breakpoints from "../../assets/base/breakpoints.js";

//icons
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

//alert
import Footer from "../../components/Footer.js";

import MyBio from "../../components/MyBio.js";
import FutureGoals from "../../components/FutureGoals.js";
import ProfileInfoCard from "../../components/ProfileInfoCard.js";
import AboutWebsite from "../../components/AboutWebiste.js";
import AdditionalFeatures from "../../components/AdditionalFeature.js";

import gFloorPLan1 from "../../assets/images/b_floorPlan1.png";

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

const GurugramFloorPlan = (props) => {
  return (
    <Template>
      <div>
        <center>
          <h2>GURUGRAM FLOOR PLANS</h2>
        </center>
      </div>
      <div>
        <h2>Floor 1 : </h2>
      </div>
      <center>
        <MyBox
          width="1200px"
          height="650px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          borderRadius="15px"
          sx={{
            backgroundImage: `url(${gFloorPLan1})`,
            backgroundSize: "cover", // to cover the given area
            backgroundPosition: "center", // to show image completely
          }}
        />
      </center>
      <br />
      <div>
        <h2>Floor 2 : </h2>
      </div>
      <center>
        <MyBox
          width="1200px"
          height="650px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          borderRadius="15px"
          sx={{
            backgroundImage: `url(${gFloorPLan1})`,
            backgroundSize: "cover", // to cover the given area
            backgroundPosition: "center", // to show image completely
          }}
        />
      </center>
      <br />
      <div>
        <h2>Floor 3 : </h2>
      </div>
      <center>
        <MyBox
          width="1200px"
          height="650px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          borderRadius="15px"
          sx={{
            backgroundImage: `url(${gFloorPLan1})`,
            backgroundSize: "cover", // to cover the given area
            backgroundPosition: "center", // to show image completely
          }}
        />
      </center>
      <br />
      <div>
        <h2>Floor 4 : </h2>
      </div>
      <center>
        <MyBox
          width="1200px"
          height="650px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          borderRadius="15px"
          sx={{
            backgroundImage: `url(${gFloorPLan1})`,
            backgroundSize: "cover", // to cover the given area
            backgroundPosition: "center", // to show image completely
          }}
        />
      </center>
      <br />
      <div>
        <h2>Floor 5 : </h2>
      </div>
      <center>
        <MyBox
          width="1200px"
          height="650px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          borderRadius="15px"
          sx={{
            backgroundImage: `url(${gFloorPLan1})`,
            backgroundSize: "cover", // to cover the given area
            backgroundPosition: "center", // to show image completely
          }}
        />
      </center>
      <br />
      <div>
        <h2>Floor 6 : </h2>
      </div>
      <center>
        <MyBox
          width="1200px"
          height="650px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          borderRadius="15px"
          sx={{
            backgroundImage: `url(${gFloorPLan1})`,
            backgroundSize: "cover", // to cover the given area
            backgroundPosition: "center", // to show image completely
          }}
        />
      </center>
    </Template>
  );
};
const mapStateToProps = (state) => {
  return {
    // loadingAPI: state.customerData.loading
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // onSubmit: (data) => dispatch(addEmployeeData(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(GurugramFloorPlan);
