from flask_app.util.database import *
from flask_app.models.Customers import *
class Order(db.Model):
    __tablename__='orderslist'
    ord_id = db.Column('ord_id',db.Integer, unique=True, nullable=False, primary_key=True)
    cust_id=db.Column('cust_id',db.Integer,db.ForeignKey('customers.cust_id'),nullable=False)
    prod_id=db.Column('prod_id',db.Integer)
    amount=db.Column('amount',db.Integer)
    def json(self):
        return {'ord_id':self.ord_id,'cust_id':self.cust_id,'prod_id':self.prod_id,'amount':self.amount}

db.create_all()