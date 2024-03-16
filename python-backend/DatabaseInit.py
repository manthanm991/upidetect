from pymongo import MongoClient

class DBInit:
    def __init__(self, db_name='upidetect',collection_name='forms'):
        self.client = MongoClient('mongodb://localhost:27017/')
        self.db = self.client[db_name]
        self.collection = self.db[collection_name]