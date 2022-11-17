import React from 'react';
import '../css/components/footer.css';
import { 
    AiFillFacebook, 
    AiFillTwitterSquare, 
    AiFillInstagram 
} from "react-icons/ai";
import Stack from 'react-bootstrap/Stack';

import Logo from '../images/gts_logo.png';
import Info from '../images/info.png';


function Footer() {
    return (
        <div>
            <div className='section_footer' data-testid='section_footer'>
                
                <Stack direction="horizontal">
                
                    <div>
                        <a href="https://www.cornucopia.co.uk" target="_blank" className='section_footer_wrapper_title' data-testid='section_footer_wrapper_title'>https://www.cornucopia.co.uk</a>
                    </div>
                        
                </Stack>

                    
                </div>
        </div>
    );
}

export default Footer;