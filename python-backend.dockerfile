FROM python:latest

WORKDIR /app

COPY python-backend/requirements.txt .

RUN pip install -r requirements.txt

COPY python-backend/ .

EXPOSE 5000

CMD [ "python","server.py" ]