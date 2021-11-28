import React from 'react'

function Login() {
    return (
        <div className="login">
            <h1 className="login_header" >Login</h1>
            <form className="login_form" >
                <div className="login_form_box" >
                        <label className="login_label" >Email :</label>
                        <input className="login_input"  placeholder="Jhondoe@gmail.com" />
                </div>
                <div className="login_form_box" >
                        <label className="login_label" >Password :</label>
                        <input className="login_input"  placeholder="Jhondoe@gmail.com" />
                </div>
                <p className="form_changer" > You dont have an account ? <span style={{color:"red",cursor:'pointer'}} >Singup</span>  </p>
                <div className="singup_form_button" >
                        Login
                </div>
            </form>
        </div>
    )
}

export default Login
