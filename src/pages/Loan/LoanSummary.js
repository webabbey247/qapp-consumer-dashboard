import React from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import LoanFinalSummary from '../../components/Content/Loans/LoanFinalSummary';
const LoanSummary = () => {
    
  return (
    <>
       <DashboardLayout>
      <LoanFinalSummary  />
      </DashboardLayout>
    </>
  )
}

export default LoanSummary;