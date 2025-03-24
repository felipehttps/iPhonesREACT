
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./components/login";
import { Cadastro } from "./components/cadastro";
import { Site } from "./components/site";


function App() {

  return (
  <BrowserRouter>
  <Login></Login>
    <Routes>
      
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />}/>
      <Route path="/dashboard" element={<Site />}/>
    </Routes>
  </BrowserRouter>
  )
};

export default App
