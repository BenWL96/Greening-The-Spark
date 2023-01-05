const InfoPanelScrollingLogic = ({infoPanelActivated}) => {


    if (infoPanelActivated === true) {

        document.body.style.overflow = "scroll";
        
        
    } else if (infoPanelActivated === false) {

        
        document.body.style.overflow = "hidden";
        
    }

}

export default InfoPanelScrollingLogic;