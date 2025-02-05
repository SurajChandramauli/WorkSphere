import React, { useContext } from "react";

// Mui Components
import { Card, Box, Grid, Divider, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
//icons
import { connect } from "react-redux";

import { getEmployeeById } from "../redux/actions";
//My Components
import StyleBox from "../../src/components/StyleBox";
import MyBox from "./MyBox";




const FutureGoals = (props) => {


  //infoCard
  const InfoCard = ({ label, info, ...rest }) => {
    return (
      <Grid container spacing={2} alignItems="center" {...rest}>
        <Grid item>
          <StyleBox
            textTransform="uppercase"
            // color={theme.palette.font.main}
            // fontWeight={theme.typography.heading.fontWeight}
            fontSize="15px"
            fontWeight="600"
            color="#4D4C5C"
            item
          >
            {label}
          </StyleBox>
        </Grid>

        <Grid item>
          <StyleBox
            textTransform="capitalize"
            fontSize="15px"
            fontWeight="550"
            color="#000"
            item
            // fontWeight={theme.typography.subHeading.fontWeight}
          >
            {info}
          </StyleBox>
        </Grid>
      </Grid>
    );
  };
  // divider style
  const myTheme = createTheme({
    components: {
      MuiDivider: {
        styleOverrides: {
          root: {
            backgroundImage:
              "linear-gradient(to right, rgba(52, 71, 103, 0), rgba(52, 71, 103, 1), rgba(52, 71, 103, 0))!important",
            height: "0.0625rem",
            borderBottom: "none",
            opacity: "1",
          },
        },
      },
    },
  });

 

  return (
    <ThemeProvider theme={myTheme}>
      <Card
        sx={{
          boxShadow: "none",
          width: "100%",
          marginRight: "7px",
        //   backgroundColor: theme.palette.primary.main,
        }}
      >
        <Box p={2} display="flex" justifyContent="space-between">
          <StyleBox
            textTransform="uppercase"
            // fontSize={theme.typography.heading.fontSize}
            // color={theme.palette.font.main}
            fontSize="22px"
            fontWeight="550"
          >
            Personal Information
            <MyBox
          width="15px"
          height="15px"
          borderRadius="100%"
          sx={{
            backgroundColor: "#9ACD66",
            marginTop:"-20px",
            marginLeft:"270px"
          }}
        />
          </StyleBox>
        </Box>
        <br/>

        <Divider />
        <br/>
        <Box p={2} letterSpacing={1}>
 
          <StyleBox pt={-2} pb={2}>
            {/* {updatedInfo.initialBio} */}
       
          </StyleBox>
          {/* <Divider color={theme.palette.neutral.dark} /> */}
          <InfoCard label="Date of Birth : " info={props.empDetails.dateOfBirth} />
          <InfoCard label="Gender : " info={props.empDetails.gender} />
          <InfoCard label="Phone Number : " info={props.empDetails.phoneNumber} />
          <InfoCard label="Personal Mail : " info={props.empDetails.personalEmail} />
          <InfoCard label="Address : " info={props.empDetails.address} />
          <InfoCard label="Hobbies: " info={props.empDetails.hobbies} />
        </Box>

      </Card>
    </ThemeProvider>
  );
};
const mapStateToProps = (state) => {
  return {
    empDetails: state.testMockApiDataSetup.singleEmployeeData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
     getEmployeeById: (id) => dispatch(getEmployeeById(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FutureGoals);
