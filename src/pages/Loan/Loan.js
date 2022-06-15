import React from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import LoanContent from '../../components/Content/Loans/LoanContent';
import { apiLoan } from '../../utils/config';

const Loan = () => {  
  const [loans, setLoans] = React.useState('')

  const getLoans = () => {
    apiLoan.get("/loans").then((res) => {
        if(res.data.success === false) {
          console.log(res.data ? res.data : "");
        } else {   
          setLoans(res.data)
          // localStorage.setItem("loans", JSON.stringify(res.data));
          console.log("Loan query checker", res.data ? res.data : "");
        }
    });
};

  React.useEffect(() => {
    getLoans()
  },[]);

  return (
    <DashboardLayout>
        <LoanContent data={loans} title="Loans" />
      </DashboardLayout>
  )
}

export default Loan;