import React from "react"

function Signin(props){
  
  // props destructuring
  const { userAuth } = props

  return (
    <div>
      <h1>Welcome to your travel budget planner!</h1>
      <a href='/auth/google'>
        <button 
          type="button" 
          className="btn btn-outline-info" 
          onClick={() => {
            userAuth();
          }}>
            Sign-in
        </button>
      </a>
    </div>
  )
}

export default Signin;
