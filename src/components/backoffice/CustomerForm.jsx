'use client'

import React, { useState } from "react";
import TextInput from '@/components/Forminputs/TextInput';
import {useForm} from 'react-hook-form';
import SubmitButton from "@/components/Forminputs/SubmitButton";
import TextareaInput from "@/components/Forminputs/TextareaInput";
import ImageInput from "@/components/Forminputs/ImageInput"
import {makePostRequest, makePutRequest} from '@/lib/apiRequest'
import ToggleInput from "@/components/Forminputs/ToggleInput";
import { useRouter } from "next/navigation";
import ArrayItemsInput from "@/components/Forminputs/ArrayItemsInput"
import generateUserCode from "@/lib/generateUserCode"

export default function CustomerForm({user}) {
  console.log(user);
  const [loading, setLoading] = useState(false);  
  const [imageUrl, setImageUrl] = useState(""); 
  const {
    register, 
    reset, 
    watch,
    handleSubmit, 
    formState:{errors},
} = useForm({
      defaultValues : {
        // isActive : true,
        ...user,
      },
    });
    const router = useRouter()
    function redirect(){
      router.push('/dashboard/customers');
    }  
  // const isActive = watch('isActive');
  async function onSubmit(data){   
    
    // const code = generateUserCode("LFF", data.name);
    // data.code = code; 
    data.userId = user.id;
    // data.products = products; 
    data.profileImage = imageUrl;  
    console.log(data);
    makePutRequest(
      setLoading, 
      `api/customers/${user.id}`, 
      data, 
      'Customer Profile', 
      redirect,
      reset, 
      );    
  }
  return (    
    <form onSubmit={handleSubmit(onSubmit)} 
      className="w-full max-w-3xl mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      
      <h2 className="text-xl font-semibold mb-4 dark:text-lime-400">
        Personal Details
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 border-b border-gray-700 pb-10">
      <TextInput
          label="Full Name"
          name="name"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Username"
          name="userName"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Date of Birth"
          name="dateOfBirth"
          type="date"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="First Name"
          name="firstName"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Last Name"
          name="lastName"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Email Address"
          name="email"
          type="email"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Phone Number"
          name="phone"
          register={register}
          errors={errors}
          className="w-full"
        />
        <ImageInput 
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="customerProfileUploader"
            label="Cutomer Profile Image"
        />  
      </div>

      <h2 className="text-xl font-semibold mb-4 dark:text-lime-400 pt-10">
        Shipping Details
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="Street Address"
          name="streetAddress"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="City"
          name="city"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Country"
          name="country"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="District"
          name="district"
          register={register}
          errors={errors}
          className="w-full"
        />        
       
      </div>

      <SubmitButton 
      isLoading={loading} 
      buttonTitle='Update Cutomer' 
      loadingButtonTitle='Creating Cutomer please wait...' 
      />
      </form>
  );
}
