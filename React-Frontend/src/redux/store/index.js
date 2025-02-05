import {createStore,applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import RootReducer from '../reducers'
// import {persistStore} from 'redux-persist';


export const store = createStore(

    RootReducer,
    applyMiddleware(reduxThunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 

);

// export const persistor = persistStore(store);
export default {store};