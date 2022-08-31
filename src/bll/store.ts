import {combineReducers, legacy_createStore as createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "../utils/localStorage";


const rootReducer = combineReducers({
    counter: counterReducer
    })

const persistedState = loadState();

export const store = createStore(rootReducer, persistedState)

store.subscribe(()=>{
    saveState({counter: store.getState().counter})
})


export type StateType = ReturnType<typeof rootReducer>