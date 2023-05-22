import { useState } from 'react';
import "./App.css";
import Axios from 'axios';
import Recipetile from './recipetile/Recipetile';

function App() {
  const YOUR_APP_ID ="fea853ba" ;
  const YOUR_APP_KEY = "3a0226421c380a19d71ce380e1205698";
  const [query,setQuery] = useState("");
  const [healthLable,setHealthLable]= useState("vegetarian");

  const [recipes,setRecipes] = useState([]);

  const url =  `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLable}`;

  const getRecipeInfo = async () =>
  {
    var result =await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits);

  } ;


  const onSubmit = (e) =>{
    e.preventDefault();  //will prevent page from reloding 
    getRecipeInfo();
  }

  return (
      <div className='app'>
      <h1 onClick={getRecipeInfo}>
        <u>Food Recipe HUB</u>🥗</h1>
      <form className='app__searchform' onSubmit={onSubmit}>
        
        <input type='text' 
         placeholder ='Type the Ingredient'
         autoComplete='off' 
          className='app__input'
          onChange={(e) =>{setQuery(e.target.value)}}
          />
        <select className='app__healthLables'>
            <option value ="vegan" onClick={() =>{setHealthLable("vegan")}}>Vegan</option> 
          
           
           
          
            <option value ="vegetarian" onClick={() =>{setHealthLable("vegetarian")}}>Vegetarian</option> 
          
          
          
            <option value ="Low-Suger" onClick={() =>{setHealthLable("Low-Suger")}}>Low Suger</option> 
          
          
          
            <option value ="dairy free" onClick={() =>{setHealthLable("dairy free")}}>Dairy free</option> 
          
          
          
            <option value ="immuno-supportive" onClick={() =>{setHealthLable("immuno-supportive")}}>Immuno supportive</option> 
          
          
          
            <option value ="wheat-free" onClick={() =>{setHealthLable("wheat-free")}}>Wheat free</option> 
          </select>
          <input type='submit' value='Get Recipe' className='app__submit'/>
        </form>
        <div className='app__recipes'>
        {recipes.map((recipe)=>{
          return <Recipetile recipe={recipe}/>;
        })}
        </div>
        
      
       </div>
  );
    
  
}

export default App
