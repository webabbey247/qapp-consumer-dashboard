import React from 'react';
import LoanPage from '../../components/Content/LoanPage';
import DashboardLayout from '../../components/Layout/DashboardLayout';

const Loan = () => {
  return (
    <DashboardLayout>
        <LoanPage title="Loans" />
      </DashboardLayout>
  )
}

export default Loan;