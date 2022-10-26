
import './App.css';
import {Routes,Route,Link} from "react-router-dom";
import Home from './routes/Home';
import Products from './routes/Products';
import Services from './routes/Services';
import LogIn from './routes/LogIn';
import SignUp from './routes/SignUp';
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/SignUp" element={<SignUp />}/>
          <Route path="/LogIn" element={<LogIn />}/>
      </Routes>
    </div>
  );
}

export default App;
