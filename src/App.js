import React, { Suspense, lazy } from "react";
import "./assets/scss/style.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainNavigation from "./components/Navigation/MainNavigation";
import MobileNavbar from "./components/Navigation/MobileNavbar";
import ScrollToTop from "./components/ScrollTop";
const Footer = lazy(() => import("./components/Footer"));

const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const VisaFee = lazy(() => import("./pages/VisaFee"));

// main forms
const PartialFilled = lazy(() => import("./components/PartialFilled"));
const VisaPaymentForm = lazy(() => import("./components/FormPages/VisaPaymentForm"));
const VisaApplicationForm = lazy(() => import("./components/VisaApplicationForm"));

// formPages 
const Apply1 = lazy(() => import("./components/FormPages/Apply1"));
const Apply2 = lazy(() => import("./components/FormPages/Apply2"));
const Apply3 = lazy(() => import("./components/FormPages/Apply3"));
const Apply4 = lazy(() => import("./components/FormPages/Apply4"));
const Apply5 = lazy(() => import("./components/FormPages/Apply5"));
const Apply6 = lazy(() => import("./components/FormPages/Apply6"));
const FormQuestion = lazy(() => import("./components/FormPages/FormQuestion"));
const Preview = lazy(() => import("./components/FormPages/Preview"));

// navpages
const AboutUs = lazy(() => import("./components/NavbarPages/AboutUs"));
const Privacy = lazy(() => import("./components/NavbarPages/Privacy"));
const DocumentRequired = lazy(() => import("./components/NavbarPages/DocumentRequired"));
const Service = lazy(() => import("./components/NavbarPages/Service"));
const TermConditions = lazy(() => import("./components/NavbarPages/TermConditions"));
const Refund = lazy(() => import("./components/NavbarPages/Refund"));
const Faq = lazy(() => import("./components/NavbarPages/Faq"));
const Instructionspage = lazy(() => import("./components/NavbarPages/Instructionspage"));
const FeesDetails = lazy(() => import("./components/NavbarPages/FeesDetails"));

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <ScrollToTop />
      <MainNavigation />
      <MobileNavbar />

      <Suspense fallback={<div className="page-loader">Loading...</div>}>
        <Routes>
          {/* main pages */}
          <Route exact path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/service" element={<Service />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="/documentRequired" element={<DocumentRequired />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Instruction" element={<Instructionspage />} />
          <Route path="/Visa-Fee-Details" element={<FeesDetails />} />

          {/* other important pages */}
          <Route path="/Terms-and-Conditions" element={<TermConditions />} />
          <Route path="/Refund-Policy" element={<Refund />} />

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

          {/* <Route exact path="/contact" element={<Contact />} /> */}

        </Routes>
      </Suspense>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      {/* </Suspense> */}
    </BrowserRouter>
  );
}

export default App;
