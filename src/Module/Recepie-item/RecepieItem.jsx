import React from 'react';
import { Link } from 'react-router-dom';

const RecepieItem = ({ dataFrmHome }) => {
    // let fnDetails = (itemu) =>{
    //     console.log("itemu", itemu)
    // }

  return (
    <div className='flex flex-col items-center p-4'>
      {dataFrmHome ? (
        <div className='w-64 h-64 flex flex-col items-center shadow-lg p-4 rounded-lg'>
          <div className="h-52 w-full rounded-lg overflow-hidden">
            <img 
              src={dataFrmHome?.image_url} 
              alt="img" 
              className='w-full h-full object-cover' 
            />
          </div>
          <span className='font-semibold text-gray-600 mt-2 text-center'>
            {dataFrmHome['publisher']}
          </span>
          <span className='text-center'>{dataFrmHome['title']}</span>
          <Link className='tracking-wider p-2 px-4 text-sm font-medium shadow-md bg-gray-700 text-white mt-2 rounded-sm' to={`/recipieItem/${dataFrmHome['id']}`}>Recepie Details</Link>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default RecepieItem;
