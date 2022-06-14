import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "./src/reducers/Slice/TransactionsSlice";
// import registrationReducer from "./src/reducers/Slice/registrationReducer";


export const store = configureStore({
    reducer: {            
        // registration: registrationReducer,     
        transactions: transactionsReducer,
        // login: loginReducer,
        // banks: bankReducer,
        // agents: mainReducer,
    },
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({
    //   serializableCheck: false,
    // }), 
});