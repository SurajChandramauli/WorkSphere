import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//My components
import StyleBox from "../components/StyleBox";
import logo from "../assets/images/logoconnekt.svg";

// Mui Componenets
import {
  Avatar,
  Box,
  Divider,
  ThemeProvider,
  createTheme,
} from "@mui/material";
//icons
import NoteAltRoundedIcon from "@mui/icons-material/NoteAltRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import DirectionsCarRoundedIcon from "@mui/icons-material/DirectionsCarRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import AppRegistrationRoundedIcon from "@mui/icons-material/AppRegistrationRounded";
import EqualizerRoundedIcon from "@mui/icons-material/EqualizerRounded";
import AppContext from "../context/App/AppContext";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import MapIcon from "@mui/icons-material/Map";
import TryIcon from "@mui/icons-material/Try";
import { color } from "echarts";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

const SideNav = () => {
  const themeMode = "light";

  const { isSideNavOpen, showSideNav, clpClicked, handleSideNav } =
    useContext(AppContext);

  const navigate = useNavigate();

  const [id, setId] = useState(null);

  // icon style
  let iconStyle = {
    verticalAlign: "middle",
    marginRight: "0.5rem",
  };

  function handleLogout() {
    localStorage.clear();
    navigate("/");
  }
  // Function to handle clicks outside of the SideNav component
  useEffect(() => {
    const handleOutsideClick = (event) => {
      let x =
        sideNavRef.current &&
        !sideNavRef.current.contains(event.target) &&
        !clpClicked; // false when clicked outside
      if (showSideNav && !clpClicked && x) {
        handleSideNav();
      } else if (x && clpClicked) {
        handleSideNav();
      }
    };
    // Add event listener for clicks outside of SideNav component
    window.addEventListener("click", handleOutsideClick);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [showSideNav, clpClicked, handleSideNav]);
  const NavItem = ({ label, icon, redirectTo, active, onClick, ...rest }) => {
    const SelectedIcon = icon;
    return (
      <Box
        mt={2.5}
        mr={1}
        ml={1}
        {...rest}
        zIndex="1"
        height="50px"
        display="flex"
        alignItems="center"
        borderRadius="7px"
        sx={{
          background: active
            ? // ? "linear-gradient(195deg, #49a3f1, #1A73E8)"
              "#7BAA23"
            : "transparent",
        }}
      >
        <Link
          to={redirectTo}
          style={{
            textDecoration: "none",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
          onClick={onClick}
        >
          <Box display="flex" alignItems="center" marginLeft="10px">
            <StyleBox
              textTransform="capitalize"
              color="white"
              paddingTop="0"
              marginRight="10px"
            >
              <SelectedIcon style={iconStyle} />
            </StyleBox>

            <StyleBox
              textTransform="capitalize"
              color="white"
              paddingTop="0"
              fontSize="20px"
            >
              {label}
            </StyleBox>
          </Box>
        </Link>
      </Box>
    );
  };
  // // divider style
  const myTheme = createTheme({
    components: {
      MuiDivider: {
        styleOverrides: {
          root: {
            backgroundImage:
              "linear-gradient(to right, rgba(255, 255, 255, 0), #ffffff, rgba(255, 255, 255, 0))!important",
            height: "0.0625rem",
            borderBottom: "none",
            opacity: "1",
            marginTop: "10px",
            marginBottom: "30px",
          },
        },
      },
    },
  });

  const sideNavRef = useRef(null);

  return (
    <ThemeProvider theme={myTheme}>
      <Box
        ref={sideNavRef}
        sx={({ breakpoints }) => ({
          background:
            themeMode === "light"
              ? // ? "linear-gradient(195deg, #42424a, #191919)"
                "#151515"
              : "#1f283e",
          position: "fixed",
          top: 0,
          left: isSideNavOpen ? 0 : "-300px",
          transform: isSideNavOpen ? "transformX(0)" : "transformX(-300px)",
          transition: "left 0.3s ease-out",
          bottom: 0,
          margin: "0px",

          width: "250px",
          borderRadius: "0px 24px 24px 0px",
          //   border: `1px solid ${theme.palette.font.dark}`,
          p: "5px",

          [breakpoints.down("md")]: {
            left: showSideNav ? 0 : "-300px",
            transform: showSideNav ? "transformX(0)" : "transformX(-300px)",
            transition: "left 0.3s ease-out",
          },
          zIndex: "1",
        })}
      >
        {/* <NavItem label="NoteSphere" icon={NoteAltRoundedIcon} /> */}
        <br></br>
        <center>
          {/* <Avatar
            alt="Connekt"
            sx={{width:70,height:70}}
            src={logo}
          /> */}
          <img
            src={require("../assets/images/logoconnekt.png")}
            alt=""
            style={{ padding: "40px 0px 20px" }}
          />
          {/* <h2 style={{color:"#fff"}}>Connekt</h2> */}
        </center>

        <Divider />
        <NavItem
          label="Home feed"
          // icon={DashboardRoundedIcon}
          icon={HomeOutlinedIcon}
          pt={-1}
          redirectTo="/home"
          active={window.location.pathname === "/home"}
          style={{ fontSize: "100px" }}
        />
        <NavItem
          label="My Profile"
          icon={PersonRoundedIcon}
          redirectTo={`/viewProfile`}
          active={window.location.pathname === `/viewProfile`}
        />

        <NavItem
          label="People Directory"
          icon={PeopleAltRoundedIcon}
          redirectTo={`/allEmployees`}
          active={window.location.pathname === `/allEmployees`}
        />
        <NavItem
          label="Project placer"
          icon={AccountTreeIcon}
          redirectTo={`/viewAllProjects`}
          active={window.location.pathname === `/viewAllProjects`}
        />

        <NavItem
          label="Statistics"
          icon={EqualizerRoundedIcon}
          active={window.location.pathname === `/stats`}
          redirectTo="/stats"
        />
        <NavItem
          label="Go Green"
          icon={DirectionsCarRoundedIcon}
          redirectTo={`/carPooling`}
          active={window.location.pathname === `/carPooling`}
        />
        <NavItem
          label="Deloitte AI"
          icon={SupportAgentRoundedIcon}
          redirectTo={`/askAIAgent`}
          active={window.location.pathname === `/askAIAgent`}
        />
        <NavItem
          label="Walk through"
          icon={MapIcon}
          redirectTo={`/floorPlans`}
          active={window.location.pathname === `/floorPlans`}
        />

        {/* <NavItem
          label="Project Stats"
          icon={EqualizerRoundedIcon}
          active={window.location.pathname === `/onProjectStats`}
          redirectTo="/onProjectStats"
        /> */}
        {/* <NavItem
              label="viewProfile"
              icon={AppRegistrationRoundedIcon}
              active={window.location.pathname === `/viewProfile`}
              redirectTo="/viewProfile"
            /> */}

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Divider />
        <NavItem
          label="Sign Out"
          icon={LogoutRoundedIcon}
          active={false}
          onClick={() => handleLogout()}
          redirectTo="/"
        />
      </Box>
    </ThemeProvider>
  );
};

export default SideNav;
