import React from 'react';
import FormHeader from '@/components/backoffice/FormHeader';
import CustomerForm from '@/components/backoffice/CustomerForm';
import {getData} from '@/lib/getData';

export default async function updateCustomer({params:{id}}) {
  const user = await getData(`users/${id}`)
  return (
    <div>
        <FormHeader title="Update Customer" />
        <CustomerForm user={user} />
    </div>
  )
}
