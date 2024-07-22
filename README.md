## Setting up the React App Files

> [!CAUTION]
> This repository is used for both Assignment 12 and Assignment 13.
> The Dockerfiles and docker-compose files will have updated ports and container names.
> The old files can be found in older commits, or as part of the Assignment 13 zip file.

If the repository has not already been cloned choose a directory to hold the
files for the app and run:

```
git clone https://github.com/Nyxwildflower/assignment_12_msobering.git
```

## Running the Application

1. Open the Docker Desktop app.

2. Open the app folder in a code editor from where you cloned it earlier.

3. Replace current Dockerfiles and docker-compose files for Assignment 13 with old files if testing Assignment 12, or use them as is.

### In Development

4. Enter this command in the editor terminal to run the app in a Docker container.

```
docker-compose -f docker-compose.dev.yml up -d --build
```

### In Production

4. Enter this command in the editor terminal to run the app in a Docker container.

```
docker-compose -f docker-compose.prod.yml up -d --build
```

5. Load [localhost:8083](http://localhost:8083) for Assignment 12 or [localhost:8018](http://localhost:8018) for Assignment 13 on your browser to see the app running.

## Shutting Down the Container

```
docker-compose -f docker-compose.dev.yml down
```

or

```
docker-compose -f docker-compose.prod.yml down
```

## Running Tests

There are several available test scripts for code formatting and component testing:

> [!NOTE]
> The Eslint and Prettier scripts only run on files in the src folder.

### Eslint

To find errors:

```
npm run lint
```

To find and fix errors:

```
npm run lint:fix
```

### Prettier

To find errors:

```
npm run format
```

To find and fix errors:

```
npm run format:fix
```

### Component Tests

```
npm run test
```
