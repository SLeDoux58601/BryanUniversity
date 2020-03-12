import React from 'react';
import List from './SuperHero'
let data = require("./data.json")

function App() {
  const heroList = data.map(item => <List key={List.id} name={item.name} show={item.show} catchphrase={item.catchPhrase} />)
  return (
    <div>
      {heroList}
    </div>
  );
}

export default App;