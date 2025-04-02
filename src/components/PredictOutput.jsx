import React from 'react';
import './PredictOutput.css';

const PredictOutput = ({ prediction }) => {
    const formattedPrediction = prediction ? parseFloat(prediction[0]).toFixed(3) : 'N/A';

    return (
        <>
            <div id='predictoutput-div'>
                <div id='predictoutput-left-div'>
                    <p id='predicted-o-title'>Predicted Price</p>
                    <p id='predicted-o'>₹ {formattedPrediction}</p>    {/* This should update from prediction with a ₹ symbol in front */}
                    <p id='predicted-o-description'>Accuracy 85%</p>
                </div>
                <div id='predictoutput-right-div'>
                    <h1 style={{ marginBottom: '10px' }}>Our Model</h1>
                    <p style={{ marginBottom: '5px' }}>
                        Our AI model is built to meticulously monitor and analyze the price trends of various commodities, offering deep insights into market dynamics. Leveraging advanced algorithms and machine learning techniques, it processes vast amounts of historical data to identify patterns and predict future price movements. The model continuously learns from new data inputs, ensuring that its predictions remain accurate and relevant over time.
                    </p>
                    <p style={{ marginBottom: '5px' }}>
                        By integrating diverse data sources, including market reports, historical pricing, and external economic indicators, the model provides a holistic view of the market. This comprehensive approach allows stakeholders to make informed decisions based on a thorough understanding of both current trends and potential future developments.
                    </p>
                    <p style={{ marginBottom: '5px' }}>
                        The model's adaptability is one of its key strengths. It is designed to respond to shifting market conditions, adjusting its predictions in real time to reflect the latest data. This ensures that users are always equipped with up-to-date information, whether they are planning for short-term fluctuations or developing long-term strategies.
                    </p>
                    <p style={{ marginBottom: '5px' }}>
                        Beyond simple forecasting, the AI model delves into nuanced market analysis, identifying underlying factors that could influence future price changes. It also considers seasonal trends, supply chain disruptions, and other external variables that could impact commodity prices, providing a well-rounded perspective on market behavior.
                    </p>
                </div>
            </div>
        </>
    );
};

export default PredictOutput;