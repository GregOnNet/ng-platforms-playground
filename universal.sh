#!/bin/bash
PATH=$PATH:$(npm bin)

shopt -s globstar
set -x

# Production Build
./node_modules/.bin/ng build --outputPath ./dist-server

# Copy prebuilt worker in oure site
cp node_modules/@angular/service-worker/bundles/worker-basic.min.js dist/

# [Workaround] Copy template and styles to root folder (see: https://github.com/alxhub/io17/issues/8)
cp ./src/**/*.{html,sass} .

# Copy service worker manifest (til now without tooling)
./node_modules/.bin/ngu-sw-manifest --module src/app/app.module.ts \
                                    --out dist-server/ngsw-manifest.json

# [Workaround] Remove template and styles to root folder (see: https://github.com/alxhub/io17/issues/8)
rm "./"*.{html,sass}

# Copy prebuilt worker in oure site
cp node_modules/@angular/service-worker/bundles/worker-basic.min.js dist-server/

# AoT Build
./node_modules/.bin/ngc

# Start server
./node_modules/.bin/ts-node ./src/server.ts
