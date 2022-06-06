import React from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import CardOperationsPage from '../../components/Content/CardOperationsPage';

const BlockCard = () => {
  return (
    <DashboardLayout>
        <CardOperationsPage title="Block Card" typeUrl="Block" />
      </DashboardLayout>
  )
}

export default BlockCard;