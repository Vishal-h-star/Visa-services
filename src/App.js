import React from "react";
import "./assets/scss/style.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Blogs from "./pages/Blogs";
import Services from "./pages/Services";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainNavigation from "./components/Navigation/MainNavigation";
import MobileNavbar from "./components/Navigation/MobileNavbar";
import Topbar from "./components/Topbar/Topbar";
import ProductDetail from "./pages/ProductDetail";
import ServiceDetail from "./pages/ServiceDetail";
import Products from "./pages/Products";
import ScrollToTop from "./components/ScrollTop";
import BlogDetail from "./pages/BlogDetail";
import Footer from "./components/Footer";
import VisaApplicationForm from "./components/VisaApplicationForm";
import PartialFilled from "./components/PartialFilled";
import Apply2 from "./components/FormPages/Apply2";
import Apply3 from "./components/FormPages/Apply3";


function App() {
 
  return (
    <Router>
      <ScrollToTop />
      {/* <Topbar /> */}
      <MainNavigation />
      <MobileNavbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={ProductDetail}/>
        <Route exact path="/Apply"  component={VisaApplicationForm} />
        <Route exact path="/Apply/:id"  component={VisaApplicationForm} />
        <Route path="/Apply2" exact component={Apply2} />
        <Route path="/Apply3" exact component={Apply3} />
        <Route exact path="/services/:id" component={ServiceDetail} />
        <Route path="/blogs" exact component={Blogs} />
        <Route path="/partial-Filled" exact component={PartialFilled} />
        <Route path="/blogs/:id" exact component={BlogDetail} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/career" exact component={Career} />
      </Switch>
      <Footer/>
      {/* </Suspense> */}
    </Router>
  );
}

export default App;
