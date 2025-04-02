import React, { useState } from 'react';
import PredictInput from './PredictInput';
import PredictOutput from './PredictOutput';
import axios from 'axios';

const PredictionContainer = () => {
    const [prediction, setPrediction] = useState(null);

    const handlePrediction = (data) => {
        axios.post('http://localhost:5000/save-data', data)
            .then(response => {
                console.log('Response:', response.data);
                setTimeout(() => {
                    fetchPrediction();
                }, 3000);
            })
            .catch(error => {
                console.error('There was an error saving the data!', error);
            });
    };

    const fetchPrediction = () => {
        axios.get('output.json')
            .then(response => {
                setPrediction(response.data.prediction);
            })
            .catch(error => {
                console.error('There was an error fetching the prediction!', error);
            });
    };

    return (
        <div>
            <PredictInput onPredict={handlePrediction} />
            <PredictOutput prediction={prediction} />
        </div>
    );
};

export default PredictionContainer;