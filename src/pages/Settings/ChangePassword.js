import React from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import SettingsPageContent from '../../components/Content/SettingsPageContent';

const ChangePassword = () => {
  return (
    <>
       <DashboardLayout>
       <SettingsPageContent title="Change Password" typeUrl="Password" />
      </DashboardLayout>
    </>
  )
}

export default ChangePassword;