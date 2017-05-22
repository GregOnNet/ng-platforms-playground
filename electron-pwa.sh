# !/bin/bash
shopt -s globstar
set -x

./node_modules/.bin/ng build --prod --outputPath ./dist-electron5 --base-href .

cp ./src/electron/* dist-electron5

# [Workaround] Copy template and styles to root folder (see: https://github.com/alxhub/io17/issues/8)
cp ./src/**/*.{html,sass} .

# # Generate a new index.html with an app shell
./node_modules/.bin/ngu-app-shell --module src/app/app.module.ts \
                                  --url /loading \
                                  --insert src/app/loading/loading.module.ts \
                                  --out dist-electron/index.html

# Copy prebuilt worker in oure site
cp node_modules/@angular/service-worker/bundles/worker-basic.min.js dist-electron5/

# Copy service worker manifest (til now without tooling)
./node_modules/.bin/ngu-sw-manifest --module src/app/app.module.ts \
                                    --out dist-electron/ngsw-manifest.json

# [Workaround] Remove template and styles to root folder (see: https://github.com/alxhub/io17/issues/8)
rm "./"*.{html,sass}

./node_modules/.bin/electron dist-electron5
