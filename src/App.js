import React, { useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Body from './components/body/body';
import LandingPage from './components/landingPage/landingPage';

const App = () => {

  const [GTSLandingPageActivated, setGTSLandingPageActivated] = useState(true);

  const alterStateLandingPageActivated = () => {
   
    if (GTSLandingPageActivated === true){
      setGTSLandingPageActivated(false);
    } else {
      setGTSLandingPageActivated(true);
    }

    console.log(GTSLandingPageActivated);

  };



  return (

    <>
      {
        GTSLandingPageActivated ? <LandingPage alterStateLandingPageActivated={alterStateLandingPageActivated} Id="landingPage"/> :
        
        <>
          <Header/>

          <Body/>      

          <Footer/>
        </> 
      }
    </>
  

  )

}

export default App;