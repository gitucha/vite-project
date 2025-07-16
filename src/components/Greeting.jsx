import React from 'react'


// conditional rendering
function Greeting({ isLoggedIn }) {

    // if(isLoggedIn){
    //     return <h1>Welcome Back!</h1>
    // }else{
    //     return <h1>Please Log In</h1>
    // }

    //   return (
    //     <div>
    //         {/* <h1>{isLoggedIn ? 'Welcome Back' : 'Please Log In'}</h1> */}
    //     </div>
    //    )

    return (
        //    <div>
        //     {isLoggedIn ? <button>Logout</button> : <button> Log In </button> }
        //    </div>
        <div>
            <h1>Hello User</h1>
            {isLoggedIn && <p>Welcome back! We Missed You</p>}
        </div>
    )
}

export default Greeting