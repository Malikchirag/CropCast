import './Banner.css';
import InfoSquares from './InfoSquares.jsx';

const Banner = () => {
    return (
        <div id='banner-div'>
            <img src='../public/wheat-image-1.jpg' alt='wheat' className='banner-img' />
            <div id='banner-text-div'>
                <div id='banner-text-div-2'>
                    <div id='banner-left-div'>
                        <p id='banner-title'>CropCast: Empowering Farmers with Future Price Predictions</p>
                        <p id='banner-description'>Empower your farming strategy with CropCast’s AI-driven price predictions, offering up to 90% accuracy. Anticipate market trends, plan your harvests, and optimize sales to maximize profits while minimizing risks. With CropCast, stay ahead of horticulture pricing fluctuations and ensure your farm’s success with an intuitive and user-friendly platform designed to keep you informed and prepared.</p>
                    </div>
                    <div id='banner-right-div'>
                        <img src='../public/farmer-img-4.png' alt='farmer-image' id='farmer-img' />
                    </div>
                </div>
                <div id='banner-infobox'>
                    <InfoSquares infoimg="../public/ailogo.png" infotitle='AI-Powered Predictions' infotext='Up to 90% accurate forecasts for future horticulture prices.' />
                    <InfoSquares infoimg="../public/customlogo.png" infotitle='Custom Crop Insights' infotext='Tailored predictions to optimize your farming strategy.' />
                    <InfoSquares infoimg="../public/easytouselogo.png" infotitle='Easy to Use' infotext='Intuitive platform designed for all farmers.' />
                    <InfoSquares infoimg="../public/realtimelogo.png" infotitle='Real-Time Updates' infotext='Stay informed with live market trends and forecasts.' />
                </div>
            </div>
        </div>
    )
}

export default Banner;