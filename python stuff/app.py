from flask import Flask, jsonify
from market_prediction import build_model, get_sp500_data  # Import the necessary functions

app = Flask(__name__)

@app.route('/predict', methods=['GET'])
def predict():
    """Endpoint to get the precision score and graph data of the S&P 500 prediction model."""
    precision, graph_data = build_model()
    return jsonify({
        'precision_score': precision,
        'graph_data': graph_data
    })

if __name__ == '__main__':
    app.run(debug=True)
