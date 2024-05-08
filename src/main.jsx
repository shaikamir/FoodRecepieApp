import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter} from 'react-router-dom'
import {GlobalContextu} from './Module/Context/Contextu';


let Root = () =>{
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [productsList, setProductsList] = useState([]);
  const [detailsParamData, setDetailsParamData] = useState();
  const [favList, setFavList] = useState([])

  let fnClick = async (e) =>{
    try{
      e.preventDefault()
    let res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${inputValue}`);
    let data = await res.json();

    if(data?.data?.recipes){
      setProductsList(data?.data?.recipes);
      setLoading(false);
      setInputValue('');
    }

    console.log("datataaaaa", data['data'])
    }

    catch(e){
      console.log(e);
      setLoading(false)
    }
  }

  let fnAddFav = (item) =>{
    let favList1 = [...favList];
    const index = favList.findIndex(itemu => itemu.id == item.id);

    if(index == -1){
      favList1.push(item)
    }
    else{
      favList1.splice(item)
    }
    setFavList(favList1)

    console.log("Favourites", favList)
  }

  return (
  <BrowserRouter>
  <React.StrictMode>
    {/* <Contextu>
    <App />
    </Contextu> */}
    <GlobalContextu.Provider value={{inputValue, setInputValue, fnClick, loading, productsList, detailsParamData, setDetailsParamData, fnAddFav, favList}}>
      <App/>
    </GlobalContextu.Provider>
  </React.StrictMode>
  </BrowserRouter>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <Root/>
)

export default Root
