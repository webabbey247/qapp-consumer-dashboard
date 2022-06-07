import React from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalCss";

// @import Auth Pages
import { Login, Register, ForgetPassword, NewPassword, MobileBanking} from "./pages/Auth";

// @import Dashboard Pages
import { NoMatch, Homepage, Loan, ChangeQA, ChangePin, ChangePassword, CardGrid, BlockCard, ReplaceCard, RetrieveCardPin } from "./pages";

// axios.defaults.headers.post["Content-Type"] = "application/json";
// axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.withCredentials = true;
// axios.defaults.baseURL = "http://qapp-customer-auth.eu-west-1.elasticbeanstalk.com/api/v1/auth";
axios.defaults.headers.post["Locale"] = { "id": "en", "country": "US", "name": "English - LTR", "direction": "ltr" };
axios.defaults.headers.post["Bank-ID"] = "f4934971-0352-4bc2-8596-e6ea877cbdaa";
axios.defaults.headers.post["Platform"] = "WEB";
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("b_token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>

        <Route path='/' element={<Login />} />
        <Route path='/auth/register' element={<Register />} />
        <Route path='/auth/forget-password' element={<ForgetPassword />} />
        <Route path='/auth/new-password' element={<NewPassword />} />
        <Route path='/auth/activate-online-banking' element={<MobileBanking />} />
        <Route path='*' element={<NoMatch />} />

        {/* <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      /> */}

        <Route path='/dashboard' element={<Homepage />} />
        <Route path='/loans' element={<Loan />} />
        <Route path='/cards' element={<CardGrid />} />
        <Route path='/cards/retrieve-card-pin' element={<RetrieveCardPin />} />
        <Route path='/cards/replace-card' element={<ReplaceCard />} />
        <Route path='/cards/block-card' element={<BlockCard />} />
        <Route path='/settings' element={<ChangePassword />} />
        <Route path='/settings/update-password' element={<ChangePassword />} />
        <Route path='/settings/update-transaction-pin' element={<ChangePin />} />
        <Route path='/settings/update-security-questions' element={<ChangeQA />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
