import AppContext from "./AppContext";
// import { themeSettings } from "../../theme";
import { useEffect, useState } from "react";
 import breakpoints from "../../assets/base/breakpoints";

const AppState = ({ children }) => {
  //theme
  
  const [showSideNav, setShowSideNav] = useState(false);
  // is btn clicked on navbar for sidenav
  const [clpClicked, setClpClicked] = useState(false);
  //visibility on the basis of size
  const [isSideNavOpen, setIsSideNavOpen] = useState(true);

  //sidenav
  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth < breakpoints.values.lg;
      setIsSideNavOpen(!isSmallScreen);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSideNav = () => {
    if (showSideNav) {
      setShowSideNav(!showSideNav);
    } else {
      setShowSideNav(!showSideNav);
    }
    setTimeout(() => {
      setClpClicked(false);
    }, 100);
  };
  return (
    <AppContext.Provider
      value={{

        showSideNav,
        clpClicked,
        setClpClicked,
        setShowSideNav,
        handleSideNav,
        isSideNavOpen,
        setIsSideNavOpen,
        toggleSideNav,

      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
