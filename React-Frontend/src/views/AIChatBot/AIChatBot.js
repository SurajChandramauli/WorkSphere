import React, {useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  Grid,
  Breadcrumbs,
  Typography,
  Button,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

import TextInputWithLabel from "../../components/TextInputWithLabel.js";
// import { addEmployeeData } from '../../redux/actions';
import {
  askQueryAIAgent,
} from "../../redux/actions/index.js";
import BeatLoader from "react-spinners/BeatLoader";
import { Template } from "../template";
import MyBox from "../../components/MyBox";

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

const AIChatBot = (props) => {
  const classes = useStyles();

  const [aboutMe, setAboutMe] = React.useState("");



  function handleAboutMe(event) {
    setAboutMe(event);
  }
 
  var formData = {

    query : aboutMe,

  };
  const handleSubmit = () => {
    props.onSubmit(formData)
  };
  useEffect(() => {
 
  }, []);
 
  return (
    <Template>
      <div
              style={{
                fontSize: 32,
                marginTop: "-40px",
                marginBottom: "60px",
                fontWeight: "bolder",
                marginLeft:"40px"
              }}
            >
              Deloitte AI
              <MyBox
                width="15px"
                height="15px"
                borderRadius="100%"
                sx={{
                  backgroundColor: "#9ACD66",
                  marginTop: "-22px",
                  marginLeft: "170px",
                }}
              />
            </div>
      <div className={classes.root}>
        <Breadcrumbs aria-label="breadcrumb">
         
          <Typography color="textPrimary" variant="h4">
         Ask Your Query: Your AI Agent
          </Typography>
        </Breadcrumbs>
    
          <Card style={{ marginTop: 15 }}>
           
              <div className={classes.container}>
                <Grid
                  container
                  style={{ marginBottom: 16, padding: "0px 25px 0px 25px" }}
                  spacing={2}
                >
    
                  <Grid
                    item
                    md={5}
                    xs={2}
                    classes={{ root: classes.gridContainer }}
                  >
                    <TextInputWithLabel
                      heading={"Hi, how can I help you today?"}
                      value={aboutMe}
                      twoline="true"
                      // prevalue={props.empDetails.aboutMe}
                      onChange={handleAboutMe}
                    />
                  </Grid>
                 
                </Grid>
              </div>
    
          
          </Card>
        
        <div className={classes.submitContainer}>
          <Button color="primary" variant="contained" onClick={handleSubmit} disabled={props.loading || aboutMe.length==0}>
            {
              props.loadingAPI ?
                  <BeatLoader color={'rgb(54, 215, 183)'} loading={props.loading} size={6} />
                  :
              "Ask Query"
            }
          </Button>
        </div>
        <p>{ props.loading ? "Quest is generating Response.... Please wait...." :JSON.stringify(props.AIresponse)}</p> 
      </div>
    </Template>
  );
};
const mapStateToProps = (state) => {
  return {
    AIresponse: state.testMockApiDataSetup.AIresponse.data,
    loading : state.testMockApiDataSetup.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (data) => dispatch(askQueryAIAgent(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AIChatBot);
