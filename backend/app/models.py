from app import app
from flask import Flask,jsonify,session
from flask_pymongo import PyMongo
import uuid
from passlib.hash import pbkdf2_sha256

app.config["MONGO_URI"]="mongodb://localhost:27017/shorty"
db=PyMongo(app).db

class User:

    def start_session(self,user):
        del user["password"]
        session['logged_in']=True
        session['user']=user
        return jsonify(user),200

    def signup(self,user):

        user["_id"]=uuid.uuid4().hex
        user["password"]=pbkdf2_sha256.encrypt(user["password"])

        if db.users.find_one({"email":user["email"]}):
            return jsonify({"error":"Email address already in use"}),400

        if db.users.insert_one(user):
            return self.start_session(user)

        return jsonify({"error":"Something went wrong"}),400
    
    def signout(self):
        session.clear()
        return jsonify({"status":"Signout successful"})
    
    def login(self,check_user):
        user=db.users.find_one({"email":check_user["email"]})

        if user and pbkdf2_sha256.verify(check_user['password'],user['password']):
            return self.start_session(user)
        
        return jsonify({"error":"invalid credentials"}),401