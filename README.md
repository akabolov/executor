# Executor app

## Run via npm

    npm run dev

## Run via docker-compose

    docker-compose up

Application is exposed via **7070 port**.

## Request body schema for **_POST /executor_** endpoint:

    { "command" : "echo test"}

## Tests

Both unit and integration tests are present, to run execute:

    npm run test
