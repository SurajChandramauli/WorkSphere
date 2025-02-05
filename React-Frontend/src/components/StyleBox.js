import React, { useContext } from "react";


// Mui Components
import { Box } from "@mui/material";

const StyleBox = ({ children, ...rest }) => {
    //context
    // const AppContext = useContext(app_context);
    // const { theme } = AppContext;
  return (
    <Box
    //   color={theme.palette.font.light}
      fontSize='12px'
    //   fontFamily={theme.typography.h5.fontFamily}
    //   fontWeight={theme.typography.h5.fontWeight}
      right="0"
      pt={2}
      {...rest} // Spread the additional props here
    >
      {children}
    </Box>
  );
};

export default StyleBox;
