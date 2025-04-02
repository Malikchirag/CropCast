import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import axios from 'axios';

const app = express();
const port = 5000;

app.use(cors()); // Enable CORS
app.use(bodyParser.json());

app.post('/save-data', async (req, res) => {
    const data = req.body;
    console.log('Received data:', data);

    // Read existing data from data.json
    fs.readFile('data.json', 'utf8', (err, jsonData) => {
        if (err && err.code !== 'ENOENT') {
            console.error('Error reading data.json:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        let existingData = [];
        if (jsonData) {
            existingData = JSON.parse(jsonData);
        }

        // Add new data to existing data
        existingData.push(data);

        // Write updated data back to data.json
        fs.writeFile('data.json', JSON.stringify(existingData, null, 2), async (err) => {
            if (err) {
                console.error('Error writing to data.json:', err);
                return res.status(500).json({ message: 'Internal server error' });
            }

            try {
                // Send data to the Python server for prediction
                const response = await axios.post('http://localhost:5001/predict', data);
                const prediction = response.data.prediction;
                res.json({ message: 'Data received and saved successfully', prediction });
            } catch (error) {
                console.error('Error getting prediction:', error);
                res.status(500).json({ message: 'Error getting prediction' });
            }
        });
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});