import React from 'react';
import '../../css/components/loadingPage.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

function LoadingPage({loadingScreenValue}) {

    function AnimatedExample() {
        return <ProgressBar animated now={loadingScreenValue} label={`${loadingScreenValue.toFixed(0)}%`} className="progressbar" />;
    }

    return (

        <div className="loading_screen_background">
            <div className="loading_screen_wrapper">
                <AnimatedExample/>
            </div>
        </div>
            
    
    );
}

export default LoadingPage;