if [ -z "$1" ]; then
    echo "Usage: bumpVersion.sh [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]"
    exit 1
fi

cd ..

FROM=$(node -p "require('./package.json').version")

npm --no-git-tag-version version "$1"

TO=$(node -p "require('./package.json').version")

echo "Bumping from $FROM to $TO"

sed -i '' "s/@$FROM/@$TO/g" dist/Neanes.css
sed -i '' "s/@$FROM/@$TO/g" docs/installation.md
sed -i '' "s/@$FROM/@$TO/g" index.js

npm run build

cp -f dist/byzhtml.min.js docs/_media/byzhtml.min.js
cp -f dist/byzhtml.min.js.map docs/_media/byzhtml.min.js.map

#git tag v$TO
#git push origin v$TO