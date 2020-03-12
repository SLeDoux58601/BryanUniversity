  
import React from 'react';
import Spots from './vacation.js'
import vacationSpots from './vacationSpots'

function App() {
  const vacationComponents = vacationSpots.map(vacation => <Spots key={Spots.id} place={vacation.place} price={vacation.price} time={vacation.timeToGo} />)
  const price = vacationSpots.price
  // if (price < 500){
  //   price = '$'
  // } else if (price > 500 && price < 1000){
  //   price = '$$'
  // } else {price = '$$$'}
  
  return (
    <div className="Spots">
      {vacationComponents}
    </div>
  )
}


export default App;