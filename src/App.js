import React from "react";
import "./assets/scss/style.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainNavigation from "./components/Navigation/MainNavigation";
import MobileNavbar from "./components/Navigation/MobileNavbar";
import ScrollToTop from "./components/ScrollTop";
import Footer from "./components/Footer";
import VisaApplicationForm from "./components/VisaApplicationForm";
import PartialFilled from "./components/PartialFilled";
import Apply2 from "./components/FormPages/Apply2";
import Apply3 from "./components/FormPages/Apply3";
import VisaPaymentForm from "./components/FormPages/VisaPaymentForm";
import Apply4 from "./components/FormPages/Apply4";
import Apply5 from "./components/FormPages/Apply5";
import Apply6 from "./components/FormPages/Apply6";
import VisaFee from "./pages/VisaFee";
import Apply1 from "./components/FormPages/Apply1";

function App() {

  return (
    <BrowserRouter>

      <ToastContainer />
      <ScrollToTop />
      <MainNavigation />
      <MobileNavbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Apply" element={<VisaApplicationForm />} />
        <Route exact path="/Apply1/:id" element={<Apply1/>} />
        {/* <Route exact path="/Apply/:id" element={<VisaApplicationForm />} /> */}
        <Route exact path="/Apply2/:id" element={<Apply2 />} />
        <Route path="/Apply3/:id" exact element={<Apply3 />} />
        <Route path="/Apply4/:id" exact element={<Apply4/>} />
        <Route path="/Apply5/:id" exact element={<Apply5/>} />
        <Route path="/Apply6/:id" exact element={<Apply6/>} />
        <Route path="/Payment/:id" exact element={<VisaPaymentForm/>}/>
        <Route exact path="/partial-Filled" element={<PartialFilled />} />
        <Route exact path="/visa-fee" element={<VisaFee />} />
        <Route exact path="/contact" elemenmt={<Contact />} />
      </Routes>
      <Footer />

      {/* </Suspense> */}
    </BrowserRouter>
  );
}

export default App;
