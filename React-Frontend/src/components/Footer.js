import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {

  return (
    <Box
      component="footer"
      sx={{
        alignContent: "center",
        padding: "16px",
        textAlign: "center",
        margin : "0 25px",
        
        

      }}
    >
      <Typography variant="body2" 
    //   color={theme.palette.secondary.dark}  
      >
        © 2023 Deloitte Touche Tohmatsu India LLP.
      </Typography>
    </Box>
  );
};

export default Footer;
