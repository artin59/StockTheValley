from flask import Flask, jsonify
import pandas as pd

app = Flask(__name__)

# Function to get the S&P 500 data
def get_sp500_data():
    # Load your CSV data or however you are getting it
    sp500 = pd.read_csv('sp500.csv')  # Update with the correct path
    return sp500

# Your model building or loading function
def build_model():
    # Your model logic here
    precision = 0.95  # Example precision score
    return precision

@app.route('/predict')
def predict():
    precision = build_model()
    sp500 = get_sp500_data()

    # Prepare data for graph
    actual = sp500["Close"].tail(100).tolist()
    dates = sp500.index[-100:].strftime("%Y-%m-%d").tolist()

    # Get predictions
    predictions = model.predict(test[predictors])  # Ensure model and predictors are defined

    # Create predicted prices based on your logic
    predicted_prices = [actual[i] if pred == 0 else actual[i] * (1 + (0.01)) for i, pred in enumerate(predictions)]

    # Structure response data
    response_data = {
        "precision_score": precision,
        "graph_data": {
            "dates": dates,
            "actual": actual,
            "predictions": predicted_prices,
        }
    }
    return jsonify(response_data)

if __name__ == '__main__':
    app.run(debug=True)
