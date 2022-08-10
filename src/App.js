import './App.css';
import Header from './components/header/Header';
import Card from './components/card/Card';

import data from './data.js';

function App() {
  return (
    <div className="App">
      <Header />
      {data.map((item, index) => <Card
        key={index}
        {...item}
      />)}
    </div>
  );
}

export default App;
