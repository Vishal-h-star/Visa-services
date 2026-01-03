import React from "react";
import image1 from '../assets/images/homeContentImages/sercure_image.png'
import image2 from '../assets/images/homeContentImages/indian_lion_image.png'
import image3 from '../assets/images/homeContentImages/homeImage3.png'
import image4 from '../assets/images/homeContentImages/homeImage4.png'
import image5 from '../assets/images/homeContentImages/homeImage5.png'
import image6 from '../assets/images/homeContentImages/homeImage6.jpg'
import { useTranslation } from "react-i18next";

export const HomePageContent = () => {

  const {t} =  useTranslation('common')
  const home = t("common:home");


  return (
    <>
      <section className="homeContent">
        <div className="container homeInstructionsContainer">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 ">
              <div className="side_item_one">
                <span class="impss">{t("home.impCard.title")}</span>
                <div class="scroll-container">
                  <p class="scroll-paragraph">
                      {t("home.impCard.desc")}
                  </p>
                </div>  
              </div>

              <div className="side_item_two">
                <ul>
                  <li>
                    <a href="/">
                      <b>{t("nav.home")}</b>
                    </a>
                  </li>
                  <hr></hr>
                  <li>
                    <a href="/about">
                      <b>{t("nav.about")}</b>
                    </a>
                  </li>
                  <hr></hr>
                  <li>
                    <a href="/PrivacyPolicy">
                      <b>{t("nav.privacy")}</b>
                    </a>
                  </li>
                  <hr></hr>
                  <li>
                    <a href="/documentRequired">
                      <b>{t("nav.document")}</b>
                    </a>
                  </li>
                  <hr></hr>
                  <li>
                    <a href="/Service">
                      <b> {t("nav.services")}</b>
                    </a>
                  </li>
                  <hr></hr>
                  <li>
                    <a href="/Faq">
                      <b> {t("nav.faqs")}</b>
                    </a>
                  </li>
                  <hr></hr>
                  <li>
                    <a href="/Terms-and-Conditions">
                      <b>{t("nav.termsCondition")}</b>
                    </a>
                  </li>
                  <hr></hr>
                  <li>
                    <a href="/Refund-Policy">
                      <b>{t("nav.refund")}</b>
                    </a>
                  </li>
                  <hr></hr>
                  <li>
                    <a href="/Instruction">
                      <b>{t("nav.instAppl")}</b>
                    </a>
                  </li>
                  <hr></hr>
                  <li>
                    <a href="/Visa-Fee-Details">
                      <b> {t("nav.feeDetails")}</b>
                    </a>
                  </li>
                  <hr></hr>
                  <li>
                    <a href="/contact">
                      <b>{t("nav.contact")}</b>
                    </a>
                  </li>
                  <hr></hr>
                </ul>
              </div>

              <div className="side_item_three">
                <div class="m4">
                  <img src={image1} alt="kk" />
                </div>
                <div>
                  <img
                    src={image2}
                    alt="kk"
                  />
                </div>
                <div>
                  <img
                    src={image3}
                    alt="kk"
                  />
                </div>
              </div>

        
              <div className="side_item_four">
       
                <div>
                  <img
       
       src={image4}
                    alt="kk"
                  />
                </div>
                <div>
                  <img
                    src={image5}
                    alt="kk"
                  />
                </div>
                <div>
                  <img
                    src={image6}
                    alt="kk"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-4 col-sm-6 col-12 ">
              <div class="containt">
                <h4>
                  <b> {t("home.section1.title1")}</b> 
                </h4>
                <p>
                    {t("home.section1.desc1")}
                </p>
                <p>
                 {t("home.section1.desc2")}
                </p>
                <h4>
                  <b>{t("home.section2.title2")}</b> 
                </h4>
                 <p>{t("home.section2.desc1")}</p>
                  <p>{t("home.section2.desc2")}</p>
                <h4>
                  <b> {t("home.section3.title3")} </b> 
                </h4>
                <p> {t("home.section3.desc1")}</p>
                <p>{t("home.section3.desc2")}</p>
                <h4>
                  <b>{t("home.section4.title4")}</b> 
                </h4>
                <p>{t("home.section4.desc1")}</p>
                 <p>{t("home.section4.desc2")}</p>
                <h4>
                  <b>{t("home.section5.title5")}</b> 
                </h4>
                  <p>{t("home.section5.desc1")}</p>
                <h4>
                  <b>{t("home.section6.title6")}</b> 
                </h4>
                 <p>{t("home.section6.desc1")}</p>
                <h4>
                  <b> {t("home.section7.title7")}</b> 
                </h4>
                 <p>{t("home.section7.desc1")}</p>
                <h4>
                  <b> {t("home.section8.title8")} </b> 
                </h4>
                <p> {t("home.section8.desc1")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
