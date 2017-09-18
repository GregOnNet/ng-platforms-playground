#!/bin/bash
shopt -s globstar
set -x

## clean build
rm -rf dist/

# Production build
./node_modules/.bin/ng build --prod --outputPath ./dist

# [Workaround] Copy template and styles to root folder (see: https://github.com/alxhub/io17/issues/8)
cp ./src/**/*.{html,css,sass} .

# Prepare App-Shell here
# Generate a new index.html with an simple app shell
# Generate a new index.html with an app shell having a loading spinner
./node_modules/.bin/ngu-app-shell --module src/app/app.module.ts \
                         --url /loading \
                         --insert src/app/loading/loading.module.ts \
                         --out dist/index.html

# Copy prebuilt worker in oure site
cp node_modules/@angular/service-worker/bundles/worker-basic.min.js dist/

# Copy service worker manifest (til now without tooling)
./node_modules/.bin/ngu-sw-manifest --module src/app/app.module.ts \
                                    --out dist/ngsw-manifest.json

# [Workaround] Remove template and styles to root folder (see: https://github.com/alxhub/io17/issues/8)
rm ./*.{html,css,sass}

# Serve
./node_modules/.bin/http-server dist
