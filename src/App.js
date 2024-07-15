// import logo from './logo.svg';
import './App.css';
import Blog from './Blog'
import Summary from './Summary';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
  <Router>
    <div>
      {/* <Blog/>
     <Summary/> */}
     <Routes>
      <Route path="/" element={<Blog/>}/>
      <Route path="/Summary" element={<Summary/>}/>
      <Route path="/" element={<Summary/>}/>
      <Route path="/Blog" element={<Blog/>}/>
      
     </Routes>
    </div>
    </Router>
  );
}

export default App;
