import FormHeader from '@/components/backoffice/FormHeader';
import NewTrainingForm from "@/components/backoffice/NewTrainingForm";
import {getData} from '@/lib/getData'; 

export default async function newTraining() {
  const categoriesData = await getData("categories");  
  const categories = categoriesData.map((category)=>{
    return{
      id: category.id,
      title: category.title,
    };
  }); 
  return (
    <div>
      <FormHeader title ='New Training' />
      <NewTrainingForm 
        categories={categories} 
        updateData={training}
      />
    </div>
  );
}
