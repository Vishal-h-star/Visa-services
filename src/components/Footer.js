import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();

    console.log(location.pathname, 'pathname')

  return (
    <>
    {
      location.pathname === "/partial-Filled" ? (
        <></>
      ) : (
  <section className="footer">
        <div className="disclaimer">
          <p>
            Disclaimer: <br />
            www.indiansvisaonline.com is a commercial website. We are not the
            Embassy/Consulate/High Commission or the representative of any
            Government Department of India. We provide expert guidance on Indian
            visa applications. If you prefer a non-guided service, you can visit
            the Indian Government Website.
          </p>
        </div>
        <div class="footer_cont2">
          <hr/>
          <span> © Copyright 2020 by Indiavisa. All Rights Reserved</span>
        </div>
      </section>
      )
    }
    
    </>
  );
};

export default Footer;

