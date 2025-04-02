import './TrendDiv.css';
import MyChart from './MyChart1.jsx';
import MyChart2 from './MyChart2.jsx';
import MyChart3 from './MyChart3.jsx';

const TrendDiv = () => {
    return (
        <div id='ppp-div'>
            <div className='trend-pp-div'>
                <div className='trend-p-div'>
                    <div className='trend-left-div'>
                        <div className='trend-data'>
                            <h1>Price Trends Summary (Maharashtra)</h1>
                            <h2>1. Onion:</h2>
                            <p>
                                The price of onions exhibited significant volatility over the years. It started at <strong>29.87 INR/kg</strong> in 2016, but the price fluctuated widely, dropping to a low of <strong>13.36 INR/kg</strong> in 2019. A dramatic spike occurred in 2020, with the price soaring to <strong>66.58 INR/kg</strong>, reflecting market instability. By 2021, the price had somewhat stabilized at <strong>38.20 INR/kg</strong>, though it remained higher than the earlier years.
                            </p>
                            <h2>2. Potato:</h2>
                            <p>
                                Potato prices were relatively more stable compared to onions. Starting at <strong>18.44 INR/kg</strong> in 2016, the price of potatoes showed modest fluctuations, generally hovering around the low 20s INR/kg for most of the period. However, 2020 saw a significant peak, with the price reaching <strong>42.49 INR/kg</strong>, likely due to external market factors. By 2021, the price had decreased to <strong>28.96 INR/kg</strong>, still higher than the initial years but more consistent with earlier stability.
                            </p>
                            <h2>3. Tomato:</h2>
                            <p>
                                Tomato prices displayed moderate variability throughout the years. Beginning at <strong>19.72 INR/kg</strong> in 2016, the prices experienced some ups and downs, with notable peaks in 2018 at <strong>32.00 INR/kg</strong> and in 2020 at <strong>41.98 INR/kg</strong>. The price trend reflected seasonal supply changes and market demands. By 2021, the price had adjusted to <strong>25.00 INR/kg</strong>, indicating a return to more moderate levels after the peaks of previous years.
                            </p>
                        </div>
                    </div>
                    <div className='trend-right-div'>
                        <MyChart />
                    </div>
                </div>
            </div>
            <div className='trend-pp-div'>
                <div className='trend-p-div'>
                    <div className='trend-right-div'>
                        <MyChart2 />
                    </div>
                    <div className='trend-left-div'>
                        <div className='trend-data'>
                            <h1>Price Trends Summary (Punjab)</h1>
                            <h2>1. Onion:</h2>
                            <p>
                                The price of onions demonstrated significant fluctuations over the years. Starting at <strong>28.93 INR/kg</strong> in 2016, it rose substantially to <strong>49.00 INR/kg</strong> in 2017. Following this peak, the price declined to <strong>16.00 INR/kg</strong> by 2019. In 2020, a dramatic surge saw prices spike to <strong>67.50 INR/kg</strong>, reflecting market volatility. By 2021, the price had moderated to <strong>43.33 INR/kg</strong>, still higher than previous years but showing a reduction from the peak.
                            </p>
                            <h2>2. Potato:</h2>
                            <p>
                                Potato prices remained relatively stable with periodic fluctuations. Initially at <strong>17.14 INR/kg</strong> in 2016, prices decreased to <strong>10.00 INR/kg</strong> by 2019. The price reached a peak of <strong>35.00 INR/kg</strong> in 2020 before dropping back to <strong>15.00 INR/kg</strong> in 2021. This indicates a return to more stable pricing after a significant spike.
                            </p>
                            <h2>3. Tomato:</h2>
                            <p>
                                Tomato prices showed notable variability, beginning at <strong>50.67 INR/kg</strong> in 2016. The price fell to <strong>20.00 INR/kg</strong> in 2018, showing a substantial decrease. However, it rebounded to <strong>48.75 INR/kg</strong> in 2020. By 2021, prices settled at <strong>30.00 INR/kg</strong>, reflecting a mix of high variability and some stabilization towards the end of the period.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='trend-pp-div'>
                <div className='trend-p-div'>
                    <div className='trend-left-div'>
                        <div className='trend-data'>
                            <h1>Price Trends Summary (Uttar Pradesh)</h1>
                            <h2>1. Onion:</h2>
                            <p>
                                Onion prices demonstrated considerable variability throughout the period. Starting at <strong>25.17 INR/kg</strong> in 2016, prices saw a significant increase to <strong>45.34 INR/kg</strong> in 2017. However, this was followed by a decline to <strong>18.43 INR/kg</strong> in 2019. The prices surged dramatically to <strong>66.50 INR/kg</strong> in 2020 before slightly decreasing to <strong>42.35 INR/kg</strong> in 2021. This trend reflects substantial volatility with both significant peaks and troughs.
                            </p>
                            <h2>2. Potato:</h2>
                            <p>
                                Potato prices remained relatively stable with some fluctuations over the years. Beginning at <strong>13.33 INR/kg</strong> in 2016, prices experienced a gradual increase, peaking at <strong>19.61 INR/kg</strong> in 2018. The price showed considerable variation, reaching a notable peak of <strong>37.13 INR/kg</strong> in 2021. The overall trend indicates moderate changes with occasional spikes and dips, reflecting some market instability.
                            </p>
                            <h2>3. Tomato:</h2>
                            <p>
                                Tomato prices exhibited significant variability over the years. Starting at <strong>24.78 INR/kg</strong> in 2016, prices rose to <strong>46.27 INR/kg</strong> in 2018. The prices reached a high of <strong>58.33 INR/kg</strong> in 2021, reflecting a notable peak after experiencing fluctuations in the interim years. This trend shows a mix of high variability and occasional peaks, highlighting both substantial increases and market fluctuations.
                            </p>
                        </div>
                    </div>
                    <div className='trend-right-div'>
                        <MyChart3 />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendDiv;