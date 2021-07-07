from flask_sqlalchemy import *
from flask import *
from init import app

app.config['SQLALCHEMY_DATABASE_URI']='mysql://root:1234@localhost/db'
db=SQLAlchemy(app)