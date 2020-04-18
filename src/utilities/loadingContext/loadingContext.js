import React, {useState} from 'react';
const LoadingContext = React.createContext();

function LoadingContextProvider(props) {
    const [navbarLoading, setNavbarLoading] = useState(false);
    const [homepageLoading, setHomepageLoading] = useState(false);
    // const [aboutLoading, setAboutLoading] = useState(false);
    // const [fleetLoading, setFleetLoading] = useState(false);
    // const [rocketLoading, setRocketLoading] = useState(false);
    // const [careersLoading, setCareersLoading] = useState(false);
    // const [historyLoading, setHistoryLoading] = useState(false);
    const [loading, setLoading] = useState(0)

    function increment(){
        if( loading < 4) {
            setLoading(prev => prev + 1)
            console.log("adding", loading)
        }
    }
    function reset(){
        setLoading(0)
    }

    function handleNavbarLoading() {
        setNavbarLoading(true)
        
    }
    function handleHomepageLoading() {
        setHomepageLoading(true)
    }
    // function handleAboutLoading() {
    //     setAboutLoading(true)
    //     console.log("about")
    // }
    // function handleFleetLoading() {
    //     setFleetLoading(true)
    // }
    // function handleRocketLoading() {
    //     setRocketLoading(true)
    // }
    // function handleCareersLoading() {
    //     setCareersLoading(true)
    // }
    // function handleHistoryLoading() {
    //     setHistoryLoading(true)
    // }

    return (
        <LoadingContext.Provider 
        value={{
            navbarLoading,
            handleNavbarLoading,
            homepageLoading,
            handleHomepageLoading,
            // aboutLoading,
            // handleAboutLoading,
            // fleetLoading,
            // handleFleetLoading,
            // rocketLoading,
            // handleRocketLoading,
            // careersLoading,
            // handleCareersLoading,
            // historyLoading,
            // handleHistoryLoading,
            loading,
            increment,
            reset
            }}>
            {props.children}
        </LoadingContext.Provider>
    )
}

export {LoadingContextProvider, LoadingContext};