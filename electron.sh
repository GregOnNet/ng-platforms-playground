#!/bin/bash
shopt -s globstar
set -x


./node_modules/.bin/ng build --outputPath ./dist-electron --base-href .

cp ./src/electron/* dist-electron

./node_modules/.bin/electron dist-electron
