import {
  TEST_MOCK_API_SUCCESS,
  GET_EMPLOYEE_BY_ID,
  USER_LOGIN_SUCCESS,
  GET_ALL_CAR_POOLS,
  ON_PROJECT_STATS,
  USER_SIGNUP_SUCCESS,
  FETCH_END,
  FETCH_START,
  ASK_AI_AGENT_RESPONSE,
  GET_ALL_POST_SUCCESS,
  GET_ALL_FOLLOWERS_SUCCESS,
  GET_ALL_FOLLOWING_SUCCESS,
  GET_SINGLE_POST_DETAILS,
  GET_ALL_PROJECTS_SUCCESS,
  GET_ALL_OWN_CREATED_PROJECTS_SUCCESS,
  GET_ALL_EMP_BY_PROJECT_ID_SUCCESS,
  GET_ALL_PROJECT_BY_EMPID_SUCCESS,
  GET_SINGLE_PROJECT_BY_PID,
  GET_INCENTIVES_POINTS_SUCCESS,
  ALL_EMP_SKILL_DIS_STATS,
  ON_PROJECT_EMP_SKILL_DIS_STATS,
  OFF_PROJECT_EMP_SKILL_DIS_STATS,
} from "../../actions/EmployeeAction/ActionTypes";

const initialState = {
  loading: false,
  myMockData: [],
  singleEmployeeData: [],
  loggedInUserData: [],
  allCarPoolsData: [],
  onProjectStatsData: [],
  signedUpUserData: [],
  AIresponse: [],
  allPostsData: [],
  allFollowersList: [],
  allFollowingList: [],
  singlePostDetailsData: [],
  getAllProjectsData: [],
  allOwnCreatedProjects: [],
  allEmployeesByProjectIdData: [],
  allProjectsByAppledByOwn: [],
  singleProjectDetail: [],
  empIncentivePointData: [],
  allEmpSkillStatsData: [],
  onProjectEmpSkillStatsData: [],
  offProjectEmpSkillStatsData: [],
};

const EmployeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST_MOCK_API_SUCCESS:
      return {
        ...state,
        myMockData: action.data,
      };

    case GET_EMPLOYEE_BY_ID:
      return {
        ...state,
        singleEmployeeData: action.data,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loggedInUserData: action.data,
      };
    case GET_ALL_CAR_POOLS:
      return {
        ...state,
        allCarPoolsData: action.data,
      };
    case ON_PROJECT_STATS:
      return {
        ...state,
        onProjectStatsData: action.data,
      };
    case USER_SIGNUP_SUCCESS:
      return {
        ...state,
        signedUpUserData: action.data,
      };

    case FETCH_END:
      return {
        ...state,
        loading: false,
      };
    case FETCH_START:
      return {
        ...state,
        loading: true,
      };

    case ASK_AI_AGENT_RESPONSE:
      return {
        ...state,
        AIresponse: action.data,
      };
    case GET_ALL_POST_SUCCESS:
      return {
        ...state,
        allPostsData: action.data,
      };
    case GET_ALL_FOLLOWING_SUCCESS:
      return {
        ...state,
        allFollowersList: action.data,
      };
    case GET_ALL_FOLLOWERS_SUCCESS:
      return {
        ...state,
        allFollowingList: action.data,
      };
    case GET_SINGLE_POST_DETAILS:
      return {
        ...state,
        singlePostDetailsData: action.data,
      };
    case GET_ALL_PROJECTS_SUCCESS:
      return {
        ...state,
        getAllProjectsData: action.data,
      };

    case GET_ALL_OWN_CREATED_PROJECTS_SUCCESS:
      return {
        ...state,
        allOwnCreatedProjects: action.data,
      };

    case GET_ALL_EMP_BY_PROJECT_ID_SUCCESS:
      return {
        ...state,
        allEmployeesByProjectIdData: action.data,
      };

    case GET_ALL_PROJECT_BY_EMPID_SUCCESS:
      return {
        ...state,
        allProjectsByAppledByOwn: action.data,
      };

    case GET_SINGLE_PROJECT_BY_PID:
      return {
        ...state,
        singleProjectDetail: action.data,
      };

    case GET_INCENTIVES_POINTS_SUCCESS:
      return {
        ...state,
        empIncentivePointData: action.data,
      };

    case ALL_EMP_SKILL_DIS_STATS:
      return {
        ...state,
        allEmpSkillStatsData: action.data,
      };

    case ON_PROJECT_EMP_SKILL_DIS_STATS:
      return {
        ...state,
        onProjectEmpSkillStatsData: action.data,
      };

    case OFF_PROJECT_EMP_SKILL_DIS_STATS:
      return {
        ...state,
        offProjectEmpSkillStatsData: action.data,
      };
    default:
      return state;
  }
};

export default EmployeeReducer;
