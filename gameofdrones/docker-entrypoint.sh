#!/bin/bash

# Apply database migrations
echo "Apply database migrations"
cd gameofdrones
python manage.py migrate

echo "runserver"
python manage.py runserver 0.0.0.0:8000
