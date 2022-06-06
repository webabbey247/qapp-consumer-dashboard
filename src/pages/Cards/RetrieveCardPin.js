import React from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import CardOperationsPage from '../../components/Content/CardOperationsPage';

const RetrieveCardPin = () => {
  return (
    <DashboardLayout>
        <CardOperationsPage title="Retrieve Card Pin" typeUrl="Retrieve" />
      </DashboardLayout>
  )
}

export default RetrieveCardPin;