from flask import Flask,request,jsonify
from Predictions import FraudPredictor
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
fraudPredictor = FraudPredictor()

@app.route('/predictions', methods=['GET'])
def get_predictions():
    fraud_predictions = fraudPredictor.predict_fraud()
    return jsonify(fraud_predictions)

if __name__ == '__main__':
    app.run(debug=True)
