import React from 'react'
import "./App.css";
function App() {
  return (
      <div className='app'>
      <h1><u>Food Recipe HUB</u>🥗</h1>
      <div className='app__searchform'>
        <input type='text' 
         placeholder ='Type the Ingredient'
         autoComplete='off'
          className='app__search'
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
