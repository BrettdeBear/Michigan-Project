from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property

from config import db, bcrypt

# Models go here!
class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    serialize_rules = ('-review',)

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    email = db.Column(db.String)
    
    _password_hash = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    @hybrid_property
    def password_hash(self):
        return self._password_hash
    
    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(self._password_hash, password.encode('utf-8'))
    
class Park(db.Model, SerializerMixin):
    __tablename__ = 'parks'

    # serialize_rules = ('-trail',)

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    location = db.Column(db.String)
    description = db.Column(db.String)
    image = db.Column(db.String)

class Trail(db.Model, SerializerMixin):
    __tablename__ = 'trails'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    length = db.Column(db.String)
    difficulty = db.Column(db.String)
    description = db.Column(db.String)
    image = db.Column(db.String)

    park_id = db.Column(db.Integer, db.ForeignKey('parks.id'))

    park = db.relationship('Park', backref='trail')
    serialize_rules = ('-park',)

class Review(db.Model, SerializerMixin):
    __tablename__ = 'reviews'

    serialize_rules = ('-trail', '-users._password_hash', '-users.created_at', '-users.updated_at', '-users.email')

    id = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.String)
    text = db.Column(db.String)
    image = db.Column(db.String)

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    trail_id = db.Column(db.Integer, db.ForeignKey('trails.id'))

    users = db.relationship('User', backref='review')
    trail = db.relationship('Trail', backref='review')

class Fact(db.Model, SerializerMixin):
    __tablename__ = 'facts'

    id = db.Column(db.Integer, primary_key=True)
    fun_fact = db.Column(db.String)
    answer = db.Column(db.String)

    