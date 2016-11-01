# Cheesecake Labs - Fullstack Challenge

[![Build Status](https://travis-ci.org/alcmoraes/ckl-fstack-challenge.svg?branch=development)](https://travis-ci.org/alcmoraes/ckl-fstack-challenge)

## Requirements

- Docker
- Docker Compose

*The following requirements remains if you want to edit the project assets (JS, CSS, etc)*

- Node

## Assets

If you want to modify the assets you need ```Node.js``` installed in your machine. Since the entire front-end is using React
you probably want to.

Go to your project root folder and execute

    npm i --no-bin-links --loglevel=error

This project uses ```Gulp``` as asset management. You can run Gulp tasks by executing

    node_modules/gulp/bin/gulp.js [task]

from within the project root folder, where ```[task]``` could be the following ones:

    - img
    - fonts
    - public-assets
    - js
    - css

You can also just type ```node_modules/gulp/bin/gulp.js``` and it will run all tasks together.

### Watching changes

You can keep your ```src``` folder watching for changes while you modify your assets.
In order to do that, open a terminal window and execute

    node_modules/gulp/bin/gulp.js watch

An interactive shell will keep opened and each time you save an asset, the respective task to compile it will run.

### Production assets

If you're compiling assets for production you may want to add ```NODE_ENV=production``` after each ```Gulp``` command.

e.g.:

    NODE_ENV=production node_modules/gulp/bin/gulp.js

## Running the project

Run ```docker-compose up -d``` to get your containers up.

After that, you need to execute the database migration by executing

    docker exec -it [app_container_id] python manage.py migrate

Where ```[app_container_id]``` is the ```Container ID``` of the application container.

If everything goes ok, you may see your application by accessing the following URL:

    http://localhost:8000

## Checking the logs

You can always keep an eye at errors by executing

    docker logs -f [container_id]

## REST interface

You can access ```http://localhost:8000/api``` in order to access Django REST Framework interface.

## Scrapy

This project contains a ```scrapy``` application that works with Django models.

You can find it under ```crunchspider``` folder and it crawls ```http://techcrunch.com``` to populate the database.

In order to run it, you can execute the following command:

    docker exec [app_container_id] bash -c "cd crunchspider && scrapy crawl techcrunch"

## Gotchas and Tips

### Scrapy cron

You may want to put the scrapy command into a ```cronjob``` so it refreshes your database from time to time.

e.g.:
    
    */2 * * * * docker exec 3a4 bash -c "cd crunchspider && scrapy crawl techcrunch"

### Pip requirements

In case you get any dependency error, you can try to install pip requirements again.

    docker exec [app_container_id] pip install -i requirements.txt

### The first time

In some cases, you may want to ```stop``` and ```up``` compose again after run it the first time.

You know, virgin problems.



