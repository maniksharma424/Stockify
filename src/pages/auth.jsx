import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const Auth = () => {
    const[isSignup,setIsSignup] = useState(false)
    const handleAuthentication = ()=>{
        setIsSignup(n =>!n)
    }
    // {isSignup ?  <section>
    //     <Login handleAuthentication={handleAuthentication} />
    // </section>:  (
    //     <section>
    //         <Signup handleAuthentication={handleAuthentication} />
    //     </section>
    // )}

    if(isSignup) return <Login handleAuthentication={handleAuthentication} />
    
    else return <Signup handleAuthentication={handleAuthentication}/>

    
}

export default Auth;