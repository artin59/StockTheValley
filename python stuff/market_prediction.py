import yfinance as yf
import pandas as pd
import os
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import precision_score

def get_sp500_data():
    """Fetch or load S&P 500 data."""
    if os.path.exists("sp500.csv"):
        sp500 = pd.read_csv("sp500.csv", index_col=0)
    else:
        sp500 = yf.Ticker("^GSPC").history(period="max")
        sp500.to_csv("sp500.csv")
    sp500.index = pd.to_datetime(sp500.index)
    sp500 = sp500.loc["1990-01-01":].copy()
    return sp500

def build_model():
    """Build the model and perform predictions."""
    sp500 = get_sp500_data()

    # Prepare data
    sp500["Tomorrow"] = sp500["Close"].shift(-1)
    sp500["Target"] = (sp500["Tomorrow"] > sp500["Close"]).astype(int)
    predictors = ["Close", "Volume", "Open", "High", "Low"]

    # Train Random Forest model
    model = RandomForestClassifier(n_estimators=200, min_samples_split=50, random_state=1)
    train = sp500.iloc[:-100]
    test = sp500.iloc[-100:]
    model.fit(train[predictors], train["Target"])

    # Prediction and precision score
    preds = model.predict(test[predictors])
    precision = precision_score(test["Target"], preds)

    # Prepare graph data
    graph_data = {
        'dates': test.index.strftime('%Y-%m-%d').tolist(),
        'actual': test['Target'].tolist(),
        'predictions': preds.tolist()
    }

    return precision, graph_data

# The function `build_model()` can now be called from Flask to serve the model precision score.
