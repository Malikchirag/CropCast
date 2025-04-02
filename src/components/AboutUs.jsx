import './AboutUs.css';

const AboutUs = () => {
    return (
        <div id='au-parent-div'>
            <div id='au-div'>
                <div id='au-left-div'>
                    <img src='../public/india-map-1.png' alt='india-map' id='au-img' />
                </div>
                <div id='au-right-div'>
                    <p id='au-title'>About CropCast</p>
                    <p id='au-description'>CropCast is a powerful tool that uses advanced AI and machine learning algorithms to predict the prices of vegetables and pulses. By analyzing historical data, market trends, and other relevant factors, CropCast provides accurate and reliable price forecasts to help businesses and consumers make informed decisions. With CropCast, you can stay ahead of the market and make more informed purchasing decisions. Our intuitive interface and comprehensive data visualizations make it easy to understand and interpret the price predictions. Whether you're a farmer, a wholesaler, or a consumer, CropCast can help you navigate the volatile commodity market and make the most of your investments.</p>
                    <p id='au-title'>Key Features</p>
                    <ul id="au-description-ul">
                        <li>Accurate price predictions for vegetables and pulses.</li>
                        <li>Customizable forecasting models to suit your needs.</li>
                        <li>Detailed historical data and trend analysis.</li>
                        <li>User-friendly interface with intuitive data visualizations.</li>
                        <li>Alerts and notifications for price changes and market updates.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;