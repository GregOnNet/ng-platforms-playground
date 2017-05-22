#!/bin/bash
PATH=$PATH:$(npm bin)

shopt -s globstar
set -x

# Production build
ng build --prod

# [Workaround] Copy template and styles to root folder (see: https://github.com/alxhub/io17/issues/8)
cp ./src/**/*.{html,sass} .

# # Generate a new index.html with an app shell
./node_modules/.bin/ngu-app-shell --module src/app/app.module.ts \
                                  --url /loading \
                                  --insert src/app/loading/loading.module.ts \
                                  --out dist/index.html

# Copy prebuilt worker in oure site
cp node_modules/@angular/service-worker/bundles/worker-basic.min.js dist/

# [Workaround] Remove template and styles to root folder (see: https://github.com/alxhub/io17/issues/8)
rm "./"*.{html,sass}

# Copy service worker manifest (til now without tooling)
./node_modules/.bin/ngu-sw-manifest --module src/app/app.module.ts \
                                    --out dist/ngsw-manifest.json

# Serve
http-server dist/
