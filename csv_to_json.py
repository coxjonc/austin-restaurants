#!usr/bin/python
import csv, json

csvf = open('restaurants.csv', 'r')
jsonf = open('restaurants.json', 'w')

reader = csv.DictReader(csvf)

for row in reader:
    jsonf.write(json.dumps(row))
    jsonf.write(',\n')

jsonf.close()
