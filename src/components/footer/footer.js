import React from 'react';
import '../../css/components/footer.css';
import Stack from 'react-bootstrap/Stack';


function Footer() {
    return (
 
            <section className='section_footer' data-testid='section_footer'>
                
                <Stack direction="horizontal">
                
                    <div>
                        <a href="https://www.cornucopia.co.uk" target="_blank" className='section_footer_wrapper_title' data-testid='section_footer_wrapper_title'>https://www.cornucopia.co.uk</a>
                    </div>
                        
                </Stack>

                    
            </section>
  
    );
}

export default Footer;