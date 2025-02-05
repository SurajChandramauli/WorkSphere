import { Box } from "@mui/material";
import React, { useContext } from "react";
import SideNav from "../components/SideNav";
import appContext from "../context/App/AppContext";
import StyleBox from "../components/StyleBox";
import { IconButton } from "@material-ui/core";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
export const Template = ({ children }) => {
  const { isSideNavOpen, setClpClicked, handleSideNav, showSideNav } =useContext(appContext);
    
  const handleSideNavbar = async () => {
    await handleSideNav();
    setClpClicked(true);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Box width={isSideNavOpen ? "200px" : 0} position="fixed">
        <SideNav />
      </Box>

      <Box sx={{ flex: 1, position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            top: 80,
            right: 0,
            bottom: 0,
            left: isSideNavOpen ? "300px" : 10,
            right: isSideNavOpen ? "10px" : 10,
            width: isSideNavOpen ? `calc(1200px-${window.innerWidth})` : "1400",
            zIndex: "-1",
          }}
        >
          {children}
        </Box>

        <StyleBox
          sx={{
            paddingTop: "0",
            right: 0,
            position: "absolute",
            alignItems: "center",
            color: "white",
            display: !isSideNavOpen ? "block" : "none",
            paddingRight: "2px",
          }}
        >
          <IconButton onClick={handleSideNavbar}>
            {!showSideNav ? (
              <MenuRoundedIcon style={{ height: "23px" }} />
            ) : (
              <MenuOpenRoundedIcon style={{ height: "23px" }} />
            )}
          </IconButton>
        </StyleBox>
      </Box>
    </Box>
  );
};
