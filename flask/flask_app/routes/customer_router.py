from flaskapp.services.customer_service import *
from flaskapp.models.Order import *
from __init__ import app

@app.route("/addCustomer", methods=["POST"])
def add_customer():
    customer_data=request.get_json()
    Customer_services.add_customer(customer_data)
    res=Response("Customer added",201,mimetype='application/json')
    return res
@app.route("/getCustomers", methods=["GET"])
def get_customers():
    return jsonify({'Customers': Customer_services.get_customers()})