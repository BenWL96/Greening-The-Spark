import React from 'react';
import '../css/components/footer.css';
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from "react-icons/ai";

function Footer() {
    return (
        <div>
            <div className='section_footer' data-testid='section_footer'>
                <div className='section_footer_wrapper' data-testid='section_footer_wrapper'>
                    <p className='section_footer_wrapper_title' data-testid='section_footer_wrapper_title'>Social Icons + contact page + aboutpage + carl's website</p>
                    <AiFillFacebook className="icon_1"/>
                    <AiFillInstagram className="icon_1"/>
                    <AiFillTwitterSquare className="icon_1"/>
                </div>

            </div>
        </div>
    );
}

export default Footer;