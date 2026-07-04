if [ -z "$1" ]; then
    echo "Usage: bumpVersion.sh [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]"
    exit 1
fi

cd ..

FROM=$(sed 's/.*"version": "\(.*\)".*/\1/;t;d' package.json)

npm --no-git-tag-version version $1

TO=$(sed 's/.*"version": "\(.*\)".*/\1/;t;d' package.json)

echo "Bumping from $FROM to $TO"

sed -i -e "s/@$FROM/@$TO/g" dist/Neanes.css
sed -i -e "s/@$FROM/@$TO/g" docs/installation.md
sed -i -e "s/@$FROM/@$TO/g" index.js

npm run build

cp -f dist/byzhtml.min.js docs/_media/byzhtml.min.js
cp -f dist/byzhtml.min.js.map docs/_media/byzhtml.min.js.map

#git tag v$TO
#git push origin v$TO