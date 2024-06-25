import React from 'react';
import FormHeader from '@/components/backoffice/FormHeader';
import NewFarmerForm from '@/components/backoffice/NewFarmerForm';

export default function updateFarmer({params:{id}}) {
  return (
    <div>
        <FormHeader title="New Farmer" />
        <NewFarmerForm />
    </div>
  )
}
