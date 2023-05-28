
import React from 'react';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// import Api from "./FitClub/Api";
// import Create from "./Component/create";
// import Show from "./Component/show";
// import Update from "./Component/update";
import Hero from './FitClub/Hero';
import Join from './FitClub/Join us/Join';
import Plans from './FitClub/Plans/Plans';
import Programs from './FitClub/Programs/Programs';
import Reason from './FitClub/Reason/Reason';
import Testimonials from './FitClub/Testimonials/Testimonials';
import Footer from './FitClub/Footer/Footer';

function App() {
    // return  <Api/>
    
    
     return(
     <div>
       <Hero/>
      <Programs/>
      <Reason/>
      <Plans/>
      <Testimonials/>
      <Join/>
      <Footer/>
     </div>
     )


//     return (
//       <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<Show />} />
//     <Route path="/create" element={<Create />} />
//     <Route path="/update/:id" element={<Update />} />
//   </Routes>
// </BrowserRouter>
//     ); 
  
}

export default App;
