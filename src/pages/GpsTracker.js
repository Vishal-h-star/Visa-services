import React from "react";
import gpstracker from "../assets/images/service/gpstrackergt.jpg";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SimilarProducts from "../components/SimilarProducts";
import Enquiry from "../components/Enquiry";

const GpsTracker = () => {
  return (
    <>
      <div className="container hardware">
        <div className="row py-5">
          <div className="col-lg-6">
            <div className="hardware-image">
              <img src={gpstracker} className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hardware-content">
              <div className="hardware-name">GPS Vehicle Tracker GT06N</div>
              <div className="hardware-range">
                Excellent Vehicle Tracking GPS Device
              </div>
              <div className="hardware-benefit">
                <h6 className="hardware-features">Product features</h6>
                <ul className="benefit-list">
                  <li>Minimum order quantity: 1 unit</li>
                  <li>development platforms Android</li>
                  <li>Web,Android and iOS app</li>
                  <li>Web,Android and iOS app</li>
                  <li>Transport and Fleet Management</li>
                  <li>Web,Android and iOS app</li>
                  <li>Web,Android and iOS app</li>
                  <li>Transport and Fleet Management</li>
                  <li>Web,Android and iOS app</li>
                  <div className="text-center show-more">
                  <p className="read-or-hide">
                    <span className="read-more">Read More</span>
                    <i className="fa fa-plus-circle" aria-hidden="true"></i>
                  </p>
                </div>
                </ul>
               
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="hardware-tabs">
              <Tabs
                defaultActiveKey="description"
                transition={true}
                id="noanim-tab-example"
                className="nav-tabs"
              >
                <Tab eventKey="description" title="Description">
                  <p className="m-0">
                    GT06N or TR06 We are actively devoted towards trading and
                    supplying of a quality approved Vehicle Tracking GPS Device.
                    Our provided Vehicle Tracking GPS Device is available in
                    different designs and specifications in order to cater the
                    demands of our clients. It utilizes the global positioning
                    system to locate the exact location of vehicle at regular
                    intervals of time. The offered GPS device is manufactured at
                    vendors' end using superior quality components and
                    ultra-modern technology. Moreover, this Vehicle Tracking GPS
                    Device is high on demand by the clients owing to its easy
                    usage and high efficiency.
                    <br />
                    <br />
                    GT06N or TR06 We are actively devoted towards trading and
                    supplying of a quality approved Vehicle Tracking GPS Device.
                    Our provided Vehicle Tracking GPS Device is available in
                    different designs and specifications in order to cater the
                    demands of our clients.
                    <br />
                    GT06N or TR06 We are actively devoted towards trading and
                    supplying of a quality approved Vehicle Tracking GPS Device.
                    Our provided Vehicle Tracking GPS Device is available in
                    different designs and specifications in order to cater the
                    demands of our clients.
                  </p>
                </Tab>
                <Tab eventKey="other-details" title="other details">
                  <ul className="list">
                    <li>GSM Quad-band</li>
                    <li>GPS GSM GPRS wireless network</li>
                    <li>High sensitive GPS chipset</li>
                    <li>Real-time tracking</li>
                    <li>Built-in GSM&GPS antenna</li>
                    <li>Built-in ON/OFF power, wide voltage input range</li>
                    <li>Built-in acceleration sensor for vibration alarm</li>
                    <li>
                      Support ACC detection, real-time reporting car status
                    </li>
                    <li>GPS GSM GPRS wireless network</li>
                    <li>High sensitive GPS chipset</li>
                    <li>Real-time tracking</li>
                    <li>Built-in GSM&GPS antenna</li>
                  </ul>
                </Tab>
                <Tab eventKey="specification" title="specification">
                  <ul className="list">
                    <li>GSM Quad-band</li>
                    <li>GPS GSM GPRS wireless network</li>
                    <li>High sensitive GPS chipset</li>
                    <li>Real-time tracking</li>
                    <li>Built-in GSM&GPS antenna</li>
                    <li>Built-in ON/OFF power, wide voltage input range</li>
                    <li>Built-in acceleration sensor for vibration alarm</li>
                    <li>
                      Support ACC detection, real-time reporting car status
                    </li>
                    <li>GPS GSM GPRS wireless network</li>
                    <li>High sensitive GPS chipset</li>
                    <li>Real-time tracking</li>
                    <li>Built-in GSM&GPS antenna</li>
                  </ul>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
        <Enquiry />
        <SimilarProducts />
      </div>
    </>
  );
};

export default GpsTracker;
