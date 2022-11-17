import React from 'react';
import '../css/components/footer.css';
import { 
    AiFillFacebook, 
    AiFillTwitterSquare, 
    AiFillInstagram 
} from "react-icons/ai";

function Footer() {
    return (
        <div>
            <div className='section_footer' data-testid='section_footer'>
                <div className='section_footer_wrapper' data-testid='section_footer_wrapper'>
                    
                    <AiFillFacebook className="icon_1" data-testid='section_footer_wrapper_icon_1'/>
                    <AiFillInstagram className="icon_1" data-testid='section_footer_wrapper_icon_2'/>
                    <AiFillTwitterSquare className="icon_1" data-testid='section_footer_wrapper_icon_3'/>
                    <a href="https://www.cornucopia.co.uk" target="_blank" className='section_footer_wrapper_title' data-testid='section_footer_wrapper_title'>https://www.cornucopia.co.uk</a>
                </div>

            </div>
        </div>
    );
}

export default Footer;