#!/bin/bash

# this file moves and renames all files to prepare them for production hosting on GitHub Pages

# remove underscores in _next folder
mv ./out/_next ./out/next

# after _next folder was renamed, proceed with renaming files with wildcards in folder name
find ./out/next/static/ -type f -path "*/_buildManifest.js" | while read file; do
  mv "$file" "${file%/*}/buildManifest.js"
done
find ./out/next/static/ -type f -path "*/_ssgManifest.js" | while read file; do
  mv "$file" "${file%/*}/ssgManifest.js"
done

# rename files with wildcards in file name
find ./out/next/static/chunks/pages/ -type f -name "_app-*.js" | while read file; do
  mv "$file" "${file%/*}/${file##*/_}"
done
find ./out/next/static/chunks/pages/ -type f -name "_error-*.js" | while read file; do
  mv "$file" "${file%/*}/${file##*/_}"
done

# rename ./out folder to ./docs so that it can be used by GitHub
mv ./out ./docs

# make a commit with a version number
git add ./docs
git commit -m "Build v$(grep '"version"' ./package.json | head -1 | sed -E 's/.*"version": "(.*)".*/\1/')"

echo "New build ready to be pushed to GH Pages."