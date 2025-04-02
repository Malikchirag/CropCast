from flask import Flask, request, jsonify
import joblib
import pandas as pd
import json

app = Flask(__name__)

# Load the model
model = joblib.load('finally.joblib')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json  # Correctly parse the incoming JSON data
    # Extract features from the request data
    features = {
        'State': data['State'],
        'Centre': data['Centre'],
        'Commodity': data['Commodity'],
        'Unit': data['Unit'],
        'Year': data['Year'],
        'Month': data['Month'],
        'Week': data['Week']
    }
    # Convert features to DataFrame
    features_df = pd.DataFrame([features])
    # Make prediction
    prediction = model.predict(features_df)
    
    # Prepare the result to be saved
    result = {
        'input': features,
        'prediction': prediction.tolist()
    }
    
    # Overwrite output.json with the new result
    with open('output.json', 'w') as file:
        json.dump(result, file, indent=2)
    
    return jsonify({'prediction': prediction.tolist()})

if __name__ == '__main__':
    app.run(port=5001)