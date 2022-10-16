
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Search from './pages/Search'
import Home from './pages/Home'

function App() {
  return (
    <div>
			<BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/search" element={<Search/>} />
        </Routes>
			</BrowserRouter>
		</div>
  );
}

export default App;
