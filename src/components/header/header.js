import React, {useState, useEffect, useRef} from 'react';
import '../../css/components/header.css';
import infoPanelApiFetch from '../../helper/infoPanelApiFetch.js';
import Logo from '../../images/gts_logo.png';
import InfoTab from '../infoTab/infoTab';
import Stack from 'react-bootstrap/Stack';
import InfoAnimation from '../infoAnimation/infoAnimation';
import InfoPanelScrollingLogic from './infoPanelScrollingLogic';
import EnableDisableInfoPanel from './enableDisableInfoPanel';

function Header() {

    const [infoPanelActivated, setInfoPanelActivated] = useState(false);
    const [infoPanelData, setInfoPanelData] = useState([]);


    const infoPanelScrollingLogicController = () => {
        InfoPanelScrollingLogic({infoPanelActivated});
    }


    const changeStatePanelActivated = () => {

        if (infoPanelActivated == false) {
            setInfoPanelActivated(true);   
            
        } else {
            setInfoPanelActivated(false);
        }

        infoPanelScrollingLogicController();

    }

    //After functionality works, pass to popovers.
    

    
    const infoPanelDataHandler = (data) => {
        
        EnableDisableInfoPanel();

        if (data) {

            localStorage.setItem("info_tab_data", JSON.stringify(data));
            setInfoPanelData(data);

            
        } else {
            
            console.log("Something went wrong with the fetch, please try again");
            
        }
    }

    const fetchInfoPanelDataORResetInfoPanelDataState = async () => {
        
        const doesInfoPanelDataExistBoolean = JSON.parse(localStorage.getItem("info_tab_data")) === null;
        
        if (doesInfoPanelDataExistBoolean === true) {
            
            const data = await infoPanelApiFetch();

            infoPanelDataHandler(data);


        } else {
            
            //useEffect only runs on page load, so set state to local storage.

            setInfoPanelData(JSON.parse(localStorage.getItem("info_tab_data")));
            
        }
    }


    useEffect(() => {

        fetchInfoPanelDataORResetInfoPanelDataState();
        

        },[]);


    return (
        <div>
            
            {infoPanelActivated ? <InfoTab changeStatePanelActivated={changeStatePanelActivated} infoPanelData={infoPanelData}/> : 
                <section className='section section_header' data-testid="section_header">

                    <Stack direction="horizontal" gap={3}>
                        <div>
                    
                            <img className="section_header_logo" href="https://www.cornucopia.co.uk/gts/" target="_blank" data-testid="section_header_logo" src={Logo} target="_blank"/>
                        </div>
                        <div className="ms-auto"></div>
                        <div />
                        <div>  

                            <InfoAnimation changeStatePanelActivated={changeStatePanelActivated}/>
                            
                        </div>

                    </Stack>

                </section>
            }

        </div>
    )
}

export default Header;
