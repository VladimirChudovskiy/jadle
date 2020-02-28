install:
	npm install

start:
	npx node ./src/index.js

publish:
	npm publish

test:
	npx jest

lint:
	npx eslint .
