import React from 'react';
import '../../css/components/footer.css';
import Stack from 'react-bootstrap/Stack';


function Footer() {
    return (
 
            <section className='section-footer' data-testid='section_footer'>
                
                <Stack direction="horizontal">
                
                    <div>
                        <a href="https://www.cornucopia.co.uk" target="_blank" className='section-footer_gts-hyperlink' data-testid='section_footer_wrapper_title'>https://www.cornucopia.co.uk</a>
                    </div>
                        
                </Stack>

                    
            </section>
  
    );
}

export default Footer;