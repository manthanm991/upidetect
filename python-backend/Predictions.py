import pickle
from DatabaseInit import DBInit
from CRUDOperations import DBOperations

class FraudPredictor:
    def __init__(self, model_path='python-backend/UPIFraudDetectionModel.pkl'):
        with open(model_path, 'rb') as f:
            self.model = pickle.load(f)

        self.db_init = DBInit()
        self.db_operations = DBOperations(self.db_init)

    def predict_fraud(self):
        cursor = self.db_operations.collection.find()
        results = []

        for document in cursor:
            transaction_data = [
                document['type'],
                document['amount'],
                document['oldbalanceOrg'],
                document['newbalanceOrg'],
                document['oldbalanceDest'],
                document['newbalanceDest']
            ]
        
            is_fraud = self.model.predict([transaction_data])[0]
            results.append(bool(is_fraud))

        return results