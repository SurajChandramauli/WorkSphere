import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
// import { makeStyles, useTheme} from '@material-ui/styles';
// import {
//     Typography,useMediaQuery,IconButton,Fab
// } from '@material-ui/core';
import { Template } from "../template";
// import {Edit,DeleteForever} from '@material-ui/icons';
import MaterialTable from "material-table";
import { tableIcons } from "../../components/TableIcons";
import { connect } from "react-redux";
// import { useHistory } from "react-router-dom";
import { getAllEmployessByProjectId } from "../../redux/actions";
import { getEmployeeById } from "../../redux/actions";
import LoadingOverlay from "react-loading-overlay";
import { styled, useTheme } from "@mui/material/styles";
import MyBox from "../../components/MyBox";


const useStyles = styled((theme) => ({
  root: {
    // backgroundColor: 'white',
    borderRadius: 10,
    padding: "20px 16px",
  },
  row: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  IconButton: {
    padding: 0,
    [theme.breakpoints.up("md")]: {
      paddingRight: 10,
    },
  },
}));

const EmployessApplied = (props) => {
  const history = useNavigate();

  const [employeeMasterData, setEmployeeMasterData] = React.useState([]);
  const [dataRows, setDataRows] = React.useState([]);

  useEffect(() => {
    var pathname = window.location.pathname;
    var projectId = pathname.substring(pathname.lastIndexOf("/") + 1);
    if (projectId) {
      props.getAllEmployessByProjectId(projectId);
    }
    // console.log(props.allEmployeesByProjectIdData)
  }, []);

  function viewOtherEmployeeDetails(id) {
    props.getEmployeeById(id);
    history("/otherViewProfile/" + id);
  }
  useEffect(() => {
    if (
      props.allEmployeesByProjectIdData &&
      props.allEmployeesByProjectIdData.length > 0
    ) {
      // var tempArr=[]
      // {props.allEmployeesByProjectIdData.map((emp) => (
      //     tempArr.push(emp)
      //   ))}
      setEmployeeMasterData(props.allEmployeesByProjectIdData);
    }
  }, [props.allEmployeesByProjectIdData]);

  useEffect(() => {
    if (employeeMasterData && employeeMasterData.length > 0) {
      var Arr = [];
      {
        employeeMasterData.map((emp) => Arr.push(emp));
      }
      setDataRows(Arr);
    }
  }, [employeeMasterData]);
  // const { className } = props;
  const classes = useStyles();
  // const theme = useTheme();

  const isDesktop = true;

  const columns = [
    {
      field: "deloitteEmpId",
      title: "Deloitte ID",
      editable: "never",
      type: "string",
      render: (rowData) => (
        <a
          className={classes.hover}
          onClick={() => viewOtherEmployeeDetails(rowData.userId)}
        >
          {" "}
          {rowData.deloitteEmpId}
        </a>
      ),
    },
    {
      field: "name",
      title: "Employee Name",
      type: "string",
      editable: "never",
      render: (rowData) => (
        <a
          className={classes.hover}
          onClick={() => viewOtherEmployeeDetails(rowData.userId)}
        >
          {" "}
          {rowData.name}
        </a>
      ),
    },
    {
      field: "department",
      title: "Department",
      type: "string",
      editable: "never",
      render: (rowData) => (
        <a
          className={classes.hover}
          onClick={() => viewOtherEmployeeDetails(rowData.userId)}
        >
          {" "}
          {rowData.department}
        </a>
      ),
    },
    {
      field: "designation",
      title: "Designation",
      type: "string",
      editable: "never",
      render: (rowData) => (
        <a
          className={classes.hover}
          onClick={() => viewOtherEmployeeDetails(rowData.userId)}
        >
          {" "}
          {rowData.designation}
        </a>
      ),
    },
    {
      field: "allSkills",
      title: "Skills",
      type: "string",
      editable: "never",
      render: (rowData) => (
        <a
          className={classes.hover}
          onClick={() => viewOtherEmployeeDetails(rowData.userId)}
        >
          {" "}
          {rowData.allSkills}
        </a>
      ),
    },
    {
      field: "domainExpertise",
      title: "Domain Expertise",
      type: "string",
      editable: "never",
      render: (rowData) => (
        <a
          className={classes.hover}
          onClick={() => viewOtherEmployeeDetails(rowData.userId)}
        >
          {" "}
          {rowData.domainExpertise}
        </a>
      ),
    },
    {
      field: "totalExp",
      title: "Total Exp (in yrs)",
      type: "int",
      render: (rowData) => (
        <a
          className={classes.hover}
          onClick={() => viewOtherEmployeeDetails(rowData.userId)}
        >
          {" "}
          {rowData.totalExp}
        </a>
      ),
    },
    {
      field: "officeLocation",
      title: "Office Location",
      type: "string",
      render: (rowData) => (
        <a
          className={classes.hover}
          onClick={() => viewOtherEmployeeDetails(rowData.userId)}
        >
          {" "}
          {rowData.officeLocation}
        </a>
      ),
    },

    {
      field: "onProject",
      title: "On Project",
      type: "boolean",
      editable: "never",
      render: (rowData) => (
        <a
          className={classes.hover}
          onClick={() => viewOtherEmployeeDetails(rowData.userId)}
        >
          {rowData.onProject?"Yes":"No"}
        </a>
      ),
    },
  ];
  return (
    <Template>
      <div
      //  className={clsx(classes.root, className)}
      >
        <LoadingOverlay
          active={props.loading}
          spinner
          styles={{
            spinner: (base) => ({
              ...base,
              width: "50px",
              "& svg circle": {
                stroke: "#045FB4",
              },
            }),
            overlay: (base) => ({
              ...base,
              background: "rgba(52, 52, 52, 0)",
            }),
            content: (base) => ({
              ...base,
              color: "black",
            }),
          }}
          text="Loading contracts. Please wait ..."
          // className={classes.spinner}
        >
          <div
            className={clsx({
              // [classes.row]: isDesktop
            })}
          >
              <div
                style={{
                  fontSize: 32,
                  marginTop:"-30px",
                  marginBottom: "30px",
                  fontWeight: "bolder",
                }}
              >
                Nominated Employees
                <MyBox
                width="15px"
                height="15px"
                borderRadius="100%"
                sx={{
                  backgroundColor: "#7BAA23",
                  marginTop: "-22px",
                  marginBottom:"45px",
                  marginLeft: "350px",
                }}
              />
              </div>
           
            <br />
          </div>
          {employeeMasterData && employeeMasterData.length > 0 ? (
            <MaterialTable
              components={{
                Toolbar: (props) => (
                  <div
                    style={{
                      height: "0px",
                    }}
                  ></div>
                ),
              }}
              title={" "}
              editable={true}
              icons={tableIcons}
              columns={columns}
              data={dataRows}
              style={{ marginTop: "-18px" }}
              options={{
                maxBodyHeight: "100vh",
                search: false,
                filtering: true,
                headerStyle: {
                  // backgroundColor:'#0ba6ff',
                  backgroundColor: "#7BAA23",
                  color: "White",
                  //  whiteSpace: 'nowrap',
                  fontSize: "1.1em",
                  padding: 10,
                  textAlign: "center",
                },
                cellStyle: {
                    backgroundColor:"#fff",
                    
                  fontSize: "1em",
                  padding : 15,
                  textAlign: "left",
                  borderRight: "1px solid #EEEEEE",
                  padding: "5px 7px",
                },
                pageSize: 12,
                pageSizeOptions: [10, 15, 50, dataRows.length],
              }}
            />
          ) : (
            <h6>No Employees has nominated for this Project</h6>
          )}
        </LoadingOverlay>
      </div>
    </Template>
  );
};

const mapStateToProps = (state) => {
  return {
    allEmployeesByProjectIdData:
      state.testMockApiDataSetup.allEmployeesByProjectIdData,
    loading: state.testMockApiDataSetup.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllEmployessByProjectId: (pId) =>
      dispatch(getAllEmployessByProjectId(pId)),
    getEmployeeById: (id) => dispatch(getEmployeeById(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployessApplied);
