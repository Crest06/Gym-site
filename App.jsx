
import { Routes, Route, Navigate } from 'react-router-dom';
import GetStarted from './Components/GetStarted';
import Home from './Components/Home';
import LoginForm from './Components/LoginForm';
import Main from './Main/MainPage';


function App(){

  return(<>
  <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/login" element={<LoginForm></LoginForm>}></Route>
    <Route path="/getstarted" element={<GetStarted></GetStarted>}></Route>
    <Route path="/main" element={<Main></Main>}></Route>
  </Routes>
  </>)
}



export default App