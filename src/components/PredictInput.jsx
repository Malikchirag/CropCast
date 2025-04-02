import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { getYear, getMonth, getWeek, startOfWeek, endOfWeek, addDays } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import './PredictInput.css';

const commodities = [
    'Rice', 'Gram', 'Salt', 'Tea', 'Coffee', 'Potato', 'Moong', 'Onion', 'Sugar', 'Arhar',
    'Tomato', 'Urad', 'Brinjal', 'Banana', 'Turmeric', 'Atta', 'Red Chillies', 'Suji', 'Maida',
    'Black Pepper', 'Masur', 'Coriander', 'Besan', 'Apple', 'Cummin Seed', 'Maize', 'Bajra',
    'Jowar', 'Ragi'
];

const stateDistricts = {
    "Andhra Pradesh": ['Chittoor', 'Guntur', 'Kurnool', 'Vishakhapatnam'],
    "Arunachal Pradesh": ['Itanagar'],
    "Assam": ['Dibrugarh', 'Silchar', 'Guwahati', 'Dispur'],
    "Bihar": ['Hajipur', 'Patna', 'Muzaffarpur', 'Gaya'],
    "Goa": ['Panaji'],
    "Gujarat": ['Gandhi Nagar', 'Vadodra', 'Surat', 'Rajkot'],
    "Haryana": ['Karnal', 'Hissar'],
    "Himachal Pradesh": ['Mandi', 'Shimla'],
    "Jammu Kashmir": ['Shrinagar', 'Jammu'],
    "Jharkhand": ['Dhanbad', 'Ranchi'],
    "Karnataka": ['Bangalore', 'Tumkur', 'Hubli', 'Bijapur'],
    "Kerala": ['Ernakulam', 'Khozhikode', 'Trivandrum'],
    "Madhya Pradesh": ['Bhopal', 'Sehore', 'Gwalior', 'Rewa', 'Bhillai', 'Indore'],
    "Maharashtra": ['Nasik', 'Mumbai', 'Pune', 'Aurangabad', 'Nagpur'],
    "Manipur": ['Imphal'],
    "Meghalaya": ['Shillong'],
    "Mizoram": ['Aizwal'],
    "Nagaland": ['Kohima'],
    "National Capital": ['Delhi'],
    "Orissa": ['Bhubneshwar', 'Cuttack', 'Bhawanipatna'],
    "Punjab": ['Amritsar', 'Ludhiana', 'Bhatinda'],
    "Rajasthan": ['Dausa', 'Jaipur', 'Udaipur', 'Jodhpur', 'Swaimadhopur'],
    "Sikkim": ['Gangtok'],
    "Tamil Nadu": ['Coimbatore', 'Madurai', 'Tirunelveli', 'Salem', 'Chennai', 'Tambram'],
    "Telangana": ['Hyderabad'],
    "Tripura": ['Agartala'],
    "Union Territories": ['Chandigarh', 'Portblair', 'Pondicherry', 'Silvasa'],
    "Uttar Pradesh": ['Agra', 'Allahabad', 'Gorakhpur', 'Lucknow', 'Kanpur', 'Saharanpur'],
    "Uttarakhand": ['Haldwani', 'Srinagar'],
    "West Bengal": ['Howrah', 'Kolkata', 'Malda', 'Asansol', 'Jalpaiguri']
};

const PredictInput = ({ onPredict }) => {
    const [selectedState, setSelectedState] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedCommodity, setSelectedCommodity] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [highlightedDates, setHighlightedDates] = useState([]);

    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
        setSelectedDistrict('');
    };

    const handleDistrictChange = (e) => {
        setSelectedDistrict(e.target.value);
    };

    const handleCommodityChange = (e) => {
        setSelectedCommodity(e.target.value);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        const start = startOfWeek(date, { weekStartsOn: 1 });
        const end = endOfWeek(date, { weekStartsOn: 1 });
        const week = [];
        for (let i = 0; i < 7; i++) {
            week.push(addDays(start, i));
        }
        setHighlightedDates(week);
    };

    const handleSubmit = () => {
        const data = {
            'State': selectedState,
            'Centre': selectedDistrict,
            'Commodity': selectedCommodity,
            'Unit': 'Kg.',
            'Year': getYear(selectedDate),
            'Month': getMonth(selectedDate) + 1,
            'Week': getWeek(selectedDate)
        };

        console.log('Submitting data:', data);
        onPredict(data);
    };

    return (
        <>
            <div id='predictinput-div'>
                <p className='predict-title'>Price Prediction</p>
                <div id='input-section'>
                    <div>
                        <p className='predict-label'>Select Commodity:</p>
                    </div>
                    <div>
                        <select
                            className={selectedCommodity ? 'filled-select' : ''}
                            value={selectedCommodity}
                            onChange={handleCommodityChange}
                        >
                            <option value="" disabled>Select a Commodity</option>
                            {commodities.map((commodity) => (
                                <option key={commodity} value={commodity}>
                                    {commodity}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <p className='predict-label'>Select State:</p>
                    </div>
                    <div>
                        <select
                            className={selectedState ? 'filled-select' : ''}
                            value={selectedState}
                            onChange={handleStateChange}
                        >
                            <option value="" disabled>Select a State</option>
                            {Object.keys(stateDistricts).map((state) => (
                                <option key={state} value={state}>
                                    {state}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <p className='predict-label'>Select District:</p>
                    </div>
                    <div>
                        <select
                            className={selectedDistrict ? 'filled-select' : ''}
                            value={selectedDistrict}
                            onChange={handleDistrictChange}
                            disabled={!selectedState}
                        >
                            <option value="" disabled>Select a District</option>
                            {selectedState &&
                                stateDistricts[selectedState].map((district) => (
                                    <option key={district} value={district}>
                                        {district}
                                    </option>
                                ))}
                        </select>
                    </div>
                    <div>
                        <p className='predict-label'>Select Week:</p>
                    </div>
                    <div>
                        <DatePicker
                            className='calendar'
                            selected={selectedDate}
                            onChange={handleDateChange}
                            showWeekNumbers
                            showYearDropdown
                            showMonthDropdown
                            dropdownMode="select"
                            dateFormat="yyyy, w"
                            minDate={new Date(2015, 0, 1)}
                            maxDate={new Date(2026, 11, 31)}
                            placeholderText="Select a week"
                            highlightDates={highlightedDates}
                        />
                    </div>
                    <div>
                        <button className='predict-button' onClick={handleSubmit}>Predict Prices</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PredictInput;