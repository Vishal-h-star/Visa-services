import React, { useState, useEffect, useRef } from "react";
import { productlist } from "../assets/data/ServicesData";
import Backdrop from "../components/Backdrop";
import { BiSearch } from "react-icons/bi";
import AOS from "aos";
import { FiSettings } from 'react-icons/fi'
import ProductLists from "../components/Product/ProductLists";
import NoData from "../components/NoData/Nodata";


const Products = () => {
  const categoryRef = useRef(null);
  const inputEl = useRef("");
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [products, setProducts] = useState(productlist);
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
    setProducts(
      productlist.filter((val) => val.name.toLowerCase().includes(e.target.value.toLowerCase()))
    );
  };

  const filterItem = (catItem) => {
    console.log("true")
    const updatedItem = productlist.filter((curelem) => {
      return curelem.websitType === catItem;
    });
    setProducts(updatedItem)
  }

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
                    value={searchTerm}
                    placeholder="Search Products..."
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
                    placeholder="search services..."
                    onChange={searchservice}
                  />
                  <BiSearch />
                </div>
                <h4>Our Products</h4>
                <div className="catalog__filter__widget__content__item">
                    <input
                      type="radio"
                      id="all"
                      name="category"
                      onChange={() => setProducts(productlist)}
                    />
                    <label htmlFor="all" className="radio-label">All</label>
                  </div>
                <div className="catalog__filter__widget__content__item">
                    <input
                      type="radio"
                      id="mobile"
                      name="category"
                      onChange={() => filterItem('gps')}
                    />
                    <label htmlFor="mobile" className="radio-label">GPS</label>
                  </div>
                  <div className="catalog__filter__widget__content__item">
                    <input
                      type="radio"
                      id="printer"
                      name="category"
                      onChange={() => filterItem('3D printer')}
                    />
                    <label htmlFor="printer" className="radio-label">3D Printer</label>
                  </div>
                  <div className="catalog__filter__widget__content__item">
                    <input
                      type="radio"
                      id="teltonika"
                      name="category"
                      onChange={() => filterItem('teltonika')}
                    />
                    <label htmlFor="teltonika" className="radio-label">Teltonika</label>
                  </div>
              </div>
            </div>
            {
              products.length > 0 ? (
                <ProductLists products={products} />
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

export default Products;
