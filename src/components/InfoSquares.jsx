import './InfoSquares.css';

const InfoSquares = ({infoimg, infotitle, infotext}) => {
    return (
        <div id='is-div'>
            <div id='is-fl'>
                <img src={infoimg} alt='AI Logo' className='info-square-img' />
            </div>
            <div id='is-2'>
                <p id='is-title'>{infotitle}</p>
                <p id='is-description'>{infotext}</p>
            </div>
        </div>
    )
}

export default InfoSquares;