#!/bin/bash
PATH=$PATH:$(npm bin)
ser -x

# Production build
ng build --prod

# Copy prebuilt worker in oure site
cp node_modules/@angular/service-worker/bundles/worker-basic.min.js dist/

# Serve
cd dist
http-server
