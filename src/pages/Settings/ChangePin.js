import React from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import SettingsPageContent from '../../components/Content/SettingsPageContent';

const ChangePin = () => {
  return (
    <DashboardLayout>
        <SettingsPageContent title="Change Pin" typeUrl="Pin" />
      </DashboardLayout>
  )
}

export default ChangePin;