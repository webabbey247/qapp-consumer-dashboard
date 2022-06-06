import React from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import CardPage from '../../components/Content/CardPage';

const CardGrid = () => {
  return (
    <DashboardLayout>
        <CardPage title="Cards" />
      </DashboardLayout>
  )
}

export default CardGrid;