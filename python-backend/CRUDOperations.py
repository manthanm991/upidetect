from DatabaseInit import DBInit

class DBOperations:
    def __init__(self, databaseInit):
        self.collection = databaseInit.collection

    def insertFinalResults(self, document):
        return self.collection.insert_one(document)

    def readData(self, query):
        return self.collection.find_one(query)
    