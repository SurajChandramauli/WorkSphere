import { TEST_MOCK_API_SUCCESS, 

  GET_EMPLOYEE_BY_ID,

  USER_LOGIN_SUCCESS,

  GET_ALL_CAR_POOLS,

  ON_PROJECT_STATS,

  USER_SIGNUP_SUCCESS,

  FETCH_END,

  FETCH_START,
  
  ASK_AI_AGENT_RESPONSE,

  GET_ALL_POST_SUCCESS,

  GET_ALL_FOLLOWING_SUCCESS,

  GET_ALL_FOLLOWERS_SUCCESS,

  GET_SINGLE_POST_DETAILS,

  GET_ALL_PROJECTS_SUCCESS,

  GET_ALL_OWN_CREATED_PROJECTS_SUCCESS,

  GET_ALL_EMP_BY_PROJECT_ID_SUCCESS,

  GET_ALL_PROJECT_BY_EMPID_SUCCESS,

  GET_SINGLE_PROJECT_BY_PID,

  GET_INCENTIVES_POINTS_SUCCESS,

  OFF_PROJECT_EMP_SKILL_DIS_STATS,

  ON_PROJECT_EMP_SKILL_DIS_STATS,

  ALL_EMP_SKILL_DIS_STATS
} from "./ActionTypes";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from "axios";

// var serverURL="https://networking-backend-urtjok3rza-wl.a.run.app"
var serverURL="http://127.0.0.1:8080"

//Test Mock API

export const fetchStart = () => {
  return {
    type : FETCH_START
  }
}
export const fetchEnd = () => {
  return {
    type : FETCH_END
  }
}


export const getTestMockData = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    getTestMockDataByAPI()
      .then((response) => {
        // toast("Successfull")
        // console.log(response.data.data)
        dispatch(getTestMockDataSuccess(response.data.data));
        dispatch(fetchEnd());
      })
      .catch((error) => {
        // console.log(error);
        dispatch(fetchEnd());
      });
  };
};

const getTestMockDataByAPI = () => {
  var result;
  result = axios.get(serverURL+"/allUsers");
  return result;
};

export const getTestMockDataSuccess = (data) => {
  return {
    type: TEST_MOCK_API_SUCCESS,
    data,
  };
};


export const getEmployeeById = (id) => {
  return (dispatch) => {
    dispatch(fetchStart());
    getEmployeeByIdAPI(id)
      .then((response) => {
        // console.log(response.data.data)
        dispatch(getEmployeeByIdSuccess(response.data.data));
        dispatch(fetchEnd());
      })
      .catch((error) => {
        // console.log(error);
        dispatch(fetchEnd());
      });
  };
};

const getEmployeeByIdAPI = (id) => {
  var result;
  result = axios.get(serverURL+"/users/"+id);
  return result;
};

export const getEmployeeByIdSuccess = (data) => {
  return {
    type: GET_EMPLOYEE_BY_ID,
    data,
  };
};


export const userLogin = (data) => {
  return (dispatch) => {
    dispatch(fetchStart());
    userLoginAPI(data)
      .then((response) => {
         toast.success("SignIn Successful")
        dispatch(userLoginSuccess(response.data.data));
        localStorage.setItem('loggedInUserId', response.data.data.userId);
        localStorage.setItem('loggedInUserName', response.data.data.name);
        localStorage.setItem('loggedInUserEmail', response.data.data.deloitteEmail);
        localStorage.setItem('loggedInUserBand', response.data.data.band);
        // console.log(localStorage.getItem('loggedInUserId'))
        dispatch(fetchEnd());
      })
      .catch((error) => {
        toast.error("Please check your Sign In credentials")
        // console.log(error);
        dispatch(fetchEnd());
      });
  };
};

const userLoginAPI = (data) => {
  var result;
  result = axios.post(serverURL+"/login",data);
  return result;
};

export const userLoginSuccess = (data) => {
  return {
    type: USER_LOGIN_SUCCESS,
    data,
  };
};


export const userSignup = (data) => {
  return (dispatch) => {
    dispatch(fetchStart());
    userSignupAPI(data)
      .then((response) => {
        toast.success("Sign Up Successful")
        dispatch(userSignupSuccess(response.data.data));
        localStorage.setItem('loggedInUserId', response.data.data.userId);
        localStorage.setItem('loggedInUserName', response.data.data.name);
        localStorage.setItem('loggedInUserEmail', response.data.data.deloitteEmail);
        localStorage.setItem('loggedInUserBand', response.data.data.band);
        dispatch(fetchEnd());
      })
      .catch((error) => {
        toast.error("Invalid Sign Up details")
        // console.log(error);
        dispatch(fetchEnd());
      });
  };
};

const userSignupAPI = (data) => {
  var result;
  result = axios.post(serverURL+"/addUser",data);
  return result;
};

export const userSignupSuccess = (data) => {
  return {
    type: USER_SIGNUP_SUCCESS,
    data,
  };
};


export const updateUserProfile = (id,data) => {
  return (dispatch) => {
    dispatch(fetchStart());
    updateUserProfileAPI(id,data)
      .then((response) => {
        toast.success("Profile details updated")
        // localStorage.setItem('loggedInUserId', response.data.data.userId);
        // localStorage.setItem('loggedInUserName', response.data.data.name);
   
        // console.log("updated")
        dispatch(fetchEnd());
        window.location.reload();
      })
      .catch((error) => {
        toast.error("Please verify the updated fields")
        // console.log(error);
        dispatch(fetchEnd());
      });
  };
};

const updateUserProfileAPI = (id,data) => {
  var result;
  result = axios.put(serverURL+"/users/"+id,data);
  return result;
};



export const getAllCarPools = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    getAllCarPoolsAPI()
      .then((response) => {
        dispatch(getAllCarPoolSuccess(response.data.data));

        // console.log(response.data.data)
        dispatch(fetchEnd());
      })
      .catch((error) => {
        // console.log(error);
        dispatch(fetchEnd());
      });
  };
};

const getAllCarPoolsAPI = () => {
  var result;
  result = axios.get(serverURL+"/allPools");
  return result;
};

export const getAllCarPoolSuccess = (data) => {
  return {
    type: GET_ALL_CAR_POOLS,
    data,
  };
};


export const createNewPool = (data) => {
  return (dispatch) => {
    dispatch(fetchStart());
    createNewPoolAPI(data)
      .then((response) => {
        toast.success("Car pool created")
        // console.log("Pull Created Successfully")
        dispatch(fetchEnd());
        // window.location.reload();
      })
      .catch((error) => {
        toast.error("Car pool already exists")
        // console.log(error);
        dispatch(fetchEnd());
      });
  };
};

const createNewPoolAPI = (data) => {
  var result;
  result = axios.post(serverURL+"/createPool",data);
  return result;
};


export const onProjectStats = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    onProjectStatsAPI()
      .then((response) => {
        // console.log(response)
        dispatch(onProjectStatsSuccess(response.data));
        dispatch(fetchEnd());
      })
      .catch((error) => {
        // console.log(error);
        dispatch(fetchEnd());
      });
  };
};

const onProjectStatsAPI = () => {
  var result;
  result = axios.get(serverURL+"/onProjectStatistics");
  return result;
};

export const onProjectStatsSuccess = (data) => {
  return {
    type: ON_PROJECT_STATS,
    data,
  };
};

export const allEmpSKillDistStats = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    allEmpSKillDistStatsAPI()
      .then((response) => {
        // console.log(response.data)
        dispatch(allEmpSKillDistStatsSuccess(response.data));
        dispatch(fetchEnd());
      })
      .catch((error) => {
       // console.log(error);
        dispatch(fetchEnd());
      });
  };
};

const allEmpSKillDistStatsAPI = () => {
  var result;
  result = axios.get(serverURL+"/skillStatistics");
  return result;
};

export const allEmpSKillDistStatsSuccess = (data) => {
  return {
    type: ALL_EMP_SKILL_DIS_STATS,
    data,
  };
};

export const OnProjectEmpSKillDistStats = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    OnProjectEmpSKillDistStatsAPI()
      .then((response) => {
        // console.log(response)
        dispatch(OnProjectEmpSKillDistStatsSuccess(response.data));
        dispatch(fetchEnd());
      })
      .catch((error) => {
        //console.log(error);
        dispatch(fetchEnd());
      });
  };
};

const OnProjectEmpSKillDistStatsAPI = () => {
  var result;
  result = axios.get(serverURL+"/onProjectSkillStatistics");
  return result;
};

export const OnProjectEmpSKillDistStatsSuccess = (data) => {
  return {
    type: ON_PROJECT_EMP_SKILL_DIS_STATS,
    data,
  };
};

export const OffProjectEmpSKillDistStats = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    OffProjectEmpSKillDistStatsAPI()
      .then((response) => {
        // console.log(response)
        dispatch(OffProjectEmpSKillDistStatsSuccess(response.data));
        dispatch(fetchEnd());
      })
      .catch((error) => {
        //console.log(error);
        dispatch(fetchEnd());
      });
  };
};

const OffProjectEmpSKillDistStatsAPI = () => {
  var result;
  result = axios.get(serverURL+"/offProjectSkillStatistics");
  return result;
};

export const OffProjectEmpSKillDistStatsSuccess = (data) => {
  return {
    type: OFF_PROJECT_EMP_SKILL_DIS_STATS,
    data,
  };
};


export const reduceCarPoolSeatbyId = (id) => {

  return (dispatch) => {
    dispatch(fetchStart());
    reduceCarPoolSeatbyIdAPI(id)
      .then((response) => {
        // toast.success("Your Request is sent for Car pool to respective employee.")
        toast.success("Confirmation will be sent on booking confirmation")
        // console.log(response)
        dispatch(fetchEnd());
        //  window.location.reload();
      })
      .catch((error) => {
        toast.error("Unable to create booking")
        // console.log(error);
        dispatch(fetchEnd());
      });
  };
};

const reduceCarPoolSeatbyIdAPI = (id) => {
  var result;
  result = axios.put(serverURL+"/updatePoolSeats/"+id);
  return result;
};


export const deletePoolById = (id) => {

  return (dispatch) => {
    dispatch(fetchStart());
    deletePoolByIdAPI(id)
      .then((response) => {
        toast.success("Car pool deleted")
        // console.log(response)
        dispatch(fetchEnd());
        window.location.reload();
      })
      .catch((error) => {
        toast.error("Unable to delete car pool")
        // console.log(error);
        dispatch(fetchEnd());
      });
  };
};

const deletePoolByIdAPI = (id) => {
  var result;
  result = axios.delete(serverURL+"/deletePool/"+id);
  return result;
};

export const askQueryAIAgent = (data) => {
  return (dispatch) => {
    dispatch(fetchStart());
    askQueryAIAgentAPI(data)
      .then((response) => {
        //  toast.success("You are Successfully logedIn")
        dispatch(askQueryAIAgentSuccess(response));
        dispatch(fetchEnd());
      })
      .catch((error) => {
        toast.error("Quest if facing difficulty generating response")
        // console.log(error);
        dispatch(fetchEnd());
      });
  };
};

const askQueryAIAgentAPI = (data) => {
  var result;
  result = axios.post("https://networking-python-backend-urtjok3rza-wl.a.run.app/query-document",data);
  return result;
};

export const askQueryAIAgentSuccess = (data) => {
  return {
    type: ASK_AI_AGENT_RESPONSE,
    data,
  };
};

export const createPosts = (data) => {
  return (dispatch) => {
    dispatch(fetchStart());
    createPostsAPI(data)
      .then((response) => {
         toast.success("Post added")
        // dispatch(askQueryAIAgentSuccess(response));
        dispatch(fetchEnd());
        window.location.reload();
      })
      .catch((error) => {
        toast.error("Unable to add post")
        //console.log(error);
        dispatch(fetchEnd());
      });
  };
};

const createPostsAPI = (data) => {
  var result;
  result = axios.post(serverURL+"/createPost",data);
  return result;
};

export const getAllPosts = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    getAllPostsAPI()
      .then((response) => {
        //  toast.success("You are Successfully logedIn")
        dispatch(getAllPostsSuccess(response.data.data));
     //   console.log(response.data.data)
        dispatch(fetchEnd());
      })
      .catch((error) => {
        toast.error("Unable to fetch posts")
        // console.log(error);
        dispatch(fetchEnd());
      });
  };
};

const getAllPostsAPI = () => {
  var result;
  result = axios.get(serverURL+"/allPosts");
  return result;
};

export const getAllPostsSuccess = (data) => {
  return {
    type: GET_ALL_POST_SUCCESS,
    data,
  };
};

export const getSinglePost = (id) => {
  return (dispatch) => {
    dispatch(fetchStart());
    getSinglePostAPI(id)
      .then((response) => {
        //  toast.success("You are Successfully logedIn")
        dispatch(getSinglePostSuccess(response.data.data));
     //   console.log(response.data.data)
        dispatch(fetchEnd());
      })
      .catch((error) => {
        toast.error("Unable to fetch post")
        // console.log(error);
        dispatch(fetchEnd());
      });
  };
};

const getSinglePostAPI = (id) => {
  var result;
  result = axios.get(serverURL+"/posts/"+id);
  return result;
};

export const getSinglePostSuccess = (data) => {
  return {
    type: GET_SINGLE_POST_DETAILS,
    data,
  };
};

export const updatePostById = (data,id) => {
  return (dispatch) => {
    dispatch(fetchStart());
    updatePostByIdAPI(data,id)
      .then((response) => {
         toast.success("Post updated")
        // dispatch(getAllPostsSuccess(response));
        // console.log(response)
        dispatch(fetchEnd());
      })
      .catch((error) => {
        toast.error("Please check modified fields")
        // console.log(error);
        dispatch(fetchEnd());
      });
  };
};

const updatePostByIdAPI = (data,id) => {
  var result;
  result = axios.put(serverURL+"/updatePost/"+id,data);
  return result;
};

export const deletePostById = (id) => {
  return (dispatch) => {
    dispatch(fetchStart());
    deletePostByIdAPI(id)
      .then((response) => {
         toast.success("Post deleted")
        // dispatch(getAllPostsSuccess(response));
       
        // console.log(response)
        dispatch(fetchEnd());
        window.location.reload();
      })
      .catch((error) => {
        toast.error("Unable to delete post")
        // console.log(error);
        dispatch(fetchEnd());
      });
  };
};

const deletePostByIdAPI = (id) => {
  var result;
  result = axios.delete(serverURL+"/deletePost/"+id);
  return result;
};

export const createFollowConnection = (data) => {
  return (dispatch) => {
    dispatch(fetchStart());
    createFollowConnectionAPI(data)
      .then((response) => {
        
        dispatch(fetchEnd());
        window.location.reload();
        toast.success("User followed")
      })
      .catch((error) => {
        toast.error("Unable to follow user")
       // console.log(error);
        dispatch(fetchEnd());
      });
  };
};

const createFollowConnectionAPI = (data) => {
  var result;
  result = axios.post(serverURL+"/createFollowConnection",data);
  return result;
};

export const getAllFollowers = (id) => {
  return (dispatch) => {
    dispatch(fetchStart());
    getAllFollowersAPI(id)
      .then((response) => {
        //  toast.success("You are Successfully logedIn")
        dispatch(getAllFollowersSuccess(response.data.data));
     //   console.log(response.data.data)
        dispatch(fetchEnd());
      })
      .catch((error) => {
        toast.error("Unable to fetch followers")
        //console.log(error);
        dispatch(fetchEnd());
      });
  };
};

const getAllFollowersAPI = (id) => {
  var result;
  result = axios.get(serverURL+"/getAllFollowers/"+id);
  return result;
};

export const getAllFollowersSuccess = (data) => {
  return {
    type: GET_ALL_FOLLOWERS_SUCCESS,
    data,
  };
};

export const getAllFollowing = (id) => {
  return (dispatch) => {
    dispatch(fetchStart());
    getAllFollowingAPI(id)
      .then((response) => {
        //  toast.success("You are Successfully logedIn")
        dispatch(getAllFollowingSuccess(response.data.data));
     //   console.log(response.data.data)
        dispatch(fetchEnd());
      })
      .catch((error) => {
        toast.error("Unable to fetch following")
        // console.log(error);
        dispatch(fetchEnd());
      });
  };
};

const getAllFollowingAPI = (id) => {
  var result;
  result = axios.get(serverURL+"/getAllFollowing/"+id);
  return result;
};

export const getAllFollowingSuccess = (data) => {
  return {
    type: GET_ALL_FOLLOWING_SUCCESS,
    data,
  };
};

export const upVodeByPostId = (id) => {

  return (dispatch) => {
    dispatch(fetchStart());
    upVodeByPostIdAPI(id)
      .then((response) => {
        // toast.success("Your Request is sent for Car pool to respective employee.")
        toast.success("Post up voted")
        // console.log(response)
        dispatch(fetchEnd());
        //  window.location.reload();
      })
      .catch((error) => {
        toast.error("Unable to up vote post")
        // console.log(error);
        dispatch(fetchEnd());
      });
  };
};

const upVodeByPostIdAPI = (id) => {
  var result;
  result = axios.put(serverURL+"/upVote/"+id);
  return result;
};

export const downVodeByPostId = (id) => {

  return (dispatch) => {
    dispatch(fetchStart());
    downVodeByPostIdAPI(id)
      .then((response) => {
        // toast.success("Your Request is sent for Car pool to respective employee.")
        toast.success("Post down voted")
        // console.log(response)
        dispatch(fetchEnd());
        //  window.location.reload();
      })
      .catch((error) => {
        toast.error("Unable to down vote")
        // console.log(error);
        dispatch(fetchEnd());
      });
  };
};

const downVodeByPostIdAPI = (id) => {
  var result;
  result = axios.put(serverURL+"/downVote/"+id);
  return result;
};


export const addComment = (data) => {
  return (dispatch) => {
    dispatch(fetchStart());
    addCommentAPI(data)
      .then((response) => {
         toast.success("Comment added")
        // dispatch(askQueryAIAgentSuccess(response));
        dispatch(fetchEnd());
        window.location.reload();
      })
      .catch((error) => {
        toast.error("unable to add comment")
        // console.log(error);
        dispatch(fetchEnd());
      });
  };
};

const addCommentAPI = (data) => {
  var result;
  result = axios.post(serverURL+"/addComment",data);
  return result;
};

export const deleteCommentById = (id) => {
  return (dispatch) => {
    dispatch(fetchStart());
    deleteCommentByIdAPI(id)
      .then((response) => {
         toast.success("Comment deleted")
        // dispatch(getAllPostsSuccess(response));
       
        // console.log(response)
        dispatch(fetchEnd());
        window.location.reload();
      })
      .catch((error) => {
        toast.error("Unable to delete comment")
        // console.log(error);
        dispatch(fetchEnd());
      });
  };
};

const deleteCommentByIdAPI = (id) => {
  var result;
  result = axios.delete(serverURL+"/deleteComment/"+id);
  return result;
};

export const updateCommentById = (id,data) => {
  return (dispatch) => {
    dispatch(fetchStart());
    updateCommentByIdAPI(id,data)
      .then((response) => {
         toast.success("Comment edited")
        // dispatch(getAllPostsSuccess(response));
        // console.log(response)
        dispatch(fetchEnd());
        window.location.reload();
      })
      .catch((error) => {
        toast.error("Unable to edit comment")
        // console.log(error);
        dispatch(fetchEnd());
      });
  };
};

const updateCommentByIdAPI = (id,data) => {
  var result;
  result = axios.put(serverURL+"/editComment/"+id,data);
  return result;
};


export const createProject = (data) => {
  return (dispatch) => {
    dispatch(fetchStart());
    createProjectAPI(data)
      .then((response) => {
         toast.success("Project posting created")
        // dispatch(askQueryAIAgentSuccess(response));
        dispatch(fetchEnd());
        window.location.reload();
      })
      .catch((error) => {
        toast.error("Unable to create project posting")
        // console.log(error);
        dispatch(fetchEnd());
      });
  };
};

const createProjectAPI = (data) => {
  var result;
  result = axios.post(serverURL+"/createProject",data);
  return result;
};

export const getAllProjects = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    getAllProjectsAPI()
      .then((response) => {
        //  toast.success("You are Successfully logedIn")
        dispatch(getAllProjectsSuccess(response.data.data));
       //console.log(response.data.data)
        dispatch(fetchEnd());
      })
      .catch((error) => {
        toast.error("Unable to fetch all projects")
        // console.log(error);
        dispatch(fetchEnd());
      });
  };
};

const getAllProjectsAPI = () => {
  var result;
  result = axios.get(serverURL+"/allProjects");
  return result;
};

export const getAllProjectsSuccess = (data) => {
  return {
    type: GET_ALL_PROJECTS_SUCCESS,
    data,
  };
};

export const deleteProjectById = (id) => {
  return (dispatch) => {
    dispatch(fetchStart());
    deleteProjectByIdAPI(id)
      .then((response) => {
         toast.success("Project posting deleted")
        // dispatch(getAllPostsSuccess(response));
       
        // console.log(response)
        dispatch(fetchEnd());
        window.location.reload();
      })
      .catch((error) => {
        toast.error("Unable to delete project posting")
        // console.log(error);
        dispatch(fetchEnd());
      });
  };
};

const deleteProjectByIdAPI = (id) => {
  var result;
  result = axios.delete(serverURL+"/deleteProject/"+id);
  return result;
};

export const getAllOwnCreatedProjects = (id) => {
  return (dispatch) => {
    dispatch(fetchStart());
    getAllOwnCreatedProjectsAPI(id)
      .then((response) => {
        //  toast.success("You are Successfully logedIn")
        dispatch(getAllOwnCreatedProjectsSuccess(response.data.data));
       //console.log(response.data.data)
        dispatch(fetchEnd());
      })
      .catch((error) => {
        toast.error()
        // console.log(error);
        dispatch(fetchEnd());
      });
  };
};

const getAllOwnCreatedProjectsAPI = (id) => {
  var result;
  result = axios.get(serverURL+"/allProjects/"+id);
  return result;
};

export const getAllOwnCreatedProjectsSuccess = (data) => {
  return {
    type: GET_ALL_OWN_CREATED_PROJECTS_SUCCESS,
    data,
  };
};

export const applyOnProject = (userId,projectId) => {

  return (dispatch) => {
    dispatch(fetchStart());
    applyOnProjectAPI(userId,projectId)
      .then((response) => {
        // toast.success("Your Request is sent for Car pool to respective employee.")
        toast.success("Applied successfully")
        // console.log(response)
        dispatch(fetchEnd());
        //  window.location.reload();
      })
      .catch((error) => {
        toast.error("You have already applied")
      //  console.log(error);
        dispatch(fetchEnd());
      });
  };
};

const applyOnProjectAPI = (userId,projectId) => {
  var result;
  result = axios.post(serverURL+"/nominateCandidate/"+userId+"/"+projectId);
  return result;
};

export const getAllEmployessByProjectId = (id) => {
  return (dispatch) => {
    dispatch(fetchStart());
    getAllEmployessByProjectIdAPI(id)
      .then((response) => {
        //  toast.success("You are Successfully logedIn")
        dispatch(getAllEmployessByProjectIdSuccess(response.data.data));
       //console.log(response.data.data)
        dispatch(fetchEnd());
      })
      .catch((error) => {
        toast.error("Unable to fetch employees")
        // console.log(error);
        dispatch(fetchEnd());
      });
  };
};

const getAllEmployessByProjectIdAPI = (id) => {
  var result;
  result = axios.get(serverURL+"/getAllUsersByProjectId/"+id);
  return result;
};

export const getAllEmployessByProjectIdSuccess = (data) => {
  return {
    type: GET_ALL_EMP_BY_PROJECT_ID_SUCCESS,
    data,
  };
};

export const getAllProjectsAppliedByOwn = (id) => {
  return (dispatch) => {
    dispatch(fetchStart());
    getAllProjectsAppliedByOwnAPI(id)
      .then((response) => {
        //  toast.success("You are Successfully logedIn")
        dispatch(getAllProjectsAppliedByOwnSuccess(response.data.data));
       //console.log(response.data.data)
        dispatch(fetchEnd());
      })
      .catch((error) => {
        toast.error("Unable to fetch project posting")
        // console.log(error);
        dispatch(fetchEnd());
      });
  };
};

const getAllProjectsAppliedByOwnAPI = (id) => {
  var result;
  result = axios.get(serverURL+"/getAllProjectsByuserId/"+id);
  return result;
};

export const getAllProjectsAppliedByOwnSuccess = (data) => {
  return {
    type: GET_ALL_PROJECT_BY_EMPID_SUCCESS,
    data,
  };
};

export const getSingleProjectByPId = (id) => {
  return (dispatch) => {
    dispatch(fetchStart());
    getSingleProjectByPIdAPI(id)
      .then((response) => {
        //  toast.success("You are Successfully logedIn")
        dispatch(getSingleProjectByPIdSuccess(response.data.data));
       //console.log(response.data.data)
        dispatch(fetchEnd());
      })
      .catch((error) => {
        toast.error("Unable to fetch project posting")
        // console.log(error);
        dispatch(fetchEnd());
      });
  };
};

const getSingleProjectByPIdAPI = (id) => {
  var result;
  result = axios.get(serverURL+"/project/"+id);
  return result;
};

export const getSingleProjectByPIdSuccess = (data) => {
  return {
    type: GET_SINGLE_PROJECT_BY_PID,
    data,
  };
};

export const onSubmitEditProject = (id,data) => {
  return (dispatch) => {
    dispatch(fetchStart());
    onSubmitEditProjectAPI(id,data)
      .then((response) => {
        toast.success("Project details updated")
        // localStorage.setItem('loggedInUserId', response.data.data.userId);
        // localStorage.setItem('loggedInUserName', response.data.data.name);
        dispatch(fetchEnd());
        window.location.reload();
      })
      .catch((error) => {
        toast.error("Unable to update project details")
        //console.log(error);
        dispatch(fetchEnd());
      });
  };
};

const onSubmitEditProjectAPI = (id,data) => {
  var result;
  result = axios.put(serverURL+"/updateProject/"+id,data);
  return result;
};

export const getIncentivePoints = (id) => {
  return (dispatch) => {
    dispatch(fetchStart());
    getIncentivePointsAPI(id)
      .then((response) => {
        //  toast.success("You are Successfully logedIn")
        dispatch(getIncentivePointsSuccess(response.data.data));
       //console.log(response.data.data)
        dispatch(fetchEnd());
      })
      .catch((error) => {
      //  toast.error("Some error occured")
        //console.log(error);
        dispatch(fetchEnd());
      });
  };
};

const getIncentivePointsAPI = (id) => {
  var result;
  result = axios.get(serverURL+"/points/"+id);
  return result;
};

export const getIncentivePointsSuccess = (data) => {
  return {
    type: GET_INCENTIVES_POINTS_SUCCESS,
    data,
  };
};


export const unfollowEmployee = (eId,logId) => {

  return (dispatch) => {
    dispatch(fetchStart());
    unfollowEmployeeAPI(eId,logId)
      .then((response) => {
        toast.success("Unfollowed user")
        // console.log(response)
        dispatch(fetchEnd());
        window.location.reload();
      })
      .catch((error) => {
        toast.error("Unable to unfollow user")
       // console.log(error);
        dispatch(fetchEnd());
      });
  };
};

const unfollowEmployeeAPI = (eId,logId) => {
  var result;
  result = axios.delete(serverURL+"/unfollow/"+eId+"/"+logId);
  return result;
};