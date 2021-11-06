import React from 'react';
import {LogBox } from 'react-native';
import FlashMessage from "react-native-flash-message";

import Navigator from './navigations'

const App = () => {
    LogBox.ignoreAllLogs();

    return(
        <>
            <Navigator /> 
            <FlashMessage position="top" />
        </>
    )

}




export default App