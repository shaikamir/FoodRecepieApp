import React, { useCallback, useContext } from 'react'
import { GlobalContextu } from '../Context/Contextu'
import RecepieItem from '../Recepie-item/RecepieItem';

const Favourites = () => {
  const {favList} = useContext(GlobalContextu);

  console.log("Favourites", favList)

  return (
    <div className='flex flex-wrap'>
      {
        favList && favList.length > 0 ?  favList.map(listItem => <RecepieItem key={listItem.id} dataFrmHome={listItem}/>) : <div className='bg-blue-400 font-semibold text-white text-md  p-4 rounded-md'>Your favorites list is empty</div>
      }
    </div>
  )
}

export default Favourites