import React, { useContext, useEffect, useState } from "react";
import { connect } from 'react-redux';
// Mui Components
import {
  Card,
  Box,
  Grid,
  Divider,
  createTheme,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
//icons
import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { getEmployeeById } from "../redux/actions";
//My Components
import StyleBox from "../../src/components/StyleBox";
import MyBox from "./MyBox";




const OwnProfileInfoCard = (props) => {

  // useEffect(() => {
  //   var id = localStorage.getItem("loggedInUserId");
  //   props.getEmployeeById(id);
  // }, []);

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
          >
            {label}
          </StyleBox>
        </Grid>

        <Grid item>
          <StyleBox
            // textTransform="capitalize"
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

  // bio update
  const [info, setInfo] = useState({
    bio: "",
    name: "",
  });
  // const [bio, setBio] = useState("");
  const [updatedInfo, setUpdatedInfo] = useState({
    initialBio: " ",
    initialName: " ",
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
            Professional Information
            <MyBox
          width="15px"
          height="15px"
          borderRadius="100%"
          sx={{
            backgroundColor: "#9ACD66",
            marginTop:"-20px",
            marginLeft:"320px"
          }}
        />
          </StyleBox>
        </Box>
        <br/>
        <Divider />
        <br/>
        <Box p={2} letterSpacing={1}>
          {/* <Divider color={theme.palette.neutral.dark} /> */}
          <InfoCard label="Primary Skill : " info={props.empDetails.primarySkill} />
          <InfoCard label="Skills : " info={props.empDetails.allSkills} />
          <InfoCard label="Domain Expertise : " info={props.empDetails.domainExpertise} />
          <InfoCard label="Currently on Project : " info={"" + props.empDetails.onProject} />
          <InfoCard label="Total Exp (in years) : " info={props.empDetails.totalExp} />
          <InfoCard label="Social: " onClick={event=>window.location.href='{props.empDetails.linkedInUrl}'} info={<LinkedInIcon />} />
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

export default connect(mapStateToProps, mapDispatchToProps)(OwnProfileInfoCard);
// export default ProfileInfoCard;
