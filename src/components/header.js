import React, {useState} from 'react';
import '../css/components/header.css';
import Logo from '../images/gts_logo.png';
import Info from '../images/info.png';
import InfoTab from './infoTab';


//setState needs to be called at this level. Conditional rendering is going to be used in order determine whether
//Info tab should be displayed or not. When user opens window, context in Infotab needs to be set so that
//When user tries to close the page, that the context state changes appopriately.

function Header() {

    const [infoPanelActivated, setInfoPanelActivated] = useState(false);
    
    const changeStatePanelActivated = () => {
        setInfoPanelActivated(!infoPanelActivated);   
    }

    return (
        <div>
            {infoPanelActivated ? <InfoTab changeStatePanelActivated={changeStatePanelActivated}/> : 
                <section className='section section_header' data-testid="section_header">
                <img className="section_header_logo" href="https://www.cornucopia.co.uk/gts/" target="_blank" data-testid="section_header_logo" src={Logo} />
                <img className="section_header_info_logo" data-testid="section_header_info_logo" src={Info} onClick={changeStatePanelActivated}/>
                </section>
            }
          

        </div>
    )
}

export default Header;
