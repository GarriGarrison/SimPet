import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from './reducers/root.reducer'
import { initialState } from './state';
import thunk from 'redux-thunk'

export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))
