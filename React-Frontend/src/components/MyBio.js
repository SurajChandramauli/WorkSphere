import React, { useContext } from "react";

// Mui Components
import {
  Card,
  Box,
  Grid,
  Divider,
  createTheme,
} from "@mui/material";
import { connect } from "react-redux";
import { ThemeProvider } from "@emotion/react";
//icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';

//My Components
import StyleBox from "../../src/components/StyleBox";
import MyBox from "./MyBox";



const MyBio = (props) => {

  // icon style
  let iconStyle = {
    verticalAlign: "middle",
    marginRight: "0.5rem",
  };
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
            fontSize="22px"
            fontWeight="550"
            // color={theme.palette.font.main}
          >
            Developer Information
            <MyBox
          width="15px"
          height="15px"
          borderRadius="100%"
          sx={{
            backgroundColor: "#9ACD66",
            marginTop:"-20px",
            marginLeft:"280px"
          }}
        />
          </StyleBox>
        </Box>
        <br/>
        <Divider />
        <Box p={2} letterSpacing={1}>
          <StyleBox 
            pt={-2} 
            pb={2}
            fontSize="17px" 
          >
            {props.empDetails.aboutMe}
          </StyleBox>
          {/* <Divider color={theme.palette.neutral.dark} /> */}
          
          <InfoCard label="Deloitte Id : " info={props.empDetails.deloitteEmpId} />
          <InfoCard label="Deloitte Email : " info={props.empDetails.deloitteEmail} />
          <InfoCard label="Date of Joining : " info={props.empDetails.dateOfJoining} />
          <InfoCard label="Department : " info={props.empDetails.department} />
          <InfoCard label="Band : " info={props.empDetails.band} />
          <InfoCard label="Reporting Manager : " info={props.empDetails.reportingManager} />
          <InfoCard label="Office Location : " info={props.empDetails.officeLocation} />

          {/* <InfoCard label="Social: " info={<LinkedInIcon />} /> */}
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
    // getEmployeeById: () => dispatch(getEmployeeById()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyBio);
// export default MyBio;
