import Link from 'next/link';
import Hero from '@/components/frontend/Hero';
import MarketList from '@/components/frontend/MarketList';
import CategoryList from '@/components/frontend/CategoryList';
import CommunityTrainings from '@/components/frontend/CommunityTrainings' 
import { getData } from '@/lib/getData';
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOptions';

export default async function Home() {  
  const categoriesData = await getData('categories');  
  // const categories = categoriesData.filter((category)=>{
  //   return category.products.length > 3;
  // }); 
  const categories = await categoriesData.filter(category => category.products.length > 3);
  const trainings = await getData("trainings");
  const session = await getServerSession(authOptions);
  // console.log(categories);
  console.log(session?.user);
  return (
    <div className='min-h-screen'>
      <Hero />
      <MarketList />
      
      {categories.map((category,i)=>{
          return(
            <div key={i} className="py-8">
              <CategoryList isMarketPage={false} category={category} />
            </div>
          );
        })}
              
      <CommunityTrainings title='Featured Trainings' trainings={trainings.slice(0, 3)} />      
    </div>
  )
}
