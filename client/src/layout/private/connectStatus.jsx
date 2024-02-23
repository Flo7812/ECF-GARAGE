import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { accountServices } from '../../_services/accountServices.js';


const ConnectStatus = () => {

    const url= useLocation()
    const originUrl = url.pathname.split('/')[1]

    const username = accountServices.displayUsername()

    return (
        <>
        <Link to={`/${originUrl}/home`} ><button>{username}</button></Link>
        <Link to={'/login'}><button onClick={accountServices.logout}>Logout</button></Link>
        </>
    );
};

export default ConnectStatus;