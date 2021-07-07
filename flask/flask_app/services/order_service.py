from flask import *
from flaskapp.models.Order import *
from flaskapp.util.database import *
import json

class Order_services:
    def add_Order(order_data):
        new_or=Order(ord_id=order_data["ord_id"],cust_id=order_data["cust_id"],
                        prod_id=order_data["pro_id"],amount=order_data["amount"])
        db.session.add(new_or)
        db.session.commit()
    def get_orders():
        return [Order.json(orders) for orders in Order.query.all()]
    def update_order(order_data):
        order = Order.query.filter_by(ord_id=order_data["ord_id"]).first()
        order.cust_id =order_data["cust_id"]
        order.prod_id=order_data["pro_id"]
        order.amount=order_data["amount"]
        db.session.commit()
    def delete_order(_ordid):
        order = Order.query.filter_by(ord_id=order_data["ord_id"]).first()
        db.session.delete(order)
        db.session.commit()