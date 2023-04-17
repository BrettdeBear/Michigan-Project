#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import Flask, request, make_response, session, jsonify, abort
from flask_restful import Resource



# Local imports
from config import app, db, api
from models import User, Park, Trail, Review, Fact

# Views go here!


class Signup(Resource):
    def post(self):
        data = request.get_json()
        new_user = User(name=data['name'], email=data['email'])
        new_user.password_hash = data['password']

        db.session.add(new_user)
        db.session.commit()

        session['user_id'] = new_user.id

        response = make_response(
            new_user.to_dict(),
            201
        )
        return response
    
api.add_resource(Signup, '/signup')

class Login(Resource):
    def post(self):
        try: 
            user = User.query.filter_by(name=request.get_json()['name']).first()
            if user.authenticate(request.get_json()['password']):
                session['user_id'] = user.id
                response = make_response(
                    user.to_dict(),
                    200
                )
            return response
        except:
            abort(401, "Incorrect Username or Password")

api.add_resource(Login, '/login')

class AuthorizedSession(Resource):
    def get(self):
        try:
            user = User.query.filter_by(id=session['user_id']).first()
            response = make_response(
                user.to_dict(),
                200
            )
            return response
        except:
            abort(401, "Unauthorized")

api.add_resource(AuthorizedSession, '/authorized')

class Logout(Resource):
    def delete(self):
        session['user_id'] = None
        response = make_response('', 204)
        return response
    
api.add_resource(Logout, '/logout')

class Parks(Resource):
    def get(self):
        park_list = [park.to_dict() for park in Park.query.all()]
        response = make_response(
            park_list,
            200
        )
        return response
    
api.add_resource(Parks, '/parks')

class ParkById(Resource):
    def get(self, id):
        park = Park.query.filter_by(id=id).first()
        response = make_response(
            park.to_dict(),
            200
        )
        return response
    
api.add_resource(ParkById, '/parks/<int:id>')

class Trails(Resource):
    def get(self):
        trail_list = [trail.to_dict() for trail in Trail.query.all()]
        response = make_response(
            trail_list,
            200
        )
        return response

api.add_resource(Trails, '/trails')

class TrailById(Resource):
    def get(self, id):
        trail = Trail.query.filter_by(id=id).first()
        response = make_response(
            trail.to_dict(),
            200
        )
        return response

api.add_resource(TrailById, '/trails/<int:id>')

class Reviews(Resource):
    def get(self):
        review_list = [review.to_dict() for review in Review.query.all()]
        response = make_response(
            review_list,
            200
        )
        return response
    
    def post(self):
        data=request.get_json()
        new_review = Review(
            rating=data['rating'],
            text=data['text'],
            image=data['image'],
            user_id=session['user_id'],
            trail_id=data['trail_id']
        )
        db.session.add(new_review)
        db.session.commit()

        response = make_response(
            new_review.to_dict(),
            201
        )
        return response
    
api.add_resource(Reviews, '/reviews')

class ReviewById(Resource):
    def get(self, id):
        review = Review.query.filter_by(id=id).first()
        response = make_response(
            review.to_dict(),
            200
        )
        return response
    
    def delete(self, id):
        review = Review.query.filter_by(id=id).first()
        if session['user_id'] == review.user_id:

            db.session.delete(review)
            db.session.commit()
            return make_response('deleted', 200)
        
    def patch(self, id):
        review = Review.query.filter_by(id=id).first()
        if session['user_id'] == review.user_id:
            data = request.get_json()
            for key in data:
                setattr(review, key, data[key])
            db.session.add(review)
            db.session.commit()

            response = make_response(
                review.to_dict(),
                200
            )
            return response

api.add_resource(ReviewById, '/reviews/<int:id>')

class Facts(Resource):
    def get(self):
        fact_list = [fact.to_dict() for fact in Fact.query.all()]
        response = make_response(
            fact_list,
            200
        )
        return response
    
api.add_resource(Facts, '/facts')

if __name__ == '__main__':
    app.run(port=5000, debug=True)
