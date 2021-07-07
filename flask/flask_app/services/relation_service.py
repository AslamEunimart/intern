from flask import *
from flaskapp.models.Order import *
from flaskapp.models.Customer import *
from flaskapp.util.database import *
import json

class Relation_services:
    def get_cust_info(request_data):
        ord=(Order.query.filter_by(ord_id=request_data["ord_id"]).first())
        res= Customer.query.filter_by(cust_id= ord.cust_id).first()
        return Customer.json(res)

    def get_orders_custname(request_data):
        cust=(Customer.query.filter_by(cust_name=request_data["cust_name"]).first())
        return [Order.json(orders) for orders in Order.query.filter_by(cust_id= cust.cust_id).all()]
        
