from app import app
from app.models import db

@app.route('/')
def hello():
    return "Hello World"