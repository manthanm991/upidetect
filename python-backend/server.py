from flask import Flask,request,jsonify
import pickle

app = Flask(__name__)


# with open('UPIFraudDetectionModel.pkl','rb') as f:
#     model = pickle.load(f)


# @app.route('/predict',methods =['POST'])
# def predict():
#     data = request.json

#     features = [
#         data['type'],
#         data['amount'],
#         data['oldbalanceOrg'],
#         data['newbalanceOrig'],
#         data['oldbalanceDest'],
#         data['newbalanceDest']
#     ]
    
#     features = [features]

#     prediction = model.predict

#     return jsonify({'prediction': int(prediction[0])})

boolGenerator = BooleanGenerator()



@app.route('/gitBooleanValue',methods = ['GET'])
def getBoolean():
    result = boolGenerator.generate_boolean()

    return jsonify({'boolean_value': result})



    


if __name__ == '__main__':
    app.run(debug=True)



