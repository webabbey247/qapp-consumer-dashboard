import React from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import OperationSummary from '../../components/Content/Operations/OperationSummary';

const WithdrawalSummary = () => {
  return (
    <>
       <DashboardLayout>
      <OperationSummary typeUrl="withdrawal" />
      </DashboardLayout>
    </>
  )
}

export default WithdrawalSummary;