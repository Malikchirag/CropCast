import './Footer.css';

const Footer = () => {
    return (
        <>
            <hr className='hr' />
            <div id='footer-div'>
                <p className='footer-tags'>Privacy Policy</p>
                <p className='footer-tags'>Terms Of Service</p>
                <p className='footer-tags'>Contact Us</p>
            </div>
            <div id='footer-div-2'>
                <p className='footer-tags' id='footer-cropcast'>© 2024 Cropast. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer;