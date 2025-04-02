import './predict.css';
import PredictBanner from '../../components/PredictBanner.jsx';
import PredictInput from '../../components/PredictInput.jsx';
import PredictOutput from '../../components/PredictOutput.jsx';
import Footer from '../../components/Footer.jsx';
import PredictionContainer from '../../components/PredictionContainer';

const Predict = () => {
    return(
        <>
            <PredictBanner />
            {/* <PredictInput /> */}
            {/* <PredictOutput /> */}
            <PredictionContainer />
            <Footer />
        </>
    )
}

export default Predict;