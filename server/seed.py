#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
# from faker import Faker

# Local imports
from app import app
from models import db, Park

if __name__ == '__main__':
    # fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!

        Park.query.delete()

        parks = []

        p1 = Park(name='Pictured Rocks National Lakeshore', location='Munising, MI', description='Pictured Rocks has nearly 100 miles of hiking trails, including 42 miles of the North Country Trail running through. Set in Michigan\'s upper peninsula on Lake Superior, Pictured Rocks contains beautiful beaches, waterfalls, woodland scenery, and sandstone cliffs going right up to Lake Superior\'s edge.', image='https://raw.githubusercontent.com/BrettdeBear/Michigan-Project/95c8d20bf5212799069f42f81d6fe3c48e0c7cce/51D2F167-C4C0-4281-8686-9ED87C5EED1E_1_105_c.jpeg')

        parks.append(p1)

        p2 = Park(name='Isle Royale National Park', location='Keewenaw County, MI', description='Set in the middle of Lake Superior, this park is only accessible by ferry, seaplane, or private watercraft, according to the National Park Service. This park offers beautiful views of Lake Superior as well as rugged wilderness. You may even catch sight of the abundant wildlife that includes moose, foxes, and even wolves.', image='https://d2j02ha532z66v.cloudfront.net/wp-content/uploads/2018/12/IsleRoyaleNationalPark-15282.jpg')

        parks.append(p2)

        p3 = Park(name='Sleeping Bear Dunes National Lakeshore', location='Leelanau and Benzie counties, MI', description='Sleeping Bear Dunes is located in "the pinky" of Michigan\'s lower peninsula along Lake Michigan. It consists of stunning, sandy beaches and two islands--North and South Manitou Islands.', image='https://raw.githubusercontent.com/BrettdeBear/Michigan-Project/95c8d20bf5212799069f42f81d6fe3c48e0c7cce/BC2CA821-5B0E-4D69-B342-CAAE3189C36F_1_105_c.jpeg')

        parks.append(p3)

        p4 = Park(name='Tahquamenon Falls State Park', location='Paradise, MI', description='The second largest state park in Michigan, Tahquamenon Falls is located in the upper peninsula and offers one of the largest waterfalls east of the Mississippi, according to the Michigan Department of Natural Resources. This beautiful park hosts about 16 miles of the iconic North Country Trail.', image='https://www2.dnr.state.mi.us/parksandtrails/images/SPRK/428/_Lower_Falls.jpg')

        parks.append(p4)

        p5 = Park(name='Porcupine Mountains Wilderness State Park', location='Ontanagon and Gogebic Counties, MI', description='Located in the upper peninsula, Michigan\'s largest state park sits along Lake Superior. According to the Michigan Department of Natural Resources, Porcupine Mountains, or "the Porkies", consists of thousands of acres of old growth forest.', image='https://www.mlive.com/resizer/HmdRBRuMQt4ubHJFTSinOYhjAvU=/arc-anglerfish-arc2-prod-advancelocal/public/U6CQCGAUEFBAFPWF2K5F3FXVDQ.jpg')

        parks.append(p5)

        p6 = Park(name='Warren Dunes State Park', location='Sawyer, MI', description='The smallest of the parks on this list, Warren Dunes only hosts 6 miles of hiking trails, but that doesn\'t mean that the views aren\'t spectacular. Located in southwest Michigan along the Lake Michigan Shoreline, this park offers beautiful sandy beaches perfect for a day with the family.', image='https://upload.wikimedia.org/wikipedia/commons/8/8d/Warren_Dunes_-_panoramio_%283%29.jpg')

        parks.append(p6)

        db.session.add_all(parks)
        db.session.commit()
