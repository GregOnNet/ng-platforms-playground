#!/bin/bash
shopt -s globstar
set -x

# Production build
./node_modules/.bin/ng build --prod --outputPath ./dist

# Have a look at changes in
# - app.module.ts
# - ngsw-manifest.json
