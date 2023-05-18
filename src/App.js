import { useState } from 'react';
import "./App.css";
import Axios from 'axios';

function App() {
  const YOUR_APP_ID ="fea853ba" ;
  const YOUR_APP_KEY = "3a0226421c380a19d71ce380e1205698";
  const [recipes,setRecipes] = useState([]);

  const url =  `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=alcohol-free`;

  const getRecipeInfo = async () =>
  {
    var result =await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits);

  } ;

  return (
      <div className='app'>
      <h1 onClick={getRecipeInfo}>
        <u>Food Recipe HUB</u>🥗</h1>
      <div className='app__searchform'>
        <input type='text' 
         placeholder ='Type the Ingredient'
         autoComplete='off' 
          className='app__input'
          />
        <select className='app__healthLables'>
            <option value ="vegan">vegan</option>
          
          </select>  
          <input type='submit' value='Get Recipe' className='app__submit'/>

      </div>
       </div>
  )
    
  
}

export default App
