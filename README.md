Step 1: Create enviroment for django app
command: python -m venv venv

Step 2: Activate the environment
command: .\venv\Scripts\activate

Step 3: Install all the modules from the requirements.txt file.
command: pip install -r requirements.txt

Step 4: migrate all migrations
command: python manage.py migrate

Step 5: Install all the dependencies for Angular
command: npm install

Step 6: Now run both stack
command for Angular: ng serve --open
command for django: python manage.py runserver

IMPORTANT: Make sure to run Django server on localhost:8000 and Angular on localhost:4200
