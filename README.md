Step 1: Create enviroment for django app
command : python -m venv venv

Step 2: Install all the modules from the requirements.txt file.
command : pip install -r requirements.txt

Step 3: Hit py manage.py migrate to commit all migrations
command: python manage.py migrate

Step 4: Install all the dependencies for Angular by npm install command
command: npm install

Step 5: Now run both stack
command for Angular: ng serve --open
command for django: python manage.py runserver

IMPORTANT: Make sure to run Django server on localhost:8000 and Angular on localhost:4200
