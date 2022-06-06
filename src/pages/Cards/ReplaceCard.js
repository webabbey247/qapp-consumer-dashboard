import React from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import CardOperationsPage from '../../components/Content/CardOperationsPage';

const ReplaceCard = () => {
  return (
    <DashboardLayout>
        <CardOperationsPage title="Replace Card" typeUrl="Replace" />
      </DashboardLayout>
  )
}

export default ReplaceCard;