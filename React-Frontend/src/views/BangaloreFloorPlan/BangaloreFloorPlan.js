import React, { useMemo, useEffect, useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import { Template } from "../template.js";
// My Components
import MyBox from "../../components/MyBox.js";
import bFloorPLan1 from "../../assets/images/b_floorPlan1.png";

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

const BangaloreFloorPlan = (props) => {
  return (
    <Template>
      <div>
        <center>
          <h2>BENGALURU FLOOR PLANS</h2>
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
            backgroundImage: `url(${bFloorPLan1})`,
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
            backgroundImage: `url(${bFloorPLan1})`,
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
            backgroundImage: `url(${bFloorPLan1})`,
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
            backgroundImage: `url(${bFloorPLan1})`,
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
            backgroundImage: `url(${bFloorPLan1})`,
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
            backgroundImage: `url(${bFloorPLan1})`,
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
export default connect(mapStateToProps, mapDispatchToProps)(BangaloreFloorPlan);
