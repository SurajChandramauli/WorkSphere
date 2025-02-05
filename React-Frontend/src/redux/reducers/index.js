import { combineReducers } from "redux";
import { EmployeeReducer } from "./EmployeeReducer";
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// export default combineReducers({
//     testMockApiDataSetup: EmployeeReducer
// });
const persistConfig = {key:"auth", storage: storage, whitelist: ['testMockApiDataSetup']};
const RootReducer = combineReducers({
    testMockApiDataSetup: EmployeeReducer
});

export default persistReducer(persistConfig,RootReducer);

