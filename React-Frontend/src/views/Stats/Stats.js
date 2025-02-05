// import React from 'react'
import { Template } from "../template";

import React, { useEffect, useState } from "react";
// import 'rsuite/dist/styles/rsuite-default.css';
import { connect } from "react-redux";
import { PieChart } from "@rsuite/charts";

import {
  onProjectStats,
  allEmpSKillDistStats,
  OnProjectEmpSKillDistStats,
  OffProjectEmpSKillDistStats,
} from "../../redux/actions";
import { Select, MenuItem } from "@mui/material";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = [
  "JAVA Spring",
  "Flutter",
  "React",
  "Python",
  "Angular",
  "GenAI",
  "C#",
  "Design",
];
const noOfEmployees = [400, 300, 600, 250, 150, 210, 170, 320];

const empOnProjectSKillDis = {
  "JAVA Spring": 4,
  Flutter: 4,
  React: 6,
  Python: 3,
  Angular: 5,
  GenAI: 8,
  "C#": 1,
  Desig: 2,
};
const empOffProjectSKillDis = {
  "JAVA Spring": 4,
  Flutter: 4,
  React: 6,
  Python: 3,
  Angular: 5,
  GenAI: 8,
  "C#": 1,
  Desig: 2,
};

const sampleData = [
  ["On Project", 4],
  ["Off Project", 3],
];

const Stats = (props) => {
  const empSkillData = {
    "JAVA Spring": 400,
    Flutter: 300,
    React: 600,
    Python: 250,
    Angular: 150,
    GenAI: 210,
    "C#": 170,
    Design: 320,
  };
  const [allEmpSkillData, setAllEmpSkillData] = useState({});
  useEffect(() => {
    if (props.allEmpSkillStatsData) {
      const temp = {};
      for (const skill of props.allEmpSkillStatsData) {
        const skillName = skill.primary_skill || "Gen AI";
        const skillCount = skill.cnt;

        if (temp[skillName] === undefined) {
          temp[skillName] = skillCount;
        } else {
          temp[skillName] += skillCount;
        }
      }
      setAllEmpSkillData(temp);
    }
  }, [props.allEmpSkillStatsData]);
  const [onProjectEmpSkillData, setonProjectEmpSkillData] = useState({});
  useEffect(() => {
    if (props.onProjectEmpSkillStatsData) {
      const temp = {};
      for (const skill of props.onProjectEmpSkillStatsData) {
        const skillName = skill.primary_skill || "Gen AI";
        const skillCount = skill.cnt;

        if (temp[skillName] === undefined) {
          temp[skillName] = skillCount;
        } else {
          temp[skillName] += skillCount;
        }
      }
      setonProjectEmpSkillData(temp);
    }
  }, [props.onProjectEmpSkillStatsData]);
  const [offProjectEmpSkillData, setOffProjectEmpSkillData] = useState({});
  useEffect(() => {
    if (props.offProjectEmpSkillData) {
      const temp = {};
      for (const skill of props.offProjectEmpSkillData) {
        const skillName = skill.primary_skill || "Gen AI";
        const skillCount = skill.cnt;

        if (temp[skillName] === undefined) {
          temp[skillName] = skillCount;
        } else {
          temp[skillName] += skillCount;
        }
      }
      setOffProjectEmpSkillData(temp);
    }
  }, [props.offProjectEmpSkillData]);

  const data = {
    // labels,
    datasets: [
      {
        label: "Employees",
        // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        data: props.allEmpSkillStatsData ? allEmpSkillData : empSkillData,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  const OnProjectdata = {
    // labels,
    datasets: [
      {
        label: "Employees On Project",
        // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        data: props.onProjectEmpSkillStatsData
          ? onProjectEmpSkillData
          : empOnProjectSKillDis,
        backgroundColor: "rgba(139, 0, 0, 0.7)",
      },
    ],
  };

  const OffProjectdata = {
    // labels,
    datasets: [
      {
        label: "Employees Off Project",
        // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        data: props.offProjectEmpSkillData
          ? offProjectEmpSkillData
          : empOffProjectSKillDis,
        backgroundColor: "rgba(144, 238, 144, 0.7)",
      },
    ],
  };
  const sampleData = [
    [
      "Off Project",
      props.onProjectStatsData
        ? props.onProjectStatsData[0]
          ? props.onProjectStatsData[0]["cnt"]
            ? props.onProjectStatsData[0]["cnt"]
            : 0
          : 0
        : 0,
    ],
    [
      "On Project",
      props.onProjectStatsData
        ? props.onProjectStatsData[1]
          ? props.onProjectStatsData[1]["cnt"]
            ? props.onProjectStatsData[1]["cnt"]
            : 0
          : 0
        : 0,
    ],
    // ["On Project", 4],
    // ["Off Project", 3],
  ];
  const [selectedStat, setSelectedStat] = useState("employeesCount"); // Default selected stat

  useEffect(() => {
    props.onProjectStats();
    props.allEmpSKillDistStats();
    props.OnProjectEmpSKillDistStats();
    props.OffProjectEmpSKillDistStats();
  }, [selectedStat]);

  const handleChange = (event) => {
    setSelectedStat(event.target.value);
  };
  return (
    <Template>
      <center>
        <Select value={selectedStat} onChange={handleChange}>
          <MenuItem value="employeesCount">Employees Count</MenuItem>
          <MenuItem value="employeesOnProject">
            Employees on Project vs On Bench
          </MenuItem>
          <MenuItem value="employeesSkillsDistribution">
            Employees On Project Skills Distribution
          </MenuItem>
          <MenuItem value="employeesOffProjectSkillsDistribution">
            Employees Off Project Skills Distribution
          </MenuItem>
        </Select>
      </center>
      <br />
      <br />
      <center>
        {selectedStat === "employeesCount" && (
          <div>
            <h2>Employees count with given skills in our organisation</h2>

            <div
              style={{
                height: "60vh",
                width: "120vh",
                position: "relative",
                marginBottom: "1%",
                padding: "1%",
              }}
            >
              <Bar options={{ maintainAspectRatio: false }} data={data} />
            </div>
          </div>
        )}
      </center>
      <center>
        {selectedStat === "employeesOnProject" && (
          <div>
            <div
              style={{
                display: "block",
              }}
            >
              <h2>Employees on Project vs On Bench</h2>
              <PieChart height={500} name="PieChart" data={sampleData} />
            </div>
            {/* <h4>Total Employees : </h4> */}
          </div>
        )}
      </center>
      <center>
        {selectedStat === "employeesSkillsDistribution" && (
          <div>
            <h2>Employees On Project Skills Distribution</h2>

            <div
              style={{
                height: "50vh",
                width: "100vh",
                position: "relative",
                marginBottom: "1%",
                padding: "1%",
              }}
            >
              <Bar
                options={{ maintainAspectRatio: false }}
                data={OnProjectdata}
              />
            </div>
          </div>
        )}
        <br />
        <br />
      </center>
      <center>
        {selectedStat === "employeesOffProjectSkillsDistribution" && (
          <div>
            <h2>Employees Off Project Skills Distribution</h2>

            <div
              style={{
                height: "50vh",
                width: "100vh",
                position: "relative",
                marginBottom: "1%",
                padding: "1%",
              }}
            >
              <Bar
                options={{ maintainAspectRatio: false }}
                data={OffProjectdata}
              />
            </div>
          </div>
        )}
        <br />
        <br />
      </center>
    </Template>
  );
};

const mapStateToProps = (state) => {
  return {
    onProjectStatsData: state.testMockApiDataSetup.onProjectStatsData,
    allEmpSkillStatsData: state.testMockApiDataSetup.allEmpSkillStatsData,
    onProjectEmpSkillStatsData:
      state.testMockApiDataSetup.onProjectEmpSkillStatsData,
    offProjectEmpSkillStatsData:
      state.testMockApiDataSetup.offProjectEmpSkillStatsData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onProjectStats: () => dispatch(onProjectStats()),
    allEmpSKillDistStats: () => dispatch(allEmpSKillDistStats()),
    OnProjectEmpSKillDistStats: () => dispatch(OnProjectEmpSKillDistStats()),
    OffProjectEmpSKillDistStats: () => dispatch(OffProjectEmpSKillDistStats()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Stats);
