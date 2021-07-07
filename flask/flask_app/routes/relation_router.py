from flask_app.services.customer_service import *
from init import app

@app.route("/getCustInfoOfOrd", methods=["GET"])
def get_cust_orders():
    request_data=request.get_json()
    return jsonify({'Customer': Relation_services.get_cust_info(request_data)})

@app.route("/getOrdsByCustname", methods=["GET"])
def get_orders_custname():
    request_data=request.get_json()
    return jsonify({'Orders': Relation_services.get_orders_custname(request_data)})