from flask_app.util.database import *
from flask_app.models.Order import *
class Customer(db.Model):
    __tablename__='customers'
    cust_id= db.Column('cust_id',db.Integer, unique=True, nullable=False, primary_key=True)
    cust_name=db.Column('cust_name',db.Unicode(30))
    email=db.Column('email',db.Unicode(20))
    address=db.Column('address',db.Unicode(30))
    orders=db.relationship('Order',backref='customer')
    def json(self):
        return {'cust_id':self.cust_id,'cust_name':self.cust_name,'email':self.email,'address':self.address}

db.create_all()