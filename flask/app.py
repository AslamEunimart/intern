from flask import Flask
app = Flask(__name__)
from flask_app.routes.order_router import *
from flask_app.routes.customer_router import *
from flask_app.routes.relation_router import *

if __name__ == "__main__":
    app.run(host='localhost', port=5000,debug=True)
