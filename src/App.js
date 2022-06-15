import React from "react";
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from "./GlobalCss";

// @import Auth Pages
import { Login, Register, ForgetPassword, NewPassword, MobileBanking } from "./pages/Auth";

// @import Dashboard Pages
import { NoMatch, Homepage, Loan, Eligibility, LoanSummary, ChangeQA, ChangePin, ChangePassword, CardGrid, BlockCard, ReplaceCard, RetrieveCardPin, Deposit, Withdrawal, WithdrawalSummary, DepositSummary, Transfer, TransferSummary, TransactionsList } from "./pages";



function App() {
  return (
    <Router>
      <GlobalStyle />
      <ToastContainer />
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/auth/register' element={<Register />} />
        <Route exact path='/auth/forget-password' element={<ForgetPassword />} />
        <Route exact path='/auth/new-password/:token' element={<NewPassword />} />

        <Route exact path='/auth/activate-online-banking' element={<MobileBanking />} />
        <Route exact path='/auth/activate-online-banking/:token' element={<MobileBanking />} />

        <Route exact path='/dashboard' element={<Homepage />} />

        <Route exact path='/dashboard/settings/update-password' element={<ChangePassword />} />
        <Route exact path='/dashboard/settings/update-transaction-pin' element={<ChangePin />} />
        <Route exact path='/dashboard/settings/update-security-questions' element={<ChangeQA />} />

        <Route exact path='/dashboard/deposit' element={<Deposit />} />
        <Route exact path='/dashboard/deposit/summary' element={<DepositSummary />} />

        <Route exact path='/dashboard/withdrawal' element={<Withdrawal />} />
        <Route exact path='/dashboard/withdrawal/summary' element={<WithdrawalSummary />} />

        <Route exact path='/dashboard/transfer' element={<Transfer />} />
        <Route exact path='/dashboard/transfer/summary' element={<TransferSummary />} />


        <Route exact path='/dashboard/loans' element={<Loan />} />
        <Route exact path='/dashboard/loans/eligibility' element={<Eligibility />} />
        <Route exact path='/dashboard/loans/summary' element={<LoanSummary />} />

        <Route exact path='/dashboard/cards' element={<CardGrid />} />

        <Route exact path='/dashboard/cards/retrieve-card-pin' element={<RetrieveCardPin />} />
        <Route exact path='/dashboard/cards/replace-card' element={<ReplaceCard />} />
        <Route exact path='/dashboard/cards/block-card' element={<BlockCard />} />

        {/* <Redirect from="/dashboard/transactions/:accountId" to="/dashboard/transactions/:accountId/:pageNumber" /> */}
        <Route exact path='/dashboard/transactions/:accountID/:pageNumber' element={<TransactionsList />} />

        <Route exact path='*' element={<NoMatch />} />


        {/* <Route exact path='/loans' element={<Loan />} />
        <Route exact path='/cards' element={<CardGrid />} />
      <Route exact path='/settings/update-transaction-pin' element={<ChangePin />} /> */}
        {/*
       
      
        */}
        {/* <Route path='/dashboard' element={<Homepage />}/>
       
        <Route path='/settings' element={<ChangePassword />} />
        <Route path='/dashboard/settings/update-password' element={<ChangePassword />} />
        <Route path='/settings/update-transaction-pin' element={<ChangePin />} />
        */}
      </Routes>
    </Router>
  );
}

export default App;
