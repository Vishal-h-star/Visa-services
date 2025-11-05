import React from 'react'
import WhyChooseUs from '../WhyChooseUs';
import PagesLeftSideSupporAndLinkFormet from './PagesLeftSideSupporAndLinkFormet';



const AboutUs = () => {
  return (
    <section className="main_Content">
      <div className="container">
        <div className="row">

           <PagesLeftSideSupporAndLinkFormet/>

          <div className="pageRightSide col-lg-9 col-md-8 col-sm-12 col-12 ">
            <div class="containt">
              <h4>
                <b>About Us:- </b>
              </h4>
              <p>
                Welcome to <b>E Visa Services</b>, your trusted partner for <b>quick and reliable online visa assistance</b>. For over <b>8 years</b>, we’ve been helping travelers from around the world apply for and receive their <b>India eVisa</b> and other travel authorizations with ease.
                Our goal is simple — to make your visa process <b>fast, secure, and stress-free</b>. Whether you’re traveling for <b>tourism</b>, <b>business</b>, or need an <b>urgent eVisa</b>, our experienced team takes care of every detail so you don’t have to worry about forms, errors, or delays.
                Please note that <b>E Visa Services</b> is a <b>private agency</b> and not affiliated with any government department. Our service charge includes both the <b>official government visa fee</b> and a <b>Visa processing fee</b> for our support, review, and secure handling of your application. If you prefer to apply directly through the <b>government website</b>, you can do so anytime.

              </p>
            </div>
            <WhyChooseUs />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs