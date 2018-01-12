# Wordpress + NextJS example

This repo is a simple example of NextJS Application fetching data from Wordpress backend.

We use Docker to run a local Wordpress server in which we are gonna create some posts and 
then connect all of this with our frontend running NextJs.

We'll have two Docker images running, one running Wordpress and another one running a MySQL
database, the database will count with a volume just for persistence. 

## Run me

### Client

* `yarn dev` in development mode, by default will run on localhost:9056, and will hit localhost:8000

### Server

* `docker-compose up` will run the Wordpress server, by default will run on localhost:8000
