import React, { useContext, useEffect } from 'react'
import { GlobalContextu } from '../Context/Contextu';
import { useParams } from 'react-router-dom';


const Details = () => {
  const {detailsParamData, setDetailsParamData, fnAddFav, favList} = useContext(GlobalContextu);
  const {id} = useParams();

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();

      console.log(data?.data);
      if (data?.data) {
        setDetailsParamData(data?.data?.recipe);
      }
    }

    getRecipeDetails();
  }, []);

  console.log("params", id)

  return (
    <div className='gap-10 flex m-10'>
      <div className='row-start-2'>
        <div className='h-72 rounded-md overflow-hidden'>
          <img className='h-full object-cover block' src={detailsParamData?.image_url} alt="details-img" />
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <span className='text-sm font-semibold text-green-400'>{detailsParamData?.publisher}</span>
        <span className='text-2xl truncate font-bold'>{detailsParamData?.title}</span>
        <button className='p-1 text-white font-semibold rounded-lg bg-gray-700 uppercase' onClick={() => fnAddFav(detailsParamData)}>
          {favList.findIndex(eachItem => eachItem.id == detailsParamData.id) !== -1 ? 'Remove from favourites' : 'Add to favourites'}
        </button>
      
        <div>
            <span className='text-2xl font-semibold'>Ingredients:</span>

            <ul className='flex flex-col gap-2'>
              {
                detailsParamData?.ingredients && detailsParamData?.ingredients.map((eachItem) => (
                  <div>
                      <span className='text-md font-semibold'>{eachItem.quantity} {eachItem.unit}</span>
                      <span className='text-md font-semibold'> {eachItem.description}</span>
                  </div>
                  
                ))
              }
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Details