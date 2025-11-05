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

// main forms
import PartialFilled from "./components/PartialFilled";
import VisaPaymentForm from "./components/FormPages/VisaPaymentForm"

// formPages 
import VisaApplicationForm from "./components/VisaApplicationForm";
import Apply1 from "./components/FormPages/Apply1";
import Apply2 from "./components/FormPages/Apply2";
import Apply3 from "./components/FormPages/Apply3";
import Apply4 from "./components/FormPages/Apply4";
import Apply5 from "./components/FormPages/Apply5";
import Apply6 from "./components/FormPages/Apply6";
import FormQuestion from "./components/FormPages/FormQuestion";
import VisaFee from "./pages/VisaFee";
import Preview from "./components/FormPages/Preview";

// navpages
import AboutUs from "./components/NavbarPages/AboutUs";
import { Privacy } from "./components/NavbarPages/Privacy";
import { DocumentRequired } from "./components/NavbarPages/DocumentRequired";
import { Service } from "./components/NavbarPages/Service";
import TermConditions from "./components/NavbarPages/TermConditions";
import Refund from "./components/NavbarPages/Refund";
import Faq from "./components/NavbarPages/Faq";
import Instructionspage from "./components/NavbarPages/Instructionspage";

function App() {

  return (
    <BrowserRouter>

      <ToastContainer />
      <ScrollToTop />
      <MainNavigation />
      <MobileNavbar />
      <Routes>

        {/* main pages */}
        <Route exact path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/service" element={<Service />} />
        <Route path="/documentRequired" element={<DocumentRequired />} />
        <Route path="/Faq" element={<Faq/>} />
        <Route path="/Instruction" element={<Instructionspage/>} />
        <Route path="" />

        {/* other important pages */}
        <Route path="/Terms-and-Conditions" element={ <TermConditions/>}/>
        <Route path="/Refund-Policy" element={<Refund/>}/>

        {/* button pages */}
        <Route exact path="/Apply" element={<VisaApplicationForm />} />
        <Route path="/Payment/:id" exact element={<VisaPaymentForm />} />
        <Route exact path="/partial-Filled" element={<PartialFilled />} />
        <Route exact path="/visa-fee" element={<VisaFee />} />

        {/* form pages */}
        <Route exact path="/Apply1/:id" element={<Apply1 />} />
        <Route exact path="/Apply2/:id" element={<Apply2 />} />
        <Route path="/Apply3/:id" exact element={<Apply3 />} />
        <Route path="/Apply4/:id" exact element={<Apply4 />} />
        <Route path="/Apply5/:id" exact element={<Apply5 />} />
        <Route path="/Apply6/:id" exact element={<Apply6 />} />
        <Route path="/questions/:id" element={<FormQuestion />} />
        <Route path="/Preview/:id" exact element={<Preview />} />


        <Route exact path="/contact" element={<Contact />} />

      </Routes>
      <Footer />

      {/* </Suspense> */}
    </BrowserRouter>
  );
}

export default App;
