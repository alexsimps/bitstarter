#!/bin/bash

cd~
cd bitstarter

echo "Script to test web.js"

git add web.js;
git commit -m " another edit of web.js";
git push heroku master;



cd~
echo "web.js should be ready to test"
