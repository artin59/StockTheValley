from flask import Flask, jsonify
import pandas as pd

# Create a new Flask application instance
app = Flask(__name__)

# Load the S&P 500 data from the CSV file
df = pd.read_csv('C:\Users\artin\hello-world-app\python stuff\sp500.csv')

# Here you would have your logic for prediction, assuming you have some function that returns
# predictions based on your market data. For example, you might have used machine learning here.

# Endpoint to handle predictions
@app.route('/predict', methods=['GET'])
def predict():
    # Create an empty dictionary to store the graph data
    graph_data = {
        'dates': df['Date'].tolist(),  # Extract the 'Date' column and convert it to a list
        'actual': df['ActualPrice'].tolist(),  # Replace 'ActualPrice' with the name of your actual price column
        'predictions': df['Predicted'].tolist()  # Replace 'Predicted' with the name of your predicted column
    }
    
    # Here you could calculate the precision score based on your prediction logic
    precision_score = 0.5  # Replace this with your actual precision score logic

    # Return the graph data and precision score as JSON
    return jsonify({"graph_data": graph_data, "precision_score": precision_score})

# Main entry point of the application
if __name__ == '__main__':
    # Run the app with debug mode enabled
    app.run(debug=True)
