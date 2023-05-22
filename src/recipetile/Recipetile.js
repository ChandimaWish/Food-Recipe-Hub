import React from 'react'

function Recipetile({recipe}) {
  return (
    <div className='recipeTile'>
      {/* <h1>recipe tile</h1> */}
      <p>{recipe["recipe"]["label"]}</p>
<img src={recipe["recipe"]["image"]} alt="tile-image"/>
    </div>
  ) 
}

export default Recipetile;
