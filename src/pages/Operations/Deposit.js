import React from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import DepositContent from '../../components/Content/Operations/DepositContent';

const Deposit = () => {

  return (
    <>
       <DashboardLayout>
      <DepositContent />
      </DashboardLayout>
    </>
  )
}

export default Deposit;