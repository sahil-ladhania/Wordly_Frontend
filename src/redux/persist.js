import { combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'; 
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
    // reducers
})

const persistConfig = {
    key : 'root',
    storage,
    whitelist : []
}

const persistedReducer = persistReducer(persistConfig , rootReducer);

const createPersistor = (store) => persistStore(store);

export {persistedReducer , createPersistor};