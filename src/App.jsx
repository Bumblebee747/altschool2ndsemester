import { useState } from 'react';
import Portfolio from './components/Portfolio';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const [username, setUsername] = useState('Bumblebee747');

  return (
    
    <div className="App">
      {/* <Navbar /> */}
      <Portfolio username={username} />
    </div>
  );
}

export default App;