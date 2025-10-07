import React, { useState, useEffect, useRef } from "react";
import { servicelist } from "../assets/data/ServicesData";
import Backdrop from "../components/Backdrop";
import { BiSearch } from "react-icons/bi";
import AOS from "aos";
import ServiceLists from "../components/Service/ServiceLists";
import { FiSettings } from 'react-icons/fi';
import NoData from "../components/NoData/Nodata";

const Services = () => {
  const categoryRef = useRef(null);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [services, setServices] = useState(servicelist);
  const [searchTerm, setSearchTerm] = useState();

  const showHideFilter = () => {
    categoryRef.current.classList.toggle("active");
    setDrawerIsOpen(true);
  };

  const HideFilter = () => {
    categoryRef.current.classList.toggle("active");
    setDrawerIsOpen(false);
  };

  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    if (mounted.current) {
      // setLoading(true);
      AOS.init({
        duration: 50,
      });
      AOS.refresh();
    }
    return () => (mounted.current = false);
  }, []);

  const closeDrawerHandler = () => {
    showHideFilter();
    setDrawerIsOpen(false);
  };

  const searchservice = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
    setServices(
      servicelist.filter((val) => val.name.toLowerCase().includes(e.target.value.toLowerCase()))
    );
  };

  const filterItem = (catItem) => {
    console.log("true");
    const updatedItem = servicelist.filter((curelem) => {
      return curelem.websitType === catItem;
    });
    setServices(updatedItem);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <section className="services_page_wrapper mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-12">
              <div className="category-filter-icon mb-3">
                <div className="search-box">
                  <input
                    type="text"
                    placeholder="Search Services..."
                    onChange={searchservice}
                  />
                  <BiSearch />
                </div>
                <div className="filter-slide" onClick={() => showHideFilter()}>
                  <FiSettings className="filter-icon"/>
                </div>
              </div>
              <div className="catalog__filter mb-4" ref={categoryRef}>
                {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
                <div className="search-box desktop-device">
                  <input
                    type="text"
                    placeholder="search services"
                    onChange={searchservice}
                  />
                  <BiSearch />
                </div>
                <h4>Our Services</h4>
                <div className="catalog__filter__widget__content__item">
                  <input
                    type="radio"
                    id="all"
                    name="category"
                    onChange={() => setServices(servicelist)}
                  />
                  <label htmlFor="all" className="radio-label">
                    All
                  </label>
                </div>
                <div className="catalog__filter__widget__content__item">
                  <input
                    type="radio"
                    id="mobile"
                    name="category"
                    onChange={() => filterItem("Mobile Application")}
                  />
                  <label htmlFor="mobile" className="radio-label">
                    Mobile Application
                  </label>
                </div>
                <div className="catalog__filter__widget__content__item">
                  <input
                    type="radio"
                    id="software"
                    name="category"
                    onChange={() => filterItem("software development")}
                  />
                  <label htmlFor="software" className="radio-label">
                    Software Development
                  </label>
                </div>
              </div>
            </div>
            
            {
              services.length > 0 ? (
                <ServiceLists
              services={services}
            />
              ) : (
                <>
                
                  <div className="col-9 text-center">
                  <NoData />
                </div>
                </>
              )
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
