
import './App.css';
import Portfolio from './views/Portfolio';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>

    {/* <Portfolio /> */}

  <Routes>

<Route path="/" element={<Portfolio  />} />

</Routes> 
</> 

  );
}

export default App;
