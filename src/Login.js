import React, {useState} from 'react'
import { Redirect, useLocation } from 'react-router-dom'

function Login() {


    const { state } = useLocation();
    const { from } = state || {from:{pathname:"/"}}
    const [redirectToReferrer, setRedirectToReferrer ] = useState(false);


    const login = ( ) =>{
        fakeAuth.authenticate(( ) =>{
            setRedirectToReferrer(true);
        })
    }

    if (redirectToReferrer){
        return <Redirect to={from} />
    }


    return (
        <div>
            <p>You must log in to view the page at {from.pathname}</p>
            <button onClick={login}>Login</button>
        </div>
    )
}
 

export const fakeAuth ={
    isAuthenticated: false,
    authenticate(cb){
        this.isAuthenticated= true;
        setTimeout(cb,100)
    }
}

export default Login
