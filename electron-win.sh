#!/bin/bash
set -x

## clean build
rm -rf dist-electron/ build/

./node_modules/.bin/ng build --outputPath ./dist-electron --base-href .

cp ./src/electron/* dist-electron

./node_modules/.bin/electron-packager dist-electron books \
                                      --platform=win32 \
                                      --arch=x64 \
                                      --out build
