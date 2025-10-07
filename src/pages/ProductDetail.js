import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

// import gpstracker from "../assets/images/service/gpstrackergt.jpg";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import SimilarProducts from "../components/SimilarProducts";
import Enquiry from "../components/Enquiry";
import { productlist } from "../assets/data/ServicesData";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [readmore, setReadmore] = useState(true);

  const toggleReadMore = () => {
    setReadmore(!readmore);
  };

  useEffect(() => {
    let product = productlist.find((product) => product.id === parseInt(id));
    if (product) {
      setProduct(product);
    }
  }, [product]);

  // console.log(product.features);

  return (
    <>
      {product ? (
        <>
          <div className="container hardware">
            <div className="row py-5">
              <div className="col-lg-6">
                <div className="hardware-image">
                  <img src={product.image01} className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hardware-content">
                  <div className="hardware-name">{product.name}</div>
                  <div className="hardware-range">{product.websitType}</div>
                  <div className="hardware-benefit">
                    {product.features ? (
                      <>
                        <h6 className="hardware-features">Product features</h6>
                        <ul className="benefit-list">
                          {readmore ? (
                            <>
                              {" "}
                              {product.features
                                .slice(0, 10)
                                .map((item, index) => {
                                  return <li key={index}>{item}</li>;
                                })}
                            </>
                          ) : (
                            <>
                              {product.features.map((item, index) => {
                                return <li key={index}>{item}</li>;
                              })}
                            </>
                          )}

                          <div className="text-center show-more">
                            <p className="read-or-hide" onClick={toggleReadMore}>
                              <span className="read-more">Read More</span>
                              <i
                                className="fa fa-plus-circle"
                                aria-hidden="true"
                              ></i>
                            </p>
                          </div>
                        </ul>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              <div className="col-12 mt-5">
                <div className="hardware-tabs">
                  <Tab.Container
                    defaultActiveKey="description"
                    transition={true}
                    id="noanim-tab-example"
                    className="nav-tabs"
                  >
                    <Nav variant="tabs">
                      <Nav.Item>
                        <Nav.Link eventKey="description">Description</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="other-details">
                          Other Details
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="specification">
                          Specification
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="description">
                        {product.description}
                      </Tab.Pane>
                      <Tab.Pane eventKey="other-details">
                        {product.features ? (
                          <>
                            <ul className="list">
                              {product.features.map((item, index) => {
                                return <li key={index}>{item}</li>;
                              })}
                            </ul>
                          </>
                        ) : (
                          ""
                        )}
                      </Tab.Pane>
                      <Tab.Pane eventKey="specification">
                        {product.info ? (
                          <>
                            <ul className="list">
                              {product.info.map((item, index) => {
                                return <li key={index}>{item}</li>;
                              })}
                            </ul>
                          </>
                        ) : (
                          "No Data..."
                        )}
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
            <Enquiry />
            <SimilarProducts />
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default ProductDetail;
