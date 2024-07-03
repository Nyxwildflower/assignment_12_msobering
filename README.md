## Setting up the React App Files

Choose a directory to hold the files for the app and run:

```
git clone https://github.com/Nyxwildflower/assignment_12_msobering.git
```

## Running the Application

1. Open the Docker Desktop app.

2. Open the app folder in a code editor from where you cloned it earlier.

### In Development
3. Enter this command in the editor terminal to run the app in a Docker container.

```
docker-compose -f docker-compose.dev.yml up -d --build
```

### In Production
3. Enter this command in the editor terminal to run the app in a Docker container.

```
docker-compose -f docker-compose.prod.yml up -d --build
```

4. Load [localhost:8083](http://localhost:8083) on your browser to see the app running.

## Shutting Down the Container
```
docker-compose -f docker-compose.dev.yml down
```
or
```
docker-compose -f docker-compose.prod.yml down
```