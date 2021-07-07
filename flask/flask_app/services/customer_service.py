from flask_app.util.database import *
import json
from flask_app.models.Customer import *
class Customer_services:
    def add_customer(cust_data):
        new_cust=Customer(cust_id=cust_data["cust_id"],cust_name=cust_data["cust_name"],
                            email=cust_data["email"],address=cust_data["address"])
        db.session.add(new_cust)
        db.session.commit()
    def get_customers():
        return [Customer.json(customers) for customers in Customer.query.all()]
    