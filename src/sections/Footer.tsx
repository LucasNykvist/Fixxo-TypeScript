import React from 'react'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container-fluid'>
                <div className='social-media'>
                    <a href='https://sv-se.facebook.com/' target="blank"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href='https://www.instagram.com/' target="blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href='https://twitter.com/?lang=sv' target="blank"><i className="fa-brands fa-twitter"></i></a>
                    <a href='https://www.google.se/?hl=sv' target="blank"><i className="fa-brands fa-google"></i></a>
                    <a href='https://se.linkedin.com/' target="blank"><i className="fa-brands fa-linkedin"></i></a>
                </div>
                <div className='copyright'>
                    © 2022 Fixxo. All Rights Reserved
                </div>
            </div>
        </footer>
    )
}

export default Footer