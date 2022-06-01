import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {NoMatch, Homepage, Login, ChangeQA, ChangePin, ChangePassword} from "./pages";
import {GlobalStyle} from "./GlobalCss";



function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
      <Route path='/' element={<Homepage />} />
       <Route path='/login' element={<Login />} />
       <Route path='/settings' element={<ChangePassword />} />
       <Route path='/settings/update-password' element={<ChangePassword />} />       
       <Route path='/settings/update-transaction-pin' element={<ChangePin />} />       
       <Route path='/settings/update-security-questions' element={<ChangeQA />} />       
      
        {/* <Route path='/settings/update-password' element={<ChangePassword />}>
          <Route path='/settings/update-password' element={<ChangePassword />} />
          <Route path='/settings/update-transaction-pin' element={<ChangePin />} />
          <Route path='/settings/security-questions' element={<ChangeQA />} />
        </Route> */}
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
