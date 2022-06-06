import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Register, ForgetPassword, NewPassword, MobileBanking} from "./pages/Auth";
import { NoMatch, Homepage, Loan, ChangeQA, ChangePin, ChangePassword, CardGrid, BlockCard, ReplaceCard, RetrieveCardPin } from "./pages";
import { GlobalStyle } from "./GlobalCss";

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
