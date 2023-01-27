import React, {useState, useEffect, useRef} from 'react';
import '../../css/components/header.css';
import infoPanelApiFetch from '../../helper/infoPanelApiFetch.js';
import Logo from '../../images/gts_logo.png';
import InfoPanel from '../infoPanel/infoPanel';
import Stack from 'react-bootstrap/Stack';
import InfoIconModel from '../infoIconModel/infoIconModel';
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

            console.log("Data has been fetched successfully");
            console.log("Set it to localstorage");

            localStorage.setItem("info_tab_data", JSON.stringify(data));

            console.log("Data has now been set to state");
            setInfoPanelData(data);

            console.log("Activate the info panel now");
            changeStatePanelActivated();

            
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
            
            console.log("info panel data in localstorage now passed to state hooksetInfoPanelData");   
            
        }
    }

    useEffect(() => {

        fetchInfoPanelDataORResetInfoPanelDataState();
        

        },[]);


    return (
        <div>
            
            {infoPanelActivated ? <InfoPanel changeStatePanelActivated={changeStatePanelActivated} infoPanelData={infoPanelData}/> : 
                <section className='section section-header' data-testid="section_header">

                    <Stack direction="horizontal" gap={3}>
                        <div>
                    
                            <img className="section-header_logo" href="https://www.cornucopia.co.uk/gts/" target="_blank" data-testid="section_header_logo" src={Logo} target="_blank"/>
                        </div>
                        <div className="ms-auto"></div>
                        <div />
                        <div>  

                            <InfoIconModel changeStatePanelActivated={changeStatePanelActivated}/>
                            
                        </div>

                    </Stack>

                </section>
            }

        </div>
    )
}

export default Header;
