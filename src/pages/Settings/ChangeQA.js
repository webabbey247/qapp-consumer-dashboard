import React from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import SettingsPageContent from '../../components/Content/SettingsPageContent';


const ChangeQA = () => {
  return (
    <DashboardLayout>
        <SettingsPageContent title="Security Questions" typeUrl="QA" />
      </DashboardLayout>
  )
}

export default ChangeQA;