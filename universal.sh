#!/bin/bash
shopt -s globstar
set -x

# Production Build
./node_modules/.bin/ng build --outputPath ./dist-server

# AoT Build
./node_modules/.bin/ngc

# Start server
./node_modules/.bin/ts-node ./src/server.ts


# Have a look at changes in
# - tsconfig.json
# - tsconfig.app.json
# - app.server.module.ts
# - server.ts

