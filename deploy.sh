#!/usr/bin/env sh

set -e

npm run build

cd dist

echo 'www.talesofkavaya.com' > CNAME

git init
git add -A
git commit -m 'New Deployment'
git push -f git@github.com:pixelgalaxies/kavaya.git master:gh-pages

cd -