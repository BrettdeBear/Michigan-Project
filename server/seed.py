#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
# from faker import Faker

# Local imports
from app import app
from models import db, Park, Trail, Review, Fact

if __name__ == '__main__':
    # fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!

        Park.query.delete()
        Trail.query.delete()
        Review.query.delete()
        Fact.query.delete()

        parks = []

        p1 = Park(name='Pictured Rocks National Lakeshore', location='Munising, MI', description='Pictured Rocks has nearly 100 miles of hiking trails, including 42 miles of the North Country Trail running through. Set in Michigan\'s upper peninsula on Lake Superior, Pictured Rocks contains beautiful beaches, waterfalls, woodland scenery, and sandstone cliffs going right up to Lake Superior\'s edge.', image='https://github.com/BrettdeBear/Michigan-Project/blob/main/51D2F167-C4C0-4281-8686-9ED87C5EED1E_1_105_c.jpeg?raw=true')

        parks.append(p1)

        p2 = Park(name='Isle Royale National Park', location='Keewenaw County, MI', description='Set in the middle of Lake Superior, this park is only accessible by ferry, seaplane, or private watercraft, according to the National Park Service. This park offers beautiful views of Lake Superior as well as rugged wilderness. You may even catch sight of the abundant wildlife that includes moose, foxes, and even wolves.', image='https://d2j02ha532z66v.cloudfront.net/wp-content/uploads/2018/12/IsleRoyaleNationalPark-15282.jpg')

        parks.append(p2)

        p3 = Park(name='Sleeping Bear Dunes National Lakeshore', location='Leelanau and Benzie counties, MI', description='Sleeping Bear Dunes is located in "the pinky" of Michigan\'s lower peninsula along Lake Michigan. It consists of stunning, sandy beaches and two islands--North and South Manitou Islands.', image='https://github.com/BrettdeBear/Michigan-Project/blob/main/BC2CA821-5B0E-4D69-B342-CAAE3189C36F_1_105_c.jpeg?raw=true')

        parks.append(p3)

        p4 = Park(name='Tahquamenon Falls State Park', location='Paradise, MI', description='The second largest state park in Michigan, Tahquamenon Falls is located in the upper peninsula and offers one of the largest waterfalls east of the Mississippi, according to the Michigan Department of Natural Resources. This beautiful park hosts about 16 miles of the iconic North Country Trail.', image='https://www2.dnr.state.mi.us/parksandtrails/images/SPRK/428/_Lower_Falls.jpg')

        parks.append(p4)

        p5 = Park(name='Porcupine Mountains Wilderness State Park', location='Ontanagon and Gogebic Counties, MI', description='Located in the upper peninsula, Michigan\'s largest state park sits along Lake Superior. According to the Michigan Department of Natural Resources, Porcupine Mountains, or "the Porkies", consists of thousands of acres of old growth forest.', image='https://www.mlive.com/resizer/HmdRBRuMQt4ubHJFTSinOYhjAvU=/arc-anglerfish-arc2-prod-advancelocal/public/U6CQCGAUEFBAFPWF2K5F3FXVDQ.jpg')

        parks.append(p5)

        p6 = Park(name='Warren Dunes State Park', location='Sawyer, MI', description='The smallest of the parks on this list, Warren Dunes only hosts 6 miles of hiking trails, but that doesn\'t mean that the views aren\'t spectacular. Located in southwest Michigan along the Lake Michigan Shoreline, this park offers beautiful sandy beaches perfect for a day with the family.', image='https://upload.wikimedia.org/wikipedia/commons/8/8d/Warren_Dunes_-_panoramio_%283%29.jpg')

        parks.append(p6)

        db.session.add_all(parks)
        db.session.commit()

        trails = []

        t1 = Trail(name='Mosquito Falls and Chapel Falls via Chapel Loop', length='10.5 Miles', difficulty='Moderate', description='A popular 10.5 mile loop that takes you through forests with views of waterfalls, a stunning cliff edge looking out over Lake Superior, and to beautiful beaches.', park_id=1)

        trails.append(t1)

        t2 = Trail(name='Chapel Falls', length='2.5 Miles', difficulty='Easy', description='A beautiful and short hike for the family, this hike takes you to Chapel Falls, a beautiful 60 foot high waterfall.', park_id=1)

        trails.append(t2)

        t3 = Trail(name='Miners Falls Trail', length='1.2 Miles', difficulty='Easy', description='This is a beautiful and easy park for he whole family. It is a forested trail that takes you to Miners River and to a view of a stunning waterfall.', park_id=1)

        trails.append(t3)

        t4 = Trail(name='Stoll Memorial Trail', length='4.7 Miles', difficulty='Moderate', description='This trail takes you on a hike through beautiful forests and shoreline.', park_id=2)

        trails.append(t4)

        t5 = Trail(name='Tobin Harbor Trail', length='6 Miles', difficulty='Moderate', description='A popular and moderately strenuous trail with outstanding wildlife. If you\'re lucky, you may catch sight of a moose!', park_id=2)

        trails.append(t5)

        t6 = Trail(name='Dune Climb Trail', length='3.6 Miles', difficulty='Strenuous', description='A difficult hike along the dunes of the Lake Michigan Shoreline, this trail is more than worth it. It offers very little shade, so bring a hat and sunscreen.', park_id=3)
        trails.append(t6)

        t7 = Trail(name='Pyramid Point Loop', length='2.7 Miles', difficulty='Moderate', description='This short and unique hike will take you through forests, bluffs, and meadows, according to the National Park Service. It offers stunning views of Lake Michigan.', park_id=3)

        trails.append(t7)

        t8 = Trail(name='Clark Lake Loop', length='5.2 Miles', difficulty='Moderate', description='A beautiful hike around an inland lake perfect for summer hiking or winter snowshoeing.', park_id=4)

        trails.append(t8)

        t9 = Trail(name='Upper and Lower Tahquamenon Falls', length='10.2 Miles', difficulty='Moderate', description='You can choose to break this hike up to see only the Upper Falls or the Lower Falls, but if you are hoping for a beautiful day hike, this offers beautiful scenery.', park_id=4)

        trails.append(t9)

        t10 = Trail(name='Escarpment Trail', length='8.4 Miles', difficulty='Strenuous', description='A beautiful hike with scenic views of Lake of the Clouds. This hike goes through the rolling hills, so be prepared for plenty of ups and downs!', park_id=5)

        trails.append(t10)

        t11 = Trail(name='Lake of the Clouds', length='1.8 Miles', difficulty='Easy', description='If you\'re looking for an easy way to see the Lake of the Clouds without doing the entire Escarpment Trail, you can choose to do this out and back trail with a scenic overlook.', park_id=5)

        trails.append(t11)

        t12 = Trail(name='Warren Dunes Trail', length='5 miles', difficulty='Moderate', description='A beautiful hike with scenic views of Lake Michigan and its sandy shoreline.', park_id=6)

        trails.append(t12)

        db.session.add_all(trails)
        db.session.commit()

        reviews = []

        r1 = Review(rating='5/5', text='Beautiful trail along Lake Superior!', user_id=4, trail_id=1)

        reviews.append(r1)

        r2 = Review(rating='4/5', text='Pretty, but a little to easy for my taste.', user_id=2, trail_id=11)

        reviews.append(r2)

        db.session.add_all(reviews)
        db.session.commit()

        facts = []

        f1 = Fact(fun_fact='What is Michigan\'s nickname?', answer='Officially, The Wolverine State, but there are plenty of other nicknames: The Great Lake State, The Mitten State, and plenty more!')

        facts.append(f1)

        f2 = Fact(fun_fact='What is the capital of Michigan?', answer='Lansing')

        facts.append(f2)

        f3 = Fact(fun_fact='How many miles of coastline does Michigan have?', answer='3,288 miles')

        facts.append(f3)

        f4 = Fact(fun_fact='What city, deemed the Motor City, is known as the car capital of the world?', answer='Detroit')

        facts.append(f4)

        db.session.add_all(facts)
        db.session.commit()