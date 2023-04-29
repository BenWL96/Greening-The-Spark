import React, { useState } from "react";
import "./App.css";
import GtsApp from "./components/gtsApp/gtsApp";
import LandingPage from "./components/landingPage/landingPage";

const App = () => {
  const [GTSLandingPageActivated, setGTSLandingPageActivated] = useState(true);

  const alterStateLandingPageActivated = () => {
    if (GTSLandingPageActivated === true) {
      setGTSLandingPageActivated(false);
    } else {
      setGTSLandingPageActivated(true);
    }

    console.log(GTSLandingPageActivated);
  };

  return (
    <>
      {GTSLandingPageActivated ? (
        <LandingPage
          alterStateLandingPageActivated={alterStateLandingPageActivated}
          id="landingPage"
        />
      ) : (
        <GtsApp 
        alterStateLandingPageActivated={alterStateLandingPageActivated}
        />
      )}
    </>
  );
};

export default App;
