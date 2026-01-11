import React from 'react'
import user from '../../assets/images/user_support.png'
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const PagesLeftSideSupporAndLinkFormet = () => {
    return (
        <div className="pageLeftSide col-lg-3 col-md-4 col-sm-12 col-12 ">
            <div className="leftSide_itemOne ">
                <span className="leftSide_itemOneHeading"><b>Support</b></span>
                <div className="leftSide_itemImageDiv">
                    {/* <FaHeadset className='support_icon' /> */}
                    <img src={user} alt="" />
                </div>
                <div className="pageIcon_div">
                    <span> <IoLogoWhatsapp className='media_icon' /><i>&nbsp;&nbsp;-(91)8376836323</i></span>
                    <hr className='pageLine' />
                    <span> <MdEmail className='media_mail_icon' /><i> -indianvisaonlines@gmail.com</i></span>
                    {/* <hr  className='pageLine'/> */}
                </div>
            </div>

            <div className="leftSide_itemtwo">
                <ul>
                    <li>
                        <a href="/">
                            <b> Home</b>
                        </a>
                    </li>
                    <hr className='pagelinkLine'></hr>
                    <li>
                        <a href="/AboutUs">
                            <b> About Us</b>
                        </a>
                    </li>
                    <hr className='pagelinkLine'></hr>
                    <li>
                        <a href="/privacy">
                            <b> Privacy</b>
                        </a>
                    </li>
                    <hr className='pagelinkLine'></hr>
                    <li>
                        <a href="/documentRequired">
                            <b> Document Required</b>
                        </a>
                    </li>
                    <hr className='pagelinkLine'></hr>
                    <li>
                        <a href="/service">
                            <b> Services</b>
                        </a>
                    </li>
                    <hr className='pagelinkLine'></hr>
                    <li>
                        <a href="/Faq">
                            <b> FAQ</b>
                        </a>
                    </li>
                    <hr className='pagelinkLine'></hr>
                    <li>
                        <a href="/Terms-and-Conditions">
                            <b> Terms And Conditions</b>
                        </a>
                    </li>
                    <hr className='pagelinkLine'></hr>
                    <li>
                        <a href="/Refund-Policy">
                            <b>Refund Policy </b>
                        </a>
                    </li>
                    <hr className='pagelinkLine'></hr>
                    <li>
                        <a href="/Instruction">
                            <b> Instruction For Applicants</b>
                        </a>
                    </li>
                    <hr className='pagelinkLine'></hr>
                    <li>
                        <a href="/Visa-Fee-Details">
                            <b>Visa Fee Details </b>
                        </a>
                    </li>
                    <hr className='pagelinkLine'></hr>
                    <li>
                        <a href="/contact">
                            <b>Contact us </b>
                        </a>
                    </li>
                    <hr className='pagelinkLine'></hr>
                </ul>
            </div>

        </div>
    )
}

export default PagesLeftSideSupporAndLinkFormet