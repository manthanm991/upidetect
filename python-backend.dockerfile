FROM python:latest

WORKDIR /app

COPY python-backend/requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY python-backend/ .

COPY python-backend/UPIFraudDetectionModel.pkl /app/

EXPOSE 5000

CMD ["python", "server.py"]
