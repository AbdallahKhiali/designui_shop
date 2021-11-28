import React from 'react'
import "../style/newsletter.css"
function Newsletter() {
    return (
        <div className="newsletter">
            <div className="newsletter_content" >
                <h1 className="newsletter_header" >Stay in Touch</h1>
                <p className="newsletter_subheader">
                    We send really good emails about new products and promotions.
                    <br/>  We’ll also sometimes make you playlists.
                </p>
                <form>
                    <label>Email</label>
                    <input type="text" placeholder="Jhon_doe@gmail.com" className="newsletter_input"/>
                    <div className="newsletter_button">Subscribe</div>
                </form>
            </div>
            <h1 className="company_sign" >
                Ak
            </h1>
        </div>
    )
}

export default Newsletter
