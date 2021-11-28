import React from 'react'

function Signup() {
    return (
        <div className="signup">
            <h1 className="signup_header" >Sign up</h1>
            <form className="signup_form" >
                    <div className="signup_form_box" >
                        <label className="signup_label" >Email :</label>
                        <input className="signup_input"  placeholder="Jhondoe@gmail.com" />
                    </div>
                    <div className="signup_form_box " >
                        <label className="signup_label" >First Name :</label>
                        <input className="signup_input"  placeholder="Jhon Doe " />
                    </div>
                    <div className="signup_form_box " >
                        <label className="signup_label" >Last Name :</label>
                        <input className="signup_input"  placeholder="Jhon Doe " />
                    </div>
                    <div className="signup_form_box" >
                        <label className="signup_label" >Password :</label>
                        <input className="signup_input"  placeholder="password " />
                    </div>
                    <p className="form_changer" > already have an account ? <span style={{color:"red",cursor:'pointer'}} >Login</span>  </p>
                    <div className="singup_form_button" >
                        Signup
                    </div>
               
                </form>
            </div>
    )
}

export default Signup
