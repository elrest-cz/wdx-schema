#!/bin/bash
set -x
pwd
cd build && find . -type f | xargs sed -i '/\/\/\ START_REMOVE/,/\/\/\ END_REMOVE/{//!d}' && cd ..
