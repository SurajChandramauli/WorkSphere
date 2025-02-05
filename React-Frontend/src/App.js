import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditProfile from "./views/EditProfile/editProfile";
import ViewProfile from "./views/ViewProfile/viewProfile";
import SignUp from "./views/SignUp/signUp";
import FloorPlan from "./views/FloorPlan/FloorPlan";
import AIChatBot from "./views/AIChatBot/AIChatBot";
import  Home  from "./views/Home/Home";
import  Stats  from "./views/Stats/Stats";
import AllEmployees from "./views/AllEmployees/AllEmployes";
import  StatsPieChart  from "./views/PieChart/StatsPieChart";
import LoginPage from "./views/SignUp/loginPage";
import OtherViewProfile from "./views/OtherViewProfile/otherViewProfile";
import BangaloreFloorPlan from "./views/BangaloreFloorPlan/BangaloreFloorPlan";
import GurugramFloorPlan from "./views/GurugramFloorPlan/GurugramFloorPlan";
import CarPooling from "./views/CarPooling/CarPooling";

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import {Helmet} from "react-helmet";
import SinglePostDetails from "./views/SinglePostDetails/SinglePostDetails";
import ViewAllProjects from "./views/ViewAllProjects/ViewAllProjects";
import ViewOwnCreatedProject from "./views/ViewOwnCreatedProject/ViewOwnCreatedProject";
import EmployeesApplied from "./views/EmployeesApplied/EmployeesApplied";
import CreateProject from "./views/CreateProject/CreateProject";
import OwnAppliedProjects from "./views/OwnAppliedProjects/OwnAppliedProjects";
import EditProject from "./views/EditProject/EditProject";
import './index.css';

// import {PersistGate} from 'redux-persist/integration/react'
function App() {
  return (
    <Provider store={store}>
            <Helmet>
                <title>Connekt</title>
            </Helmet>
      <Router>
        <Routes>
        
          <Route exact path="/carPooling" element={<CarPooling />} /> 
          <Route exact path="/askAIAgent" element={<AIChatBot/>} />
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/viewProfile" element={<ViewProfile />} />
          <Route exact path="/otherViewProfile/:id" element={<OtherViewProfile />} />

          <Route exact path="/editProfile/:id" element={<EditProfile />} />
          <Route exact path="/allEmployees" element={<AllEmployees />} />
          <Route exact path="/stats" element={<Stats />} />
          <Route exact path="/onProjectStats" element={<StatsPieChart />} />

          <Route exact path="/signUp" element={<SignUp />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/postDetails/:id" element={<SinglePostDetails />} />
          <Route exact path="/floorPlans" element={<FloorPlan />} />
          <Route exact path="/bangaloreFloorPlans" element={<BangaloreFloorPlan />} />
          <Route exact path="/gurugramFloorPlans" element={<GurugramFloorPlan />} />
         
          <Route exact path="/viewAllProjects" element={<ViewAllProjects/>} />

          <Route exact path="/yourCretedProjects/:id" element={<ViewOwnCreatedProject/>} />

          <Route exact path="/ViewEmployeesApplied/:id" element={<EmployeesApplied/>} />
        
          <Route exact path="/createProject" element={<CreateProject/>} />

          <Route exact path="/ownAppliedProject/:id" element={<OwnAppliedProjects/>} />

          <Route exact path="/editProject/:id" element={<EditProject/>} />

        </Routes>
      </Router>
      <ToastContainer/>
    </Provider>
  );
}

export default App;
