import React from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import OperationSummary from '../../components/Content/Operations/OperationSummary';

const TransferSummary = () => {
  return (
    <>
       <DashboardLayout>
      <OperationSummary typeUrl="transfer" />
      </DashboardLayout>
    </>
  )
}

export default TransferSummary;