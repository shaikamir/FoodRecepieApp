import React, { useContext } from 'react';
import { GlobalContextu } from '../Context/Contextu';
import RecepieItem from '../Recepie-item/RecepieItem';


const Home = () => {
  const {productsList, loading} = useContext(GlobalContextu);

console.log("In Home", productsList)

  return (
    <div className='p-7 flex flex-wrap justify-center'>
      {
        productsList && productsList.length > 0 ? 
          productsList.map((eachItem) => <RecepieItem key={eachItem.id} dataFrmHome={eachItem}/>)
        : <div className='bg-red-400 font-semibold text-gray-900 text-md  p-4 rounded-md'>No records found. Please search something...</div>
      }
    </div>
  )
}

export default Home