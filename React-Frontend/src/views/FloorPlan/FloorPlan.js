import React, { useMemo, useEffect, useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import { Card, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Template } from "../template.js";

import { useNavigate, useParams } from "react-router-dom";
import MyBox from "../../components/MyBox";

// Material UI components
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Divider } from "@mui/material";

// My assets
import bg from "../../assets/images/deloitte_building10.jpg";

import breakpoints from "../../assets/base/breakpoints";

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

const FloorPlan = (props) => {
  // //params
  const { tab } = useParams();

  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(tab ? parseInt(tab, 10) : 1);

  // divider
  const [showDivider, setShowDivider] = useState(true);
  useEffect(() => {
    const handleTabsOrientation = () => {
      if (window.innerWidth < breakpoints.values.sm) {
        setTabsOrientation("vertical");
        setShowDivider(false);
      } else {
        setTabsOrientation("horizontal");
        setShowDivider(true);
      }
    };

    // event that calling the handleTabsOrientation
    window.addEventListener("resize", handleTabsOrientation);

    // calling handleTabsOrientation to set the state in initial value
    handleTabsOrientation();

    // removing event listener on unmounting
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation, showDivider]);

  const handleSetTabValue = (event, newValue) => {
    setTabValue(newValue);
  };

  // tab style
  let tabStyle = {
    // color: theme.palette.font.main,
    opacity: 1,
 
  };
  // icon style
  let iconStyle = {
    verticalAlign: "middle",
    marginRight: "0.5rem",
  };

  //styels

  const myStyle = createTheme({
    components: {
      MuiTab: {
        styleOverrides: {
          root: {
            minHeight: "25px",
            borderRadius: "8px",
            height: "30px",
            backgroundColor: "transparent",
            opacity: "1",
            margin: "4px",
            transition: "background-color 0.1s ease-in-out",
            "&.Mui-selected": {
           
              boxShadow: "2px 2px 3px rgba(0, 0, 0, 0.5)",
            },
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            opacity: "0.5",
          },
        },
      },
    },
  });

  const empDetails = {
    userId: 7,
    deloitteEmpId: "9",
    name: "Suraj",
    deloitteEmail: "suraj6@deloitte.com",
    dateOfJoining: "22-05-23",
    dateOfBirth: "07-02-2001",
    department: "Development",
    band: "B7",
    designation: "Trainee",
    reportingManager: "Sarthak Mittal",
    officeLocation: "Bangalore",
    address: "Ara, Bihar",
    primarySkill: "Java",
    allSkills: "Java,Cpp,Python,ReactJS,Springboot,NodeJS,Github",
    profileImgUrl:
      "https://solartribune.com/wp-content/uploads/2018/08/NuScale-Power-Module.jpg",
    linkedInUrl: "https://www.linkedin.com/in/surajchandramauli",
    onProject: false,
    personalEmail: "ashana9334@gmail.com",
    phoneNumber: "1234567890",
    totalExp: 1,
    aboutMe: "I love to watch anime and I have two cats",
    hobbies: "Sketching, Painting, Watching anime",
    password: "pass@123",
  };

  return (
    <Template>
      <ThemeProvider theme={myStyle}>
        <MyBox
          width="100%"
          height="400px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          borderRadius="15px"
          sx={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover", // to cover the given area
            backgroundPosition: "center", // to show image completely
          }}
        />
        <Card
          sx={{
            position: "relative",
            mt: -7,
            mx: 3, // margin left and margin right
            px: 2,
            py: 2,

          }}
        >
       
          {
            <Box>
              <Box
                xs={12}
                md={6}
                xl={4}
                sx={{ ml: "auto", textAlign: "center" }}
                id="name"
              >
                {/* Centered grid item */}
                <MyBox
         
                ></MyBox>
              </Box>
            </Box>
          }
        </Card>
        <br />
        <div>
          <h3>
            <center>OUR OFFICES</center>
          </h3>
        </div>
        <hr></hr>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Button size="medium" component={Link} to="/gurugramFloorPlans">
            <h3>Gurugram: </h3>
          </Button>
          <a href="https://goo.gl/maps/5jGyvrpW8qy5w1dy7" target="_blank">
            <h4>
              Crest, I-Park, Level Ground to 7 Plot No. 15 Udyog Vihar Phase IV
              Haryana 122015
            </h4>
          </a>
        </div>
        <hr></hr>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Button size="medium" component={Link} to="/bangaloreFloorPlans">
            <h3>Bengaluru: </h3>
          </Button>
          <a
            href="https://maps.google.co.in/maps?q=Deloitte,+Bangalore,+Karnataka&hl=en&ll=12.964993,77.599013&spn=0.001294,0.002631&sspn=0.010351,0.02105&vpsrc=6&hq=Deloitte,&t=m&hnear=Bengaluru,+Bengaluru+Rural,+Karnataka&z=19&iwloc=C"
            target="_blank"
          >
            <h4>
              Prestige Trade Tower, Level 19, 46, Palace Road, High Grounds
              Bengaluru Karnataka 560001
            </h4>
          </a>
        </div>
        <hr></hr>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Button size="medium" component={Link} to="/bangaloreFloorPlans">
            <h3>Hyderabad: </h3>
          </Button>
          <a href="https://goo.gl/maps/KC7vwGnTxC82" target="_blank">
            <h4>
              KRB Towers, Plot no 1 to 4 & 4A 1st, 2nd & 3rd Floor, Jubilee
              Enclave Madhapur, Hyderabad Madhapur, Telangana 500 081
            </h4>
          </a>
        </div>
        <hr></hr>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Button size="medium" component={Link} to="/bangaloreFloorPlans">
            <h3>Pune: </h3>
          </Button>
          <a href="https://goo.gl/maps/CgogdVuHb6t" target="_blank">
            <h4>
              706, ‘B’ Wing, 7th Floor, ICC Trade Tower, International
              Convention Centre, Senapati Bapat Road, Shivaji Nagar, Pune
              Maharashtra 411 016
            </h4>
          </a>
        </div>
        <hr></hr>

        {/* <Footer /> */}
      </ThemeProvider>
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
export default connect(mapStateToProps, mapDispatchToProps)(FloorPlan);
