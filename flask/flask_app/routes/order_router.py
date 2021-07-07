from flask_app.services.order_service import *
from flask_app.models.Order import *
from init import app

@app.route("/addOrder", methods=["POST"])
def add_order():
    order_data=request.get_json()
    Order_services.add_Order(order_data)
    res=Response("Order added",201,mimetype='application/json')
    return res

@app.route("/getOrders", methods=["GET"])
def get_orders():
    return jsonify({'Orders': Order_services.get_orders()})

@app.route("/updateOrder",methods=["PUT"])
def update():
    order_data=request.get_json()
    Order_services.update_order(order_data)
    res = Response("Order Updated", status=200, mimetype='application/json')
    return res

@app.route("/deleteOrder",methods=["DELETE"])
def delete():
    order_data=request.get_json()
    Order_services.delete_order(order_data)
    res = Response("Order Deleted", status=200, mimetype='application/json')
    return res

