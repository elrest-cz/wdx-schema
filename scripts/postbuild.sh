#!/bin/sh
echo "Removing debug parts"
set -x
pwd
cd build
find . -type f -name "*.js" -exec sed -i '/\/\*\! START_REMOVE/,/\/\*\! END_REMOVE \*\//d' {} +
cd ../
echo "Removing debug done"