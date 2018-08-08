# gameofdrones
Back and Front for Game of Drones project


DB: Sqlite3

Run:
docker-compose up 
django:
server: http://localhost:8000/api/1.0/
docs: http://localhost:8000/api/1.0/docs

angular:
http://localhost:8010

Or (Something happen with my angular docker -.-)

go to django project 
python manage.py migrate
python manage.py runserver

go to angular project
ng serve 
http://localhost:4200
