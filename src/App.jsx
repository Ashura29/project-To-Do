import { BrowserRouter, Routes, Route} from 'react-router';
import Home from './Pages/Home';
import ToDo from './Pages/To-Do';
import NavBar from './components/NavBar';


function App() {
  
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<ToDo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;