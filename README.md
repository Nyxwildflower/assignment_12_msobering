## Setting up the React App Files

> [!CAUTION]
> This repository is used for both assignment 12 and assignment 13.
> The Dockerfiles and docker-compose files will have updated ports and container names.
> The old files can be found in older commits, or as part of the handed in files.

Choose a directory to hold the files for the app and run:

```
git clone https://github.com/Nyxwildflower/assignment_12_msobering.git
```

## Running the Application

<details>

<summary>Assignment 12 Instructions</summary>

1. Open the Docker Desktop app.

2. Open the app folder in a code editor from where you cloned it earlier.

3. Please replace current Dockerfiles and docker-compose files with old files. Or use them as is, as the changes are only surface-level.

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

5. Load [localhost:8083](http://localhost:8083) on your browser to see the app running.

> [!NOTE]
> If Dockerfile and docker-compose were overwritten the app is running on [localhost:8018](http://localhost:8018) instead.

</details>

<details>

<summary>Assignment 13 Instructions</summary>

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

4. Load [localhost:8018](http://localhost:8018) on your browser to see the app running.

</details>

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
