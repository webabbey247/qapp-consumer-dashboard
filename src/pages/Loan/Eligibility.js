import React from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import EligibilityContent from '../../components/Content/Loans/EligibilityContent';

const Eligibility = () => {    
  return (
    <>
       <DashboardLayout>
      <EligibilityContent />
      </DashboardLayout>
    </>
  )
}

export default Eligibility;