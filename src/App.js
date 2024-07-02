import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Layout/Navbar/Navbar";
import Services from "./Components/Services/Services";
import Propos from "./Components/Propos/Propos";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
   <BrowserRouter>
    <Routes>
     <Route path="/" element={<Navbar/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/propos" element={<Propos/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App;
