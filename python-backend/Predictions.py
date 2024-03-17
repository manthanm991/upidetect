import pickle
from DatabaseInit import DBInit
from CRUDOperations import DBOperations

class FraudPredictor:
    def __init__(self, model_path = r'UPIFraudDetectionModel.pkl'):
        with open(model_path, 'rb') as f:
            self.model = pickle.load(f)

        self.db_init = DBInit()
        self.db_operations = DBOperations(self.db_init)

    def predict_fraud(self):
        latest_document = self.db_operations.collection.find_one(sort=[('_id', -1)])
        if latest_document:
            transaction_data = [
                latest_document['type'],
                latest_document['amount'],
                latest_document['oldbalanceorg'],
                latest_document['newbalanceorg'],
                latest_document['oldbalancedestination'],
                latest_document['newbalancedestination']
            ]
        
            transaction_data[0] = self.type_to_numeric(transaction_data[0])

            is_fraud = self.model.predict([transaction_data])[0]
            
            return [bool(is_fraud)]  
        else:
            return []  

    def type_to_numeric(self, transaction_type):
        mapping = {'CASH_OUT': 1, 'PAYMENT': 2, 'CASH_IN': 3, 'TRANSFER': 4, 'DEBIT': 5}
        return mapping.get(transaction_type, 0)
