from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression

app = Flask(__name__)

@app.route("/")
def home():
    return "ML Server Working!"

@app.route("/weak-subject", methods=["POST"])
def weak_subject():
    data = request.json["marks"]
    min_subject = min(data, key=data.get)
    return jsonify({"weak_subject": min_subject})

@app.route("/predict-cgpa", methods=["POST"])
def predict_cgpa():
    past = request.json["past"]
    X = np.array(range(len(past))).reshape(-1, 1)
    y = np.array(past)

    model = LinearRegression()
    model.fit(X, y)

    next_cgpa = model.predict([[len(past)]])[0]
    return jsonify({"predicted_cgpa": round(float(next_cgpa), 2)})

if __name__ == "__main__":
    app.run(port=8000)
