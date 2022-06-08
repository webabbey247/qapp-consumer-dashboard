import React from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import OperationSummary from '../../components/Content/Operations/OperationSummary';

const DepositSummary = () => {
    
  return (
    <>
       <DashboardLayout>
      <OperationSummary typeUrl="deposit" />
      </DashboardLayout>
    </>
  )
}

export default DepositSummary;